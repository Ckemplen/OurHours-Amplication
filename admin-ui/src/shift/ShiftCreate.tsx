import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const ShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Actual Finish" source="actualFinish" />
        <DateTimeInput label="Actual Start" source="actualStart" />
        <DateTimeInput label="Scheduled Finish" source="scheduledFinish" />
        <DateTimeInput label="Scheduled Start" source="scheduledStart" />
      </SimpleForm>
    </Create>
  );
};
