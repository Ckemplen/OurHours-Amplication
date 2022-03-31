import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ShiftList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shifts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Actual Finish" source="actualFinish" />
        <TextField label="Actual Start" source="actualStart" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Scheduled Finish" source="scheduledFinish" />
        <TextField label="Scheduled Start" source="scheduledStart" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
