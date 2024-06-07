/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AttendanceHistory as PrismaAttendanceHistory,
  Teacher as PrismaTeacher,
} from "@prisma/client";

export class AttendanceHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttendanceHistoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attendanceHistory.count(args);
  }

  async attendanceHistories<T extends Prisma.AttendanceHistoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceHistoryFindManyArgs>
  ): Promise<PrismaAttendanceHistory[]> {
    return this.prisma.attendanceHistory.findMany<Prisma.AttendanceHistoryFindManyArgs>(
      args
    );
  }
  async attendanceHistory<T extends Prisma.AttendanceHistoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceHistoryFindUniqueArgs>
  ): Promise<PrismaAttendanceHistory | null> {
    return this.prisma.attendanceHistory.findUnique(args);
  }
  async createAttendanceHistory<T extends Prisma.AttendanceHistoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceHistoryCreateArgs>
  ): Promise<PrismaAttendanceHistory> {
    return this.prisma.attendanceHistory.create<T>(args);
  }
  async updateAttendanceHistory<T extends Prisma.AttendanceHistoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceHistoryUpdateArgs>
  ): Promise<PrismaAttendanceHistory> {
    return this.prisma.attendanceHistory.update<T>(args);
  }
  async deleteAttendanceHistory<T extends Prisma.AttendanceHistoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceHistoryDeleteArgs>
  ): Promise<PrismaAttendanceHistory> {
    return this.prisma.attendanceHistory.delete(args);
  }

  async getTeacher(parentId: string): Promise<PrismaTeacher | null> {
    return this.prisma.attendanceHistory
      .findUnique({
        where: { id: parentId },
      })
      .teacher();
  }
}
