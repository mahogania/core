import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SalesOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextInput label="addressDisplay" multiline source="addressDisplay" />
        <NumberInput label="advancePaid" source="advancePaid" />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <NumberInput
          label="amountEligibleForCommission"
          source="amountEligibleForCommission"
        />
        <TextInput label="applyDiscountOn" source="applyDiscountOn" />
        <TextInput label="autoRepeat" source="autoRepeat" />
        <NumberInput label="baseDiscountAmount" source="baseDiscountAmount" />
        <NumberInput label="baseGrandTotal" source="baseGrandTotal" />
        <TextInput label="baseInWords" source="baseInWords" />
        <NumberInput label="baseNetTotal" source="baseNetTotal" />
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
        <TextInput label="billingStatus" source="billingStatus" />
        <TextInput label="campaign" source="campaign" />
        <NumberInput label="commissionRate" source="commissionRate" />
        <TextInput label="company" source="company" />
        <TextInput label="companyAddress" source="companyAddress" />
        <TextInput
          label="companyAddressDisplay"
          multiline
          source="companyAddressDisplay"
        />
        <TextInput label="contactDisplay" multiline source="contactDisplay" />
        <TextInput label="contactEmail" source="contactEmail" />
        <TextInput label="contactMobile" multiline source="contactMobile" />
        <TextInput label="contactPerson" source="contactPerson" />
        <TextInput label="contactPhone" source="contactPhone" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="costCenter" source="costCenter" />
        <TextInput label="couponCode" source="couponCode" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customerAddress" source="customerAddress" />
        <TextInput label="customerGroup" source="customerGroup" />
        <TextInput label="customerName" source="customerName" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <TextInput label="deliveryStatus" source="deliveryStatus" />
        <NumberInput
          step={1}
          label="disableRoundedTotal"
          source="disableRoundedTotal"
        />
        <NumberInput label="discountAmount" source="discountAmount" />
        <TextInput label="dispatchAddress" multiline source="dispatchAddress" />
        <TextInput label="dispatchAddressName" source="dispatchAddressName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
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
        <TextInput label="incoterm" source="incoterm" />
        <TextInput
          label="interCompanyOrderReference"
          source="interCompanyOrderReference"
        />
        <NumberInput
          step={1}
          label="isInternalCustomer"
          source="isInternalCustomer"
        />
        <TextInput label="language" source="language" />
        <TextInput label="letterHead" source="letterHead" />
        <NumberInput label="loyaltyAmount" source="loyaltyAmount" />
        <NumberInput step={1} label="loyaltyPoints" source="loyaltyPoints" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namedPlace" source="namedPlace" />
        <TextInput label="namingSeries" source="namingSeries" />
        <NumberInput label="netTotal" source="netTotal" />
        <TextInput label="orderType" source="orderType" />
        <TextInput
          label="otherChargesCalculation"
          multiline
          source="otherChargesCalculation"
        />
        <TextInput label="owner" source="owner" />
        <TextInput label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextInput label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <NumberInput label="perBilled" source="perBilled" />
        <NumberInput label="perDelivered" source="perDelivered" />
        <NumberInput label="perPicked" source="perPicked" />
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <DateTimeInput label="poDate" source="poDate" />
        <TextInput label="poNo" source="poNo" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <TextInput label="project" source="project" />
        <TextInput label="representsCompany" source="representsCompany" />
        <NumberInput step={1} label="reserveStock" source="reserveStock" />
        <NumberInput label="roundedTotal" source="roundedTotal" />
        <NumberInput label="roundingAdjustment" source="roundingAdjustment" />
        <TextInput label="salesPartner" source="salesPartner" />
        <TextInput label="scanBarcode" source="scanBarcode" />
        <TextInput label="selectPrintHeading" source="selectPrintHeading" />
        <TextInput label="sellingPriceList" source="sellingPriceList" />
        <TextInput label="setWarehouse" source="setWarehouse" />
        <TextInput label="shippingAddress" multiline source="shippingAddress" />
        <TextInput label="shippingAddressName" source="shippingAddressName" />
        <TextInput label="shippingRule" source="shippingRule" />
        <NumberInput
          step={1}
          label="skipDeliveryNote"
          source="skipDeliveryNote"
        />
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
        <NumberInput label="totalCommission" source="totalCommission" />
        <NumberInput label="totalNetWeight" source="totalNetWeight" />
        <NumberInput label="totalQty" source="totalQty" />
        <NumberInput
          label="totalTaxesAndCharges"
          source="totalTaxesAndCharges"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Create>
  );
};
