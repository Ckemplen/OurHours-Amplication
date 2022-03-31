import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <NumberInput label="Hourly Rate" source="hourlyRate" />
        <TextInput label="Last Name" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
