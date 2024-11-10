import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailFlagQueueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailFlagQueues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="action" source="action" />
        <TextField label="communication" source="communication" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_account" source="emailAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="is_completed" source="isCompleted" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="uid" source="uid" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
