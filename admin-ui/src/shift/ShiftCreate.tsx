import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const ShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Actual Finish" source="actualFinish" />
        <DateTimeInput label="Actual Start" source="actualStart" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <DateTimeInput label="Scheduled Finish" source="scheduledFinish" />
        <DateTimeInput label="Scheduled Start" source="scheduledStart" />
      </SimpleForm>
    </Create>
  );
};
