import { AttendanceHistoryWhereInput } from "./AttendanceHistoryWhereInput";
import { AttendanceHistoryOrderByInput } from "./AttendanceHistoryOrderByInput";

export type AttendanceHistoryFindManyArgs = {
  where?: AttendanceHistoryWhereInput;
  orderBy?: Array<AttendanceHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
