import { AttendanceHistoryListRelationFilter } from "../attendanceHistory/AttendanceHistoryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  attendanceHistories?: AttendanceHistoryListRelationFilter;
  date?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  role?: StringNullableFilter;
  status?: StringNullableFilter;
};
