import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AttendanceHistoryTitle } from "../attendanceHistory/AttendanceHistoryTitle";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendanceHistories"
          reference="AttendanceHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceHistoryTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="role" source="role" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
