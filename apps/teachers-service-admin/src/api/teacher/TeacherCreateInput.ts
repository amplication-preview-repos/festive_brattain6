import { AttendanceHistoryCreateNestedManyWithoutTeachersInput } from "./AttendanceHistoryCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  attendanceHistories?: AttendanceHistoryCreateNestedManyWithoutTeachersInput;
  date?: Date | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  role?: string | null;
  status?: string | null;
};
