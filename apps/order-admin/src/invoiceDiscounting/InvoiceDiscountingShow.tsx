import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const InvoiceDiscountingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="accounts_receivable_credit"
          source="accountsReceivableCredit"
        />
        <TextField
          label="accounts_receivable_discounted"
          source="accountsReceivableDiscounted"
        />
        <TextField
          label="accounts_receivable_unpaid"
          source="accountsReceivableUnpaid"
        />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField label="bank_charges" source="bankCharges" />
        <TextField label="bank_charges_account" source="bankChargesAccount" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="loan_end_date" source="loanEndDate" />
        <TextField label="loan_period" source="loanPeriod" />
        <TextField label="loan_start_date" source="loanStartDate" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="short_term_loan" source="shortTermLoan" />
        <TextField label="status" source="status" />
        <TextField label="total_amount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
