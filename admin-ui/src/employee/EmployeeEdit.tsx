import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <NumberInput label="Hourly Rate" source="hourlyRate" />
        <TextInput label="Last Name" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
