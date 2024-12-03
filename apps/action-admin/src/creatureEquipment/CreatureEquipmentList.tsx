import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureEquipmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureEquipments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Asset" source="appereance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Visual" source="visual" />{" "}
      </Datagrid>
    </List>
  );
};
