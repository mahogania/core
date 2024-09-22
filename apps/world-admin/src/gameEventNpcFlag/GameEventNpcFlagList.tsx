import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventNpcFlagList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEventNpcFlags"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="npcflag" source="npcflag" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
