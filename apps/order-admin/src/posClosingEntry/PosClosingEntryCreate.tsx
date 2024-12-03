import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PosClosingEntryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <TextInput label="errorMessage" multiline source="errorMessage" />
        <NumberInput label="grandTotal" source="grandTotal" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="netTotal" source="netTotal" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="periodEndDate" source="periodEndDate" />
        <DateTimeInput label="periodStartDate" source="periodStartDate" />
        <TextInput label="posOpeningEntry" source="posOpeningEntry" />
        <TextInput label="posProfile" source="posProfile" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <DateTimeInput label="postingTime" source="postingTime" />
        <TextInput label="status" source="status" />
        <NumberInput label="totalQuantity" source="totalQuantity" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
