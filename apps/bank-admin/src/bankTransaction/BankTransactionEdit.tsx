import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BankTransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="allocated_amount" source="allocatedAmount" />
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput
          label="bank_party_account_number"
          source="bankPartyAccountNumber"
        />
        <TextInput label="bank_party_iban" source="bankPartyIban" />
        <TextInput label="bank_party_name" source="bankPartyName" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="deposit" source="deposit" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="party" source="party" />
        <TextInput label="party_type" source="partyType" />
        <TextInput label="reference_number" source="referenceNumber" />
        <TextInput label="status" source="status" />
        <TextInput label="transaction_id" source="transactionId" />
        <TextInput label="transaction_type" source="transactionType" />
        <NumberInput label="unallocated_amount" source="unallocatedAmount" />
        <NumberInput label="withdrawal" source="withdrawal" />
      </SimpleForm>
    </Edit>
  );
};
