import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const SalesInvoicePaymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <NumberInput label="amount" source="amount" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <DateTimeInput label="clearanceDate" source="clearanceDate" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="default" source="defaultField" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modeOfPayment" source="modeOfPayment" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="referenceNo" source="referenceNo" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
