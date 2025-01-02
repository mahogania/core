import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DeferredAccountingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="endDate" source="endDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};