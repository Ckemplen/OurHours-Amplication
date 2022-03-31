import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { ShiftTitle } from "../shift/ShiftTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <NumberInput label="Hourly Rate" source="hourlyRate" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="shifts"
          reference="Shift"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShiftTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
