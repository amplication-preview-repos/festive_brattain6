import { AttendanceHistory } from "../attendanceHistory/AttendanceHistory";

export type Teacher = {
  attendanceHistories?: Array<AttendanceHistory>;
  createdAt: Date;
  date: Date | null;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  role: string | null;
  status: string | null;
  updatedAt: Date;
};
