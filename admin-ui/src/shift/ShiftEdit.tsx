import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const ShiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
