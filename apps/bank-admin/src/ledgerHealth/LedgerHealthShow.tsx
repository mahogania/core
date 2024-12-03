import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LedgerHealthShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="checked_on" source="checkedOn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="debit_credit_mismatch" source="debitCreditMismatch" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="general_and_payment_ledger_mismatch"
          source="generalAndPaymentLedgerMismatch"
        />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voucher_no" source="voucherNo" />
        <TextField label="voucher_type" source="voucherType" />
      </SimpleShowLayout>
    </Show>
  );
};
