/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Teacher } from "./Teacher";
import { TeacherCountArgs } from "./TeacherCountArgs";
import { TeacherFindManyArgs } from "./TeacherFindManyArgs";
import { TeacherFindUniqueArgs } from "./TeacherFindUniqueArgs";
import { CreateTeacherArgs } from "./CreateTeacherArgs";
import { UpdateTeacherArgs } from "./UpdateTeacherArgs";
import { DeleteTeacherArgs } from "./DeleteTeacherArgs";
import { AttendanceHistoryFindManyArgs } from "../../attendanceHistory/base/AttendanceHistoryFindManyArgs";
import { AttendanceHistory } from "../../attendanceHistory/base/AttendanceHistory";
import { TeacherService } from "../teacher.service";
@graphql.Resolver(() => Teacher)
export class TeacherResolverBase {
  constructor(protected readonly service: TeacherService) {}

  async _teachersMeta(
    @graphql.Args() args: TeacherCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Teacher])
  async teachers(
    @graphql.Args() args: TeacherFindManyArgs
  ): Promise<Teacher[]> {
    return this.service.teachers(args);
  }

  @graphql.Query(() => Teacher, { nullable: true })
  async teacher(
    @graphql.Args() args: TeacherFindUniqueArgs
  ): Promise<Teacher | null> {
    const result = await this.service.teacher(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Teacher)
  async createTeacher(
    @graphql.Args() args: CreateTeacherArgs
  ): Promise<Teacher> {
    return await this.service.createTeacher({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Teacher)
  async updateTeacher(
    @graphql.Args() args: UpdateTeacherArgs
  ): Promise<Teacher | null> {
    try {
      return await this.service.updateTeacher({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Teacher)
  async deleteTeacher(
    @graphql.Args() args: DeleteTeacherArgs
  ): Promise<Teacher | null> {
    try {
      return await this.service.deleteTeacher(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [AttendanceHistory], {
    name: "attendanceHistories",
  })
  async findAttendanceHistories(
    @graphql.Parent() parent: Teacher,
    @graphql.Args() args: AttendanceHistoryFindManyArgs
  ): Promise<AttendanceHistory[]> {
    const results = await this.service.findAttendanceHistories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
