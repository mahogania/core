import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BankClearanceDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="against_account" source="againstAccount" />
        <TextInput label="amount" source="amount" />
        <DateTimeInput label="cheque_date" source="chequeDate" />
        <TextInput label="cheque_number" source="chequeNumber" />
        <DateTimeInput label="clearance_date" source="clearanceDate" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="payment_document" source="paymentDocument" />
        <TextInput label="payment_entry" source="paymentEntry" />
        <DateTimeInput label="posting_date" source="postingDate" />
      </SimpleForm>
    </Create>
  );
};
