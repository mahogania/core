import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const JournalEntryAccountEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <TextInput label="account_currency" source="accountCurrency" />
        <TextInput label="account_type" source="accountType" />
        <TextInput label="against_account" multiline source="againstAccount" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="credit" source="credit" />
        <NumberInput
          label="credit_in_account_currency"
          source="creditInAccountCurrency"
        />
        <NumberInput label="debit" source="debit" />
        <NumberInput
          label="debit_in_account_currency"
          source="debitInAccountCurrency"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="exchange_rate" source="exchangeRate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="is_advance" source="isAdvance" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="party" source="party" />
        <TextInput label="party_type" source="partyType" />
        <TextInput label="project" source="project" />
        <TextInput label="reference_detail_no" source="referenceDetailNo" />
        <DateTimeInput label="reference_due_date" source="referenceDueDate" />
        <TextInput label="reference_name" source="referenceName" />
        <TextInput label="reference_type" source="referenceType" />
        <TextInput label="user_remark" multiline source="userRemark" />
      </SimpleForm>
    </Edit>
  );
};
