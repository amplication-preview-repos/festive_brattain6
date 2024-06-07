import { SortOrder } from "../../util/SortOrder";

export type AttendanceHistoryOrderByInput = {
  checkIn?: SortOrder;
  checkOut?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};
