import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const EmailGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="add_query_parameters"
          source="addQueryParameters"
        />
        <TextField
          label="confirmation_email_template"
          source="confirmationEmailTemplate"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="title" source="title" />
        <TextField label="total_subscribers" source="totalSubscribers" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="welcome_email_template"
          source="welcomeEmailTemplate"
        />
        <TextField label="welcome_url" source="welcomeUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
