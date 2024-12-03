import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PaymentLedgerEntryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account" source="account" />
        <TextInput label="Account Currency" source="accountCurrency" />
        <TextInput label="Account Type" source="accountType" />
        <TextInput label="Against Voucher No" source="againstVoucherNo" />
        <TextInput label="Against Voucher Type" source="againstVoucherType" />
        <NumberInput label="Amount" source="amount" />
        <NumberInput
          label="Amount In Account Currency"
          source="amountInAccountCurrency"
        />
        <TextInput label="Company" source="company" />
        <TextInput label="Cost Center" source="costCenter" />
        <DateTimeInput label="Creation" source="creation" />
        <NumberInput step={1} label="Delinked" source="delinked" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="Finance Book" source="financeBook" />
        <NumberInput step={1} label="Idx" source="idx" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Party" source="party" />
        <TextInput label="Party Type" source="partyType" />
        <DateTimeInput label="Posting Date" source="postingDate" />
        <TextInput label="Remarks" multiline source="remarks" />
        <TextInput label="Voucher Detail No" source="voucherDetailNo" />
        <TextInput label="Voucher No" source="voucherNo" />
        <TextInput label="Voucher Type" source="voucherType" />
      </SimpleForm>
    </Edit>
  );
};
