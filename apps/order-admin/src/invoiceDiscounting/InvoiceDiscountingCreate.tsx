import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const InvoiceDiscountingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="accounts_receivable_credit"
          source="accountsReceivableCredit"
        />
        <TextInput
          label="accounts_receivable_discounted"
          source="accountsReceivableDiscounted"
        />
        <TextInput
          label="accounts_receivable_unpaid"
          source="accountsReceivableUnpaid"
        />
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="bank_account" source="bankAccount" />
        <NumberInput label="bank_charges" source="bankCharges" />
        <TextInput label="bank_charges_account" source="bankChargesAccount" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="loan_end_date" source="loanEndDate" />
        <NumberInput step={1} label="loan_period" source="loanPeriod" />
        <DateTimeInput label="loan_start_date" source="loanStartDate" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <TextInput label="short_term_loan" source="shortTermLoan" />
        <TextInput label="status" source="status" />
        <NumberInput label="total_amount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
