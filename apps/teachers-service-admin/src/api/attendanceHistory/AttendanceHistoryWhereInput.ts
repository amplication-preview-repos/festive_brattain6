import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type AttendanceHistoryWhereInput = {
  checkIn?: DateTimeNullableFilter;
  checkOut?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
};
