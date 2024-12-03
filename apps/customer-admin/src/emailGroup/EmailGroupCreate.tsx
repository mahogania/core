import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EmailGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="add_query_parameters"
          source="addQueryParameters"
        />
        <TextInput
          label="confirmation_email_template"
          source="confirmationEmailTemplate"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
        <NumberInput
          step={1}
          label="total_subscribers"
          source="totalSubscribers"
        />
        <TextInput
          label="welcome_email_template"
          source="welcomeEmailTemplate"
        />
        <TextInput label="welcome_url" source="welcomeUrl" />
      </SimpleForm>
    </Create>
  );
};
