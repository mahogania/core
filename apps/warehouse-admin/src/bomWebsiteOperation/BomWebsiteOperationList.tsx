import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BomWebsiteOperationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMWebsiteOperations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="operation" source="operation" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="thumbnail" source="thumbnail" />
        <TextField label="timeInMins" source="timeInMins" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="websiteImage" source="websiteImage" />
        <TextField label="workstation" source="workstation" />{" "}
      </Datagrid>
    </List>
  );
};
