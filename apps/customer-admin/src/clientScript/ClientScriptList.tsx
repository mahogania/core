import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientScriptList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClientScripts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dt" source="dt" />
        <TextField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="module" source="moduleField" />
        <TextField label="owner" source="owner" />
        <TextField label="script" source="script" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="view" source="view" />{" "}
      </Datagrid>
    </List>
  );
};
