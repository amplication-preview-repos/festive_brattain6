import { AttendanceHistory as TAttendanceHistory } from "../api/attendanceHistory/AttendanceHistory";

export const ATTENDANCEHISTORY_TITLE_FIELD = "status";

export const AttendanceHistoryTitle = (record: TAttendanceHistory): string => {
  return record.status?.toString() || String(record.id);
};
