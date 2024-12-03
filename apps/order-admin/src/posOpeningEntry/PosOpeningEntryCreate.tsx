import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PosOpeningEntryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="periodEndDate" source="periodEndDate" />
        <DateTimeInput label="periodStartDate" source="periodStartDate" />
        <TextInput label="posClosingEntry" source="posClosingEntry" />
        <TextInput label="posProfile" source="posProfile" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <NumberInput step={1} label="setPostingDate" source="setPostingDate" />
        <TextInput label="status" source="status" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
