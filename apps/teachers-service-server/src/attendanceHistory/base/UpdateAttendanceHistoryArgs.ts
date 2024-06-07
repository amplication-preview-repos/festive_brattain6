/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceHistoryWhereUniqueInput } from "./AttendanceHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AttendanceHistoryUpdateInput } from "./AttendanceHistoryUpdateInput";

@ArgsType()
class UpdateAttendanceHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => AttendanceHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttendanceHistoryWhereUniqueInput)
  @Field(() => AttendanceHistoryWhereUniqueInput, { nullable: false })
  where!: AttendanceHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AttendanceHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => AttendanceHistoryUpdateInput)
  @Field(() => AttendanceHistoryUpdateInput, { nullable: false })
  data!: AttendanceHistoryUpdateInput;
}

export { UpdateAttendanceHistoryArgs as UpdateAttendanceHistoryArgs };
