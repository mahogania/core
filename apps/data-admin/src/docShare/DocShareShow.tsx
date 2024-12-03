import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DocShareShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="write" source="write" />
      </SimpleShowLayout>
    </Show>
  );
};
