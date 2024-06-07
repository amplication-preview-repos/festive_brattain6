import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttendanceHistoryServiceBase } from "./base/attendanceHistory.service.base";

@Injectable()
export class AttendanceHistoryService extends AttendanceHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
