import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocTypeLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DocTypeLinks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custom" source="custom" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="group" source="group" />
        <TextField label="hidden" source="hidden" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_child_table" source="isChildTable" />
        <TextField label="link_doctype" source="linkDoctype" />
        <TextField label="link_fieldname" source="linkFieldname" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parent_doctype" source="parentDoctype" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="table_fieldname" source="tableFieldname" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
