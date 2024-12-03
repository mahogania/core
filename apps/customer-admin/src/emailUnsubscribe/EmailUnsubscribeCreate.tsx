import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const EmailUnsubscribeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email" source="email" />
        <BooleanInput label="global_unsubscribe" source="globalUnsubscribe" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <TextInput label="reference_name" source="referenceName" />
      </SimpleForm>
    </Create>
  );
};
