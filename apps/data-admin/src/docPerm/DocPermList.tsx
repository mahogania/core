import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocPermList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DocPerms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amend" source="amend" />
        <TextField label="cancel" source="cancel" />
        <TextField label="create" source="create" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="delete" source="deleteField" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email" source="email" />
        <TextField label="export" source="exportField" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="if_owner" source="ifOwner" />
        <TextField label="import" source="importField" />
        <TextField label="match" source="match" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="permlevel" source="permlevel" />
        <TextField label="print" source="print" />
        <TextField label="read" source="read" />
        <TextField label="report" source="report" />
        <TextField label="role" source="role" />
        <TextField label="select" source="select" />
        <TextField label="share" source="share" />
        <TextField label="submit" source="submit" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="write" source="write" />{" "}
      </Datagrid>
    </List>
  );
};
