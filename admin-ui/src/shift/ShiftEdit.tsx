import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const ShiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Actual Finish" source="actualFinish" />
        <DateTimeInput label="Actual Start" source="actualStart" />
        <DateTimeInput label="Scheduled Finish" source="scheduledFinish" />
        <DateTimeInput label="Scheduled Start" source="scheduledStart" />
      </SimpleForm>
    </Edit>
  );
};
