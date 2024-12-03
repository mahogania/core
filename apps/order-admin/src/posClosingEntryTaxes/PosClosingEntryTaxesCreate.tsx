import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PosClosingEntryTaxesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accountHead" source="accountHead" />
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <NumberInput label="rate" source="rate" />
      </SimpleForm>
    </Create>
  );
};
