import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConstraintList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Constraints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Depth" source="depth" />
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
