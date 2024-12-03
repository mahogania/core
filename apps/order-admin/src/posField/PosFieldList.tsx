import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PosFieldList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"POSFields"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="defaultValue" source="defaultValue" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="fieldname" source="fieldname" />
        <TextField label="fieldtype" source="fieldtype" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="label" source="label" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="options" source="options" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="readOnly" source="readOnly" />
        <TextField label="reqd" source="reqd" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
