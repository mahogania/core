import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaTriggerScriptList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AreaTriggerScripts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="entry" source="entry" />
        <TextField label="ID" source="id" />
        <TextField label="ScriptName" source="scriptName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
