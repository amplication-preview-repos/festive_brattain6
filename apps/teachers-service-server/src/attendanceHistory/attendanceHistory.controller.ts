import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttendanceHistoryService } from "./attendanceHistory.service";
import { AttendanceHistoryControllerBase } from "./base/attendanceHistory.controller.base";

@swagger.ApiTags("attendanceHistories")
@common.Controller("attendanceHistories")
export class AttendanceHistoryController extends AttendanceHistoryControllerBase {
  constructor(protected readonly service: AttendanceHistoryService) {
    super(service);
  }
}
