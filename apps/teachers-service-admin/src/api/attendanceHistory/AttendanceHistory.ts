import { Teacher } from "../teacher/Teacher";

export type AttendanceHistory = {
  checkIn: Date | null;
  checkOut: Date | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status: string | null;
  teacher?: Teacher | null;
  updatedAt: Date;
};
