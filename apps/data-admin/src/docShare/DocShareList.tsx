import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocShareList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DocShares"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="everyone" source="everyone" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="notify_by_email" source="notifyByEmail" />
        <TextField label="owner" source="owner" />
        <TextField label="read" source="read" />
        <TextField label="share" source="share" />
        <TextField label="share_doctype" source="shareDoctype" />
        <TextField label="share_name" source="shareName" />
        <TextField label="submit" source="submit" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
        <TextField label="write" source="write" />{" "}
      </Datagrid>
    </List>
  );
};
