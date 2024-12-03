import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PosInvoiceMergeLogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput
          label="consolidatedCreditNote"
          source="consolidatedCreditNote"
        />
        <TextInput label="consolidatedInvoice" source="consolidatedInvoice" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customerGroup" source="customerGroup" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="mergeInvoicesBasedOn" source="mergeInvoicesBasedOn" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="posClosingEntry" source="posClosingEntry" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <DateTimeInput label="postingTime" source="postingTime" />
      </SimpleForm>
    </Create>
  );
};
