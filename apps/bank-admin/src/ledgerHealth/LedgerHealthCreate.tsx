import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const LedgerHealthCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="checked_on" source="checkedOn" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          step={1}
          label="debit_credit_mismatch"
          source="debitCreditMismatch"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          step={1}
          label="general_and_payment_ledger_mismatch"
          source="generalAndPaymentLedgerMismatch"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput step={1} label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="voucher_no" source="voucherNo" />
        <TextInput label="voucher_type" source="voucherType" />
      </SimpleForm>
    </Create>
  );
};
