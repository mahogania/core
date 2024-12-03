import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PosInvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="accountForChangeAmount"
          source="accountForChangeAmount"
        />
        <NumberInput
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextInput label="addressDisplay" multiline source="addressDisplay" />
        <TextInput
          label="againstIncomeAccount"
          multiline
          source="againstIncomeAccount"
        />
        <NumberInput
          step={1}
          label="allocateAdvancesAutomatically"
          source="allocateAdvancesAutomatically"
        />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <NumberInput
          label="amountEligibleForCommission"
          source="amountEligibleForCommission"
        />
        <TextInput label="applyDiscountOn" source="applyDiscountOn" />
        <TextInput label="autoRepeat" source="autoRepeat" />
        <NumberInput label="baseChangeAmount" source="baseChangeAmount" />
        <NumberInput label="baseDiscountAmount" source="baseDiscountAmount" />
        <NumberInput label="baseGrandTotal" source="baseGrandTotal" />
        <TextInput label="baseInWords" source="baseInWords" />
        <NumberInput label="baseNetTotal" source="baseNetTotal" />
        <NumberInput label="basePaidAmount" source="basePaidAmount" />
        <NumberInput label="baseRoundedTotal" source="baseRoundedTotal" />
        <NumberInput
          label="baseRoundingAdjustment"
          source="baseRoundingAdjustment"
        />
        <NumberInput label="baseTotal" source="baseTotal" />
        <NumberInput
          label="baseTotalTaxesAndCharges"
          source="baseTotalTaxesAndCharges"
        />
        <NumberInput label="baseWriteOffAmount" source="baseWriteOffAmount" />
        <TextInput label="campaign" source="campaign" />
        <TextInput label="cashBankAccount" source="cashBankAccount" />
        <NumberInput label="changeAmount" source="changeAmount" />
        <NumberInput label="commissionRate" source="commissionRate" />
        <TextInput label="company" source="company" />
        <TextInput label="companyAddress" source="companyAddress" />
        <TextInput
          label="companyAddressDisplay"
          multiline
          source="companyAddressDisplay"
        />
        <TextInput label="consolidatedInvoice" source="consolidatedInvoice" />
        <TextInput label="contactDisplay" multiline source="contactDisplay" />
        <TextInput label="contactEmail" source="contactEmail" />
        <TextInput label="contactMobile" source="contactMobile" />
        <TextInput label="contactPerson" source="contactPerson" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="costCenter" source="costCenter" />
        <TextInput label="couponCode" source="couponCode" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customerAddress" source="customerAddress" />
        <TextInput label="customerGroup" source="customerGroup" />
        <TextInput label="customerName" source="customerName" />
        <TextInput label="debitTo" source="debitTo" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <DateTimeInput label="fromDate" source="fromDate" />
        <NumberInput label="grandTotal" source="grandTotal" />
        <NumberInput step={1} label="groupSameItems" source="groupSameItems" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignorePricingRule"
          source="ignorePricingRule"
        />
        <TextInput label="inWords" source="inWords" />
        <TextInput
          label="interCompanyInvoiceReference"
          source="interCompanyInvoiceReference"
        />
        <NumberInput step={1} label="isDiscounted" source="isDiscounted" />
        <TextInput label="isOpening" source="isOpening" />
        <NumberInput step={1} label="isPos" source="isPos" />
        <NumberInput step={1} label="isReturn" source="isReturn" />
        <TextInput label="language" source="language" />
        <TextInput label="letterHead" source="letterHead" />
        <NumberInput label="loyaltyAmount" source="loyaltyAmount" />
        <NumberInput step={1} label="loyaltyPoints" source="loyaltyPoints" />
        <TextInput label="loyaltyProgram" source="loyaltyProgram" />
        <TextInput
          label="loyaltyRedemptionAccount"
          source="loyaltyRedemptionAccount"
        />
        <TextInput
          label="loyaltyRedemptionCostCenter"
          source="loyaltyRedemptionCostCenter"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <NumberInput label="netTotal" source="netTotal" />
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
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <DateTimeInput label="poDate" source="poDate" />
        <TextInput label="poNo" source="poNo" />
        <TextInput label="posProfile" source="posProfile" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <DateTimeInput label="postingTime" source="postingTime" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <TextInput label="project" source="project" />
        <NumberInput
          step={1}
          label="redeemLoyaltyPoints"
          source="redeemLoyaltyPoints"
        />
        <TextInput label="remarks" multiline source="remarks" />
        <TextInput label="returnAgainst" source="returnAgainst" />
        <NumberInput label="roundedTotal" source="roundedTotal" />
        <NumberInput label="roundingAdjustment" source="roundingAdjustment" />
        <TextInput label="salesPartner" source="salesPartner" />
        <TextInput label="scanBarcode" source="scanBarcode" />
        <TextInput label="selectPrintHeading" source="selectPrintHeading" />
        <TextInput label="sellingPriceList" source="sellingPriceList" />
        <NumberInput step={1} label="setPostingTime" source="setPostingTime" />
        <TextInput label="setWarehouse" source="setWarehouse" />
        <TextInput label="shippingAddress" multiline source="shippingAddress" />
        <TextInput label="shippingAddressName" source="shippingAddressName" />
        <TextInput label="shippingRule" source="shippingRule" />
        <TextInput label="source" source="source" />
        <TextInput label="status" source="status" />
        <TextInput label="taxCategory" source="taxCategory" />
        <TextInput label="taxId" source="taxId" />
        <TextInput label="taxesAndCharges" source="taxesAndCharges" />
        <TextInput label="tcName" source="tcName" />
        <TextInput label="terms" multiline source="terms" />
        <TextInput label="territory" source="territory" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="toDate" source="toDate" />
        <NumberInput label="total" source="total" />
        <NumberInput label="totalAdvance" source="totalAdvance" />
        <NumberInput label="totalBillingAmount" source="totalBillingAmount" />
        <NumberInput label="totalCommission" source="totalCommission" />
        <NumberInput label="totalNetWeight" source="totalNetWeight" />
        <NumberInput label="totalQty" source="totalQty" />
        <NumberInput
          label="totalTaxesAndCharges"
          source="totalTaxesAndCharges"
        />
        <NumberInput
          step={1}
          label="updateBilledAmountInDeliveryNote"
          source="updateBilledAmountInDeliveryNote"
        />
        <NumberInput
          step={1}
          label="updateBilledAmountInSalesOrder"
          source="updateBilledAmountInSalesOrder"
        />
        <NumberInput step={1} label="updateStock" source="updateStock" />
        <TextInput label="writeOffAccount" source="writeOffAccount" />
        <NumberInput label="writeOffAmount" source="writeOffAmount" />
        <TextInput label="writeOffCostCenter" source="writeOffCostCenter" />
        <NumberInput
          step={1}
          label="writeOffOutstandingAmountAutomatically"
          source="writeOffOutstandingAmountAutomatically"
        />
      </SimpleForm>
    </Create>
  );
};
