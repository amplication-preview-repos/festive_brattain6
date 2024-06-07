import { AttendanceHistoryUpdateManyWithoutTeachersInput } from "./AttendanceHistoryUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  attendanceHistories?: AttendanceHistoryUpdateManyWithoutTeachersInput;
  date?: Date | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  role?: string | null;
  status?: string | null;
};
