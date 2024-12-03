import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const JournalEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput step={1} label="apply_tds" source="applyTds" />
        <TextInput label="auto_repeat" source="autoRepeat" />
        <DateTimeInput label="bill_date" source="billDate" />
        <TextInput label="bill_no" source="billNo" />
        <DateTimeInput label="cheque_date" source="chequeDate" />
        <TextInput label="cheque_no" source="chequeNo" />
        <DateTimeInput label="clearance_date" source="clearanceDate" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="difference" source="difference" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="due_date" source="dueDate" />
        <TextInput label="finance_book" source="financeBook" />
        <TextInput label="from_template" source="fromTemplate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput
          label="inter_company_journal_entry_reference"
          source="interCompanyJournalEntryReference"
        />
        <TextInput label="is_opening" source="isOpening" />
        <NumberInput
          step={1}
          label="is_system_generated"
          source="isSystemGenerated"
        />
        <TextInput label="letter_head" source="letterHead" />
        <TextInput label="mode_of_payment" source="modeOfPayment" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput step={1} label="multi_currency" source="multiCurrency" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="paid_loan" source="paidLoan" />
        <TextInput label="pay_to_recd_from" source="payToRecdFrom" />
        <TextInput label="payment_order" source="paymentOrder" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <TextInput
          label="process_deferred_accounting"
          source="processDeferredAccounting"
        />
        <TextInput label="remark" multiline source="remark" />
        <TextInput label="reversal_of" source="reversalOf" />
        <TextInput label="select_print_heading" source="selectPrintHeading" />
        <TextInput label="stock_entry" source="stockEntry" />
        <TextInput
          label="tax_withholding_category"
          source="taxWithholdingCategory"
        />
        <TextInput label="title" source="title" />
        <NumberInput label="total_amount" source="totalAmount" />
        <TextInput label="total_amount_currency" source="totalAmountCurrency" />
        <TextInput label="total_amount_in_words" source="totalAmountInWords" />
        <NumberInput label="total_credit" source="totalCredit" />
        <NumberInput label="total_debit" source="totalDebit" />
        <TextInput label="user_remark" multiline source="userRemark" />
        <TextInput label="voucher_type" source="voucherType" />
        <NumberInput label="write_off_amount" source="writeOffAmount" />
        <TextInput label="write_off_based_on" source="writeOffBasedOn" />
      </SimpleForm>
    </Edit>
  );
};
