import { Module } from "@nestjs/common";
import { AttendanceHistoryModuleBase } from "./base/attendanceHistory.module.base";
import { AttendanceHistoryService } from "./attendanceHistory.service";
import { AttendanceHistoryController } from "./attendanceHistory.controller";
import { AttendanceHistoryResolver } from "./attendanceHistory.resolver";

@Module({
  imports: [AttendanceHistoryModuleBase],
  controllers: [AttendanceHistoryController],
  providers: [AttendanceHistoryService, AttendanceHistoryResolver],
  exports: [AttendanceHistoryService],
})
export class AttendanceHistoryModule {}
