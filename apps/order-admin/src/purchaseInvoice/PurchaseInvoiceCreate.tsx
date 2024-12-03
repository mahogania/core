import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseInvoiceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextInput label="addressDisplay" multiline source="addressDisplay" />
        <TextInput
          label="againstExpenseAccount"
          multiline
          source="againstExpenseAccount"
        />
        <NumberInput
          step={1}
          label="allocateAdvancesAutomatically"
          source="allocateAdvancesAutomatically"
        />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="applyDiscountOn" source="applyDiscountOn" />
        <NumberInput step={1} label="applyTds" source="applyTds" />
        <TextInput label="autoRepeat" source="autoRepeat" />
        <NumberInput label="baseDiscountAmount" source="baseDiscountAmount" />
        <NumberInput label="baseGrandTotal" source="baseGrandTotal" />
        <TextInput label="baseInWords" multiline source="baseInWords" />
        <NumberInput label="baseNetTotal" source="baseNetTotal" />
        <NumberInput label="basePaidAmount" source="basePaidAmount" />
        <NumberInput label="baseRoundedTotal" source="baseRoundedTotal" />
        <NumberInput
          label="baseRoundingAdjustment"
          source="baseRoundingAdjustment"
        />
        <NumberInput
          label="baseTaxWithholdingNetTotal"
          source="baseTaxWithholdingNetTotal"
        />
        <NumberInput
          label="baseTaxesAndChargesAdded"
          source="baseTaxesAndChargesAdded"
        />
        <NumberInput
          label="baseTaxesAndChargesDeducted"
          source="baseTaxesAndChargesDeducted"
        />
        <NumberInput label="baseTotal" source="baseTotal" />
        <NumberInput
          label="baseTotalTaxesAndCharges"
          source="baseTotalTaxesAndCharges"
        />
        <NumberInput label="baseWriteOffAmount" source="baseWriteOffAmount" />
        <DateTimeInput label="billDate" source="billDate" />
        <TextInput label="billNo" source="billNo" />
        <TextInput label="billingAddress" source="billingAddress" />
        <TextInput
          label="billingAddressDisplay"
          multiline
          source="billingAddressDisplay"
        />
        <TextInput label="buyingPriceList" source="buyingPriceList" />
        <TextInput label="cashBankAccount" source="cashBankAccount" />
        <DateTimeInput label="clearanceDate" source="clearanceDate" />
        <TextInput label="company" source="company" />
        <TextInput label="contactDisplay" multiline source="contactDisplay" />
        <TextInput label="contactEmail" multiline source="contactEmail" />
        <TextInput label="contactMobile" multiline source="contactMobile" />
        <TextInput label="contactPerson" source="contactPerson" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="creditTo" source="creditTo" />
        <TextInput label="currency" source="currency" />
        <NumberInput
          step={1}
          label="disableRoundedTotal"
          source="disableRoundedTotal"
        />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <DateTimeInput label="fromDate" source="fromDate" />
        <NumberInput label="grandTotal" source="grandTotal" />
        <NumberInput step={1} label="groupSameItems" source="groupSameItems" />
        <TextInput label="holdComment" multiline source="holdComment" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignoreDefaultPaymentTermsTemplate"
          source="ignoreDefaultPaymentTermsTemplate"
        />
        <NumberInput
          step={1}
          label="ignorePricingRule"
          source="ignorePricingRule"
        />
        <TextInput label="inWords" multiline source="inWords" />
        <TextInput label="incoterm" source="incoterm" />
        <TextInput
          label="interCompanyInvoiceReference"
          source="interCompanyInvoiceReference"
        />
        <NumberInput
          step={1}
          label="isInternalSupplier"
          source="isInternalSupplier"
        />
        <NumberInput
          step={1}
          label="isOldSubcontractingFlow"
          source="isOldSubcontractingFlow"
        />
        <TextInput label="isOpening" source="isOpening" />
        <NumberInput step={1} label="isPaid" source="isPaid" />
        <NumberInput step={1} label="isReturn" source="isReturn" />
        <NumberInput
          step={1}
          label="isSubcontracted"
          source="isSubcontracted"
        />
        <TextInput label="language" source="language" />
        <TextInput label="letterHead" source="letterHead" />
        <TextInput label="modeOfPayment" source="modeOfPayment" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namedPlace" source="namedPlace" />
        <TextInput label="namingSeries" source="namingSeries" />
        <NumberInput label="netTotal" source="netTotal" />
        <NumberInput step={1} label="onHold" source="onHold" />
        <NumberInput
          step={1}
          label="onlyIncludeAllocatedPayments"
          source="onlyIncludeAllocatedPayments"
        />
        <TextInput
          label="otherChargesCalculation"
          multiline
          source="otherChargesCalculation"
        />
        <NumberInput label="outstandingAmount" source="outstandingAmount" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="paidAmount" source="paidAmount" />
        <TextInput label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextInput label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <NumberInput label="perReceived" source="perReceived" />
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <TextInput label="postingTime" source="postingTime" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <TextInput label="project" source="project" />
        <TextInput label="rejectedWarehouse" source="rejectedWarehouse" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="remarks" multiline source="remarks" />
        <TextInput label="representsCompany" source="representsCompany" />
        <TextInput label="returnAgainst" source="returnAgainst" />
        <NumberInput label="roundedTotal" source="roundedTotal" />
        <NumberInput label="roundingAdjustment" source="roundingAdjustment" />
        <TextInput label="scanBarcode" source="scanBarcode" />
        <TextInput label="selectPrintHeading" source="selectPrintHeading" />
        <TextInput label="setFromWarehouse" source="setFromWarehouse" />
        <NumberInput step={1} label="setPostingTime" source="setPostingTime" />
        <TextInput label="setWarehouse" source="setWarehouse" />
        <TextInput label="shippingAddress" source="shippingAddress" />
        <TextInput
          label="shippingAddressDisplay"
          multiline
          source="shippingAddressDisplay"
        />
        <TextInput label="shippingRule" source="shippingRule" />
        <TextInput label="status" source="status" />
        <TextInput label="subscription" source="subscription" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="supplierAddress" source="supplierAddress" />
        <TextInput label="supplierGroup" source="supplierGroup" />
        <TextInput label="supplierName" source="supplierName" />
        <TextInput label="supplierWarehouse" source="supplierWarehouse" />
        <TextInput label="taxCategory" source="taxCategory" />
        <TextInput label="taxId" source="taxId" />
        <TextInput
          label="taxWithholdingCategory"
          source="taxWithholdingCategory"
        />
        <NumberInput
          label="taxWithholdingNetTotal"
          source="taxWithholdingNetTotal"
        />
        <TextInput label="taxesAndCharges" source="taxesAndCharges" />
        <NumberInput
          label="taxesAndChargesAdded"
          source="taxesAndChargesAdded"
        />
        <NumberInput
          label="taxesAndChargesDeducted"
          source="taxesAndChargesDeducted"
        />
        <TextInput label="tcName" source="tcName" />
        <TextInput label="terms" multiline source="terms" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="toDate" source="toDate" />
        <NumberInput label="total" source="total" />
        <NumberInput label="totalAdvance" source="totalAdvance" />
        <NumberInput label="totalNetWeight" source="totalNetWeight" />
        <NumberInput label="totalQty" source="totalQty" />
        <NumberInput
          label="totalTaxesAndCharges"
          source="totalTaxesAndCharges"
        />
        <TextInput
          label="unrealizedProfitLossAccount"
          source="unrealizedProfitLossAccount"
        />
        <NumberInput
          step={1}
          label="updateBilledAmountInPurchaseOrder"
          source="updateBilledAmountInPurchaseOrder"
        />
        <NumberInput
          step={1}
          label="updateBilledAmountInPurchaseReceipt"
          source="updateBilledAmountInPurchaseReceipt"
        />
        <NumberInput
          step={1}
          label="updateOutstandingForSelf"
          source="updateOutstandingForSelf"
        />
        <NumberInput step={1} label="updateStock" source="updateStock" />
        <NumberInput
          step={1}
          label="useCompanyRoundoffCostCenter"
          source="useCompanyRoundoffCostCenter"
        />
        <NumberInput
          step={1}
          label="useTransactionDateExchangeRate"
          source="useTransactionDateExchangeRate"
        />
        <TextInput label="writeOffAccount" source="writeOffAccount" />
        <NumberInput label="writeOffAmount" source="writeOffAmount" />
        <TextInput label="writeOffCostCenter" source="writeOffCostCenter" />
      </SimpleForm>
    </Create>
  );
};
