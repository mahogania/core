import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const JournalEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="apply_tds" source="applyTds" />
        <TextField label="auto_repeat" source="autoRepeat" />
        <TextField label="bill_date" source="billDate" />
        <TextField label="bill_no" source="billNo" />
        <TextField label="cheque_date" source="chequeDate" />
        <TextField label="cheque_no" source="chequeNo" />
        <TextField label="clearance_date" source="clearanceDate" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="difference" source="difference" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="due_date" source="dueDate" />
        <TextField label="finance_book" source="financeBook" />
        <TextField label="from_template" source="fromTemplate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="inter_company_journal_entry_reference"
          source="interCompanyJournalEntryReference"
        />
        <TextField label="is_opening" source="isOpening" />
        <TextField label="is_system_generated" source="isSystemGenerated" />
        <TextField label="letter_head" source="letterHead" />
        <TextField label="mode_of_payment" source="modeOfPayment" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="multi_currency" source="multiCurrency" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="paid_loan" source="paidLoan" />
        <TextField label="pay_to_recd_from" source="payToRecdFrom" />
        <TextField label="payment_order" source="paymentOrder" />
        <TextField label="posting_date" source="postingDate" />
        <TextField
          label="process_deferred_accounting"
          source="processDeferredAccounting"
        />
        <TextField label="remark" source="remark" />
        <TextField label="reversal_of" source="reversalOf" />
        <TextField label="select_print_heading" source="selectPrintHeading" />
        <TextField label="stock_entry" source="stockEntry" />
        <TextField
          label="tax_withholding_category"
          source="taxWithholdingCategory"
        />
        <TextField label="title" source="title" />
        <TextField label="total_amount" source="totalAmount" />
        <TextField label="total_amount_currency" source="totalAmountCurrency" />
        <TextField label="total_amount_in_words" source="totalAmountInWords" />
        <TextField label="total_credit" source="totalCredit" />
        <TextField label="total_debit" source="totalDebit" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_remark" source="userRemark" />
        <TextField label="voucher_type" source="voucherType" />
        <TextField label="write_off_amount" source="writeOffAmount" />
        <TextField label="write_off_based_on" source="writeOffBasedOn" />
      </SimpleShowLayout>
    </Show>
  );
};
