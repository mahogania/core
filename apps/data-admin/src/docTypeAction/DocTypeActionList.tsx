import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocTypeActionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DocTypeActions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="action" source="action" />
        <TextField label="action_type" source="actionType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custom" source="custom" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="group" source="group" />
        <TextField label="hidden" source="hidden" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="label" source="label" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
