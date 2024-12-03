import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseInvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextField label="addressDisplay" source="addressDisplay" />
        <TextField
          label="againstExpenseAccount"
          source="againstExpenseAccount"
        />
        <TextField
          label="allocateAdvancesAutomatically"
          source="allocateAdvancesAutomatically"
        />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="applyDiscountOn" source="applyDiscountOn" />
        <TextField label="applyTds" source="applyTds" />
        <TextField label="autoRepeat" source="autoRepeat" />
        <TextField label="baseDiscountAmount" source="baseDiscountAmount" />
        <TextField label="baseGrandTotal" source="baseGrandTotal" />
        <TextField label="baseInWords" source="baseInWords" />
        <TextField label="baseNetTotal" source="baseNetTotal" />
        <TextField label="basePaidAmount" source="basePaidAmount" />
        <TextField label="baseRoundedTotal" source="baseRoundedTotal" />
        <TextField
          label="baseRoundingAdjustment"
          source="baseRoundingAdjustment"
        />
        <TextField
          label="baseTaxWithholdingNetTotal"
          source="baseTaxWithholdingNetTotal"
        />
        <TextField
          label="baseTaxesAndChargesAdded"
          source="baseTaxesAndChargesAdded"
        />
        <TextField
          label="baseTaxesAndChargesDeducted"
          source="baseTaxesAndChargesDeducted"
        />
        <TextField label="baseTotal" source="baseTotal" />
        <TextField
          label="baseTotalTaxesAndCharges"
          source="baseTotalTaxesAndCharges"
        />
        <TextField label="baseWriteOffAmount" source="baseWriteOffAmount" />
        <TextField label="billDate" source="billDate" />
        <TextField label="billNo" source="billNo" />
        <TextField label="billingAddress" source="billingAddress" />
        <TextField
          label="billingAddressDisplay"
          source="billingAddressDisplay"
        />
        <TextField label="buyingPriceList" source="buyingPriceList" />
        <TextField label="cashBankAccount" source="cashBankAccount" />
        <TextField label="clearanceDate" source="clearanceDate" />
        <TextField label="company" source="company" />
        <TextField label="contactDisplay" source="contactDisplay" />
        <TextField label="contactEmail" source="contactEmail" />
        <TextField label="contactMobile" source="contactMobile" />
        <TextField label="contactPerson" source="contactPerson" />
        <TextField label="conversionRate" source="conversionRate" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="creditTo" source="creditTo" />
        <TextField label="currency" source="currency" />
        <TextField label="disableRoundedTotal" source="disableRoundedTotal" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="fromDate" source="fromDate" />
        <TextField label="grandTotal" source="grandTotal" />
        <TextField label="groupSameItems" source="groupSameItems" />
        <TextField label="holdComment" source="holdComment" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="ignoreDefaultPaymentTermsTemplate"
          source="ignoreDefaultPaymentTermsTemplate"
        />
        <TextField label="ignorePricingRule" source="ignorePricingRule" />
        <TextField label="inWords" source="inWords" />
        <TextField label="incoterm" source="incoterm" />
        <TextField
          label="interCompanyInvoiceReference"
          source="interCompanyInvoiceReference"
        />
        <TextField label="isInternalSupplier" source="isInternalSupplier" />
        <TextField
          label="isOldSubcontractingFlow"
          source="isOldSubcontractingFlow"
        />
        <TextField label="isOpening" source="isOpening" />
        <TextField label="isPaid" source="isPaid" />
        <TextField label="isReturn" source="isReturn" />
        <TextField label="isSubcontracted" source="isSubcontracted" />
        <TextField label="language" source="language" />
        <TextField label="letterHead" source="letterHead" />
        <TextField label="modeOfPayment" source="modeOfPayment" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namedPlace" source="namedPlace" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="netTotal" source="netTotal" />
        <TextField label="onHold" source="onHold" />
        <TextField
          label="onlyIncludeAllocatedPayments"
          source="onlyIncludeAllocatedPayments"
        />
        <TextField
          label="otherChargesCalculation"
          source="otherChargesCalculation"
        />
        <TextField label="outstandingAmount" source="outstandingAmount" />
        <TextField label="owner" source="owner" />
        <TextField label="paidAmount" source="paidAmount" />
        <TextField label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextField label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <TextField label="perReceived" source="perReceived" />
        <TextField label="plcConversionRate" source="plcConversionRate" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="postingTime" source="postingTime" />
        <TextField label="priceListCurrency" source="priceListCurrency" />
        <TextField label="project" source="project" />
        <TextField label="rejectedWarehouse" source="rejectedWarehouse" />
        <TextField label="releaseDate" source="releaseDate" />
        <TextField label="remarks" source="remarks" />
        <TextField label="representsCompany" source="representsCompany" />
        <TextField label="returnAgainst" source="returnAgainst" />
        <TextField label="roundedTotal" source="roundedTotal" />
        <TextField label="roundingAdjustment" source="roundingAdjustment" />
        <TextField label="scanBarcode" source="scanBarcode" />
        <TextField label="selectPrintHeading" source="selectPrintHeading" />
        <TextField label="setFromWarehouse" source="setFromWarehouse" />
        <TextField label="setPostingTime" source="setPostingTime" />
        <TextField label="setWarehouse" source="setWarehouse" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField
          label="shippingAddressDisplay"
          source="shippingAddressDisplay"
        />
        <TextField label="shippingRule" source="shippingRule" />
        <TextField label="status" source="status" />
        <TextField label="subscription" source="subscription" />
        <TextField label="supplier" source="supplier" />
        <TextField label="supplierAddress" source="supplierAddress" />
        <TextField label="supplierGroup" source="supplierGroup" />
        <TextField label="supplierName" source="supplierName" />
        <TextField label="supplierWarehouse" source="supplierWarehouse" />
        <TextField label="taxCategory" source="taxCategory" />
        <TextField label="taxId" source="taxId" />
        <TextField
          label="taxWithholdingCategory"
          source="taxWithholdingCategory"
        />
        <TextField
          label="taxWithholdingNetTotal"
          source="taxWithholdingNetTotal"
        />
        <TextField label="taxesAndCharges" source="taxesAndCharges" />
        <TextField label="taxesAndChargesAdded" source="taxesAndChargesAdded" />
        <TextField
          label="taxesAndChargesDeducted"
          source="taxesAndChargesDeducted"
        />
        <TextField label="tcName" source="tcName" />
        <TextField label="terms" source="terms" />
        <TextField label="title" source="title" />
        <TextField label="toDate" source="toDate" />
        <TextField label="total" source="total" />
        <TextField label="totalAdvance" source="totalAdvance" />
        <TextField label="totalNetWeight" source="totalNetWeight" />
        <TextField label="totalQty" source="totalQty" />
        <TextField label="totalTaxesAndCharges" source="totalTaxesAndCharges" />
        <TextField
          label="unrealizedProfitLossAccount"
          source="unrealizedProfitLossAccount"
        />
        <TextField
          label="updateBilledAmountInPurchaseOrder"
          source="updateBilledAmountInPurchaseOrder"
        />
        <TextField
          label="updateBilledAmountInPurchaseReceipt"
          source="updateBilledAmountInPurchaseReceipt"
        />
        <TextField
          label="updateOutstandingForSelf"
          source="updateOutstandingForSelf"
        />
        <TextField label="updateStock" source="updateStock" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="useCompanyRoundoffCostCenter"
          source="useCompanyRoundoffCostCenter"
        />
        <TextField
          label="useTransactionDateExchangeRate"
          source="useTransactionDateExchangeRate"
        />
        <TextField label="writeOffAccount" source="writeOffAccount" />
        <TextField label="writeOffAmount" source="writeOffAmount" />
        <TextField label="writeOffCostCenter" source="writeOffCostCenter" />
      </SimpleShowLayout>
    </Show>
  );
};
