import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type AttendanceHistoryUpdateInput = {
  checkIn?: Date | null;
  checkOut?: Date | null;
  date?: Date | null;
  status?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
