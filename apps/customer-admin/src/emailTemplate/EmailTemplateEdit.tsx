import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const EmailTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="response" multiline source="response" />
        <TextInput label="response_html" multiline source="responseHtml" />
        <TextInput label="subject" source="subject" />
        <BooleanInput label="use_html" source="useHtml" />
      </SimpleForm>
    </Edit>
  );
};
