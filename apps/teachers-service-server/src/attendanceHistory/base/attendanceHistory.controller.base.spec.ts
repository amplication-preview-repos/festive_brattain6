import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AttendanceHistoryController } from "../attendanceHistory.controller";
import { AttendanceHistoryService } from "../attendanceHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  checkIn: new Date(),
  checkOut: new Date(),
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  status: "exampleStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  checkIn: new Date(),
  checkOut: new Date(),
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  status: "exampleStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    checkIn: new Date(),
    checkOut: new Date(),
    createdAt: new Date(),
    date: new Date(),
    id: "exampleId",
    status: "exampleStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  checkIn: new Date(),
  checkOut: new Date(),
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  status: "exampleStatus",
  updatedAt: new Date(),
};

const service = {
  createAttendanceHistory() {
    return CREATE_RESULT;
  },
  attendanceHistories: () => FIND_MANY_RESULT,
  attendanceHistory: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AttendanceHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AttendanceHistoryService,
          useValue: service,
        },
      ],
      controllers: [AttendanceHistoryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /attendanceHistories", async () => {
    await request(app.getHttpServer())
      .post("/attendanceHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkIn: CREATE_RESULT.checkIn.toISOString(),
        checkOut: CREATE_RESULT.checkOut.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /attendanceHistories", async () => {
    await request(app.getHttpServer())
      .get("/attendanceHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          checkIn: FIND_MANY_RESULT[0].checkIn.toISOString(),
          checkOut: FIND_MANY_RESULT[0].checkOut.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /attendanceHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attendanceHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /attendanceHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attendanceHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        checkIn: FIND_ONE_RESULT.checkIn.toISOString(),
        checkOut: FIND_ONE_RESULT.checkOut.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /attendanceHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/attendanceHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkIn: CREATE_RESULT.checkIn.toISOString(),
        checkOut: CREATE_RESULT.checkOut.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/attendanceHistories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
