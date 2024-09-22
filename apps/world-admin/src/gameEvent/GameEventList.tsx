import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="announce" source="announce" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="end_time" source="endTime" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="holiday" source="holiday" />
        <TextField label="holidayStage" source="holidayStage" />
        <TextField label="ID" source="id" />
        <TextField label="length" source="length" />
        <TextField label="occurence" source="occurence" />
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="world_event" source="worldEvent" />{" "}
      </Datagrid>
    </List>
  );
};
