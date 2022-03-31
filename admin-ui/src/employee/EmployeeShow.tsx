import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Hourly Rate" source="hourlyRate" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
