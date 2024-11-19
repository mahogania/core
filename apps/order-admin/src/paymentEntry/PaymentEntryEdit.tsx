import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PaymentEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Amended From" source="amendedFrom" />
        <NumberInput
          step={1}
          label="Apply Tax Withholding Amount"
          source="applyTaxWithholdingAmount"
        />
        <TextInput label="Auto Repeat" source="autoRepeat" />
        <TextInput label="Bank" source="bank" />
        <TextInput label="Bank Account" source="bankAccount" />
        <TextInput label="Bank Account No" source="bankAccountNo" />
        <TextInput label="Base In Words" multiline source="baseInWords" />
        <NumberInput label="Base Paid Amount" source="basePaidAmount" />
        <NumberInput
          label="Base Paid Amount After Tax"
          source="basePaidAmountAfterTax"
        />
        <NumberInput label="Base Received Amount" source="baseReceivedAmount" />
        <NumberInput
          label="Base Received Amount After Tax"
          source="baseReceivedAmountAfterTax"
        />
        <NumberInput
          label="Base Total Allocated Amount"
          source="baseTotalAllocatedAmount"
        />
        <NumberInput
          label="Base Total Taxes And Charges"
          source="baseTotalTaxesAndCharges"
        />
        <NumberInput
          step={1}
          label="Book Advance Payments In Separate Party Account"
          source="bookAdvancePaymentsInSeparatePartyAccount"
        />
        <DateTimeInput label="Clearance Date" source="clearanceDate" />
        <TextInput label="Company" source="company" />
        <TextInput label="Contact Email" source="contactEmail" type="email" />
        <TextInput label="Contact Person" source="contactPerson" />
        <TextInput label="Cost Center" source="costCenter" />
        <DateTimeInput label="Creation" source="creation" />
        <NumberInput step={1} label="Custom Remarks" source="customRemarks" />
        <NumberInput label="Difference Amount" source="differenceAmount" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <NumberInput step={1} label="Idx" source="idx" />
        <TextInput label="In Words" multiline source="inWords" />
        <TextInput label="Is Opening" source="isOpening" />
        <TextInput label="Letter Head" source="letterHead" />
        <TextInput label="Mode of Payment" source="modeOfPayment" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <TextInput label="Naming Series" source="namingSeries" />
        <TextInput label="Owner" source="owner" />
        <NumberInput label="Paid Amount" source="paidAmount" />
        <NumberInput
          label="Paid Amount After Tax"
          source="paidAmountAfterTax"
        />
        <TextInput label="Paid From" source="paidFrom" />
        <NumberInput
          label="Paid From Account Balance"
          source="paidFromAccountBalance"
        />
        <TextInput
          label="Paid From Account Currency"
          source="paidFromAccountCurrency"
        />
        <TextInput
          label="Paid From Account Type"
          source="paidFromAccountType"
        />
        <TextInput label="Paid To" source="paidTo" />
        <NumberInput
          label="Paid To Account Balance"
          source="paidToAccountBalance"
        />
        <TextInput
          label="Paid To Account Currency"
          source="paidToAccountCurrency"
        />
        <TextInput label="Paid To Account Type" source="paidToAccountType" />
        <TextInput label="Party" source="party" />
        <NumberInput label="Party Balance" source="partyBalance" />
        <TextInput label="Party Bank Account" source="partyBankAccount" />
        <TextInput label="Party Name" source="partyName" />
        <TextInput label="Party Type" source="partyType" />
        <TextInput label="Payment Order" source="paymentOrder" />
        <TextInput label="Payment Order Status" source="paymentOrderStatus" />
        <TextInput label="Payment Type" source="paymentType" />
        <DateTimeInput label="Posting Date" source="postingDate" />
        <TextInput label="Print Heading" source="printHeading" />
        <TextInput label="Project" source="project" />
        <TextInput
          label="Purchase Taxes And Charges Template"
          source="purchaseTaxesAndChargesTemplate"
        />
        <NumberInput label="Received Amount" source="receivedAmount" />
        <NumberInput
          label="Received Amount After Tax"
          source="receivedAmountAfterTax"
        />
        <NumberInput
          step={1}
          label="Reconcile On Advance Payment Date"
          source="reconcileOnAdvancePaymentDate"
        />
        <DateTimeInput label="Reference Date" source="referenceDate" />
        <TextInput label="Reference No" source="referenceNo" />
        <TextInput label="Remarks" multiline source="remarks" />
        <TextInput
          label="Sales Taxes And Charges Template"
          source="salesTaxesAndChargesTemplate"
        />
        <NumberInput label="Source Exchange Rate" source="sourceExchangeRate" />
        <TextInput label="Status" source="status" />
        <NumberInput label="Target Exchange Rate" source="targetExchangeRate" />
        <TextInput
          label="Tax Withholding Category"
          source="taxWithholdingCategory"
        />
        <TextInput label="Title" source="title" />
        <NumberInput
          label="Total Allocated Amount"
          source="totalAllocatedAmount"
        />
        <NumberInput
          label="Total Taxes And Charges"
          source="totalTaxesAndCharges"
        />
        <NumberInput label="Unallocated Amount" source="unallocatedAmount" />
      </SimpleForm>
    </Edit>
  );
};
