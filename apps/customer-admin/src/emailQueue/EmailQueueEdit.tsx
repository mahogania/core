import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EmailQueueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="add_unsubscribe_link"
          source="addUnsubscribeLink"
        />
        <TextInput label="attachments" multiline source="attachments" />
        <TextInput label="communication" source="communication" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_account" source="emailAccount" />
        <TextInput label="error" multiline source="errorField" />
        <TextInput label="expose_recipients" source="exposeRecipients" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="message_id" multiline source="messageId" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="priority" source="priority" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <TextInput label="reference_name" source="referenceName" />
        <NumberInput step={1} label="retry" source="retry" />
        <DateTimeInput label="send_after" source="sendAfter" />
        <TextInput label="sender" source="sender" />
        <TextInput label="show_as_cc" multiline source="showAsCc" />
        <TextInput label="status" source="status" />
        <TextInput label="unsubscribe_method" source="unsubscribeMethod" />
        <TextInput label="unsubscribe_param" source="unsubscribeParam" />
      </SimpleForm>
    </Edit>
  );
};
