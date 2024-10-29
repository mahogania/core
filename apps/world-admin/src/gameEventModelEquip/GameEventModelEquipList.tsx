import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventModelEquipList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEventModelEquips"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Equipment ID" source="equipmentId" />
        <TextField label="ID" source="id" />
        <TextField label="Model ID" source="modelid" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
