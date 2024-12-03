import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Payment Entries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amended From" source="amendedFrom" />
        <TextField
          label="Apply Tax Withholding Amount"
          source="applyTaxWithholdingAmount"
        />
        <TextField label="Auto Repeat" source="autoRepeat" />
        <TextField label="Bank" source="bank" />
        <TextField label="Bank Account" source="bankAccount" />
        <TextField label="Bank Account No" source="bankAccountNo" />
        <TextField label="Base In Words" source="baseInWords" />
        <TextField label="Base Paid Amount" source="basePaidAmount" />
        <TextField
          label="Base Paid Amount After Tax"
          source="basePaidAmountAfterTax"
        />
        <TextField label="Base Received Amount" source="baseReceivedAmount" />
        <TextField
          label="Base Received Amount After Tax"
          source="baseReceivedAmountAfterTax"
        />
        <TextField
          label="Base Total Allocated Amount"
          source="baseTotalAllocatedAmount"
        />
        <TextField
          label="Base Total Taxes And Charges"
          source="baseTotalTaxesAndCharges"
        />
        <TextField
          label="Book Advance Payments In Separate Party Account"
          source="bookAdvancePaymentsInSeparatePartyAccount"
        />
        <TextField label="Clearance Date" source="clearanceDate" />
        <TextField label="Company" source="company" />
        <TextField label="Contact Email" source="contactEmail" />
        <TextField label="Contact Person" source="contactPerson" />
        <TextField label="Cost Center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Custom Remarks" source="customRemarks" />
        <TextField label="Difference Amount" source="differenceAmount" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="In Words" source="inWords" />
        <TextField label="Is Opening" source="isOpening" />
        <TextField label="Letter Head" source="letterHead" />
        <TextField label="Mode of Payment" source="modeOfPayment" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Naming Series" source="namingSeries" />
        <TextField label="Owner" source="owner" />
        <TextField label="Paid Amount" source="paidAmount" />
        <TextField label="Paid Amount After Tax" source="paidAmountAfterTax" />
        <TextField label="Paid From" source="paidFrom" />
        <TextField
          label="Paid From Account Balance"
          source="paidFromAccountBalance"
        />
        <TextField
          label="Paid From Account Currency"
          source="paidFromAccountCurrency"
        />
        <TextField
          label="Paid From Account Type"
          source="paidFromAccountType"
        />
        <TextField label="Paid To" source="paidTo" />
        <TextField
          label="Paid To Account Balance"
          source="paidToAccountBalance"
        />
        <TextField
          label="Paid To Account Currency"
          source="paidToAccountCurrency"
        />
        <TextField label="Paid To Account Type" source="paidToAccountType" />
        <TextField label="Party" source="party" />
        <TextField label="Party Balance" source="partyBalance" />
        <TextField label="Party Bank Account" source="partyBankAccount" />
        <TextField label="Party Name" source="partyName" />
        <TextField label="Party Type" source="partyType" />
        <TextField label="Payment Order" source="paymentOrder" />
        <TextField label="Payment Order Status" source="paymentOrderStatus" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Posting Date" source="postingDate" />
        <TextField label="Print Heading" source="printHeading" />
        <TextField label="Project" source="project" />
        <TextField
          label="Purchase Taxes And Charges Template"
          source="purchaseTaxesAndChargesTemplate"
        />
        <TextField label="Received Amount" source="receivedAmount" />
        <TextField
          label="Received Amount After Tax"
          source="receivedAmountAfterTax"
        />
        <TextField
          label="Reconcile On Advance Payment Date"
          source="reconcileOnAdvancePaymentDate"
        />
        <TextField label="Reference Date" source="referenceDate" />
        <TextField label="Reference No" source="referenceNo" />
        <TextField label="Remarks" source="remarks" />
        <TextField
          label="Sales Taxes And Charges Template"
          source="salesTaxesAndChargesTemplate"
        />
        <TextField label="Source Exchange Rate" source="sourceExchangeRate" />
        <TextField label="Status" source="status" />
        <TextField label="Target Exchange Rate" source="targetExchangeRate" />
        <TextField
          label="Tax Withholding Category"
          source="taxWithholdingCategory"
        />
        <TextField label="Title" source="title" />
        <TextField
          label="Total Allocated Amount"
          source="totalAllocatedAmount"
        />
        <TextField
          label="Total Taxes And Charges"
          source="totalTaxesAndCharges"
        />
        <TextField label="Unallocated Amount" source="unallocatedAmount" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
