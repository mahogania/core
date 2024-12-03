import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DiscussionTopicCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <TextInput label="reference_docname" source="referenceDocname" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
