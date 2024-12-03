import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PaymentLedgerEntryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account" source="account" />
        <TextField label="Account Currency" source="accountCurrency" />
        <TextField label="Account Type" source="accountType" />
        <TextField label="Against Voucher No" source="againstVoucherNo" />
        <TextField label="Against Voucher Type" source="againstVoucherType" />
        <TextField label="Amount" source="amount" />
        <TextField
          label="Amount In Account Currency"
          source="amountInAccountCurrency"
        />
        <TextField label="Company" source="company" />
        <TextField label="Cost Center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Delinked" source="delinked" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="Due Date" source="dueDate" />
        <TextField label="Finance Book" source="financeBook" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <TextField label="Party" source="party" />
        <TextField label="Party Type" source="partyType" />
        <TextField label="Posting Date" source="postingDate" />
        <TextField label="Remarks" source="remarks" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Voucher Detail No" source="voucherDetailNo" />
        <TextField label="Voucher No" source="voucherNo" />
        <TextField label="Voucher Type" source="voucherType" />
      </SimpleShowLayout>
    </Show>
  );
};
