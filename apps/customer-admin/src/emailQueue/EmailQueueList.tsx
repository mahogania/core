import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailQueueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailQueues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField
          label="add_unsubscribe_link"
          source="addUnsubscribeLink"
        />
        <TextField label="attachments" source="attachments" />
        <TextField label="communication" source="communication" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_account" source="emailAccount" />
        <TextField label="error" source="errorField" />
        <TextField label="expose_recipients" source="exposeRecipients" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="message" source="message" />
        <TextField label="message_id" source="messageId" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="priority" source="priority" />
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="reference_name" source="referenceName" />
        <TextField label="retry" source="retry" />
        <TextField label="send_after" source="sendAfter" />
        <TextField label="sender" source="sender" />
        <TextField label="show_as_cc" source="showAsCc" />
        <TextField label="status" source="status" />
        <TextField label="unsubscribe_method" source="unsubscribeMethod" />
        <TextField label="unsubscribe_param" source="unsubscribeParam" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
