import * as graphql from "@nestjs/graphql";
import { AttendanceHistoryResolverBase } from "./base/attendanceHistory.resolver.base";
import { AttendanceHistory } from "./base/AttendanceHistory";
import { AttendanceHistoryService } from "./attendanceHistory.service";

@graphql.Resolver(() => AttendanceHistory)
export class AttendanceHistoryResolver extends AttendanceHistoryResolverBase {
  constructor(protected readonly service: AttendanceHistoryService) {
    super(service);
  }
}
