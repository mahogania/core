import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SalesOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextField label="addressDisplay" source="addressDisplay" />
        <TextField label="advancePaid" source="advancePaid" />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField
          label="amountEligibleForCommission"
          source="amountEligibleForCommission"
        />
        <TextField label="applyDiscountOn" source="applyDiscountOn" />
        <TextField label="autoRepeat" source="autoRepeat" />
        <TextField label="baseDiscountAmount" source="baseDiscountAmount" />
        <TextField label="baseGrandTotal" source="baseGrandTotal" />
        <TextField label="baseInWords" source="baseInWords" />
        <TextField label="baseNetTotal" source="baseNetTotal" />
        <TextField label="baseRoundedTotal" source="baseRoundedTotal" />
        <TextField
          label="baseRoundingAdjustment"
          source="baseRoundingAdjustment"
        />
        <TextField label="baseTotal" source="baseTotal" />
        <TextField
          label="baseTotalTaxesAndCharges"
          source="baseTotalTaxesAndCharges"
        />
        <TextField label="billingStatus" source="billingStatus" />
        <TextField label="campaign" source="campaign" />
        <TextField label="commissionRate" source="commissionRate" />
        <TextField label="company" source="company" />
        <TextField label="companyAddress" source="companyAddress" />
        <TextField
          label="companyAddressDisplay"
          source="companyAddressDisplay"
        />
        <TextField label="contactDisplay" source="contactDisplay" />
        <TextField label="contactEmail" source="contactEmail" />
        <TextField label="contactMobile" source="contactMobile" />
        <TextField label="contactPerson" source="contactPerson" />
        <TextField label="contactPhone" source="contactPhone" />
        <TextField label="conversionRate" source="conversionRate" />
        <TextField label="costCenter" source="costCenter" />
        <TextField label="couponCode" source="couponCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="customer" source="customer" />
        <TextField label="customerAddress" source="customerAddress" />
        <TextField label="customerGroup" source="customerGroup" />
        <TextField label="customerName" source="customerName" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="deliveryStatus" source="deliveryStatus" />
        <TextField label="disableRoundedTotal" source="disableRoundedTotal" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="dispatchAddress" source="dispatchAddress" />
        <TextField label="dispatchAddressName" source="dispatchAddressName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fromDate" source="fromDate" />
        <TextField label="grandTotal" source="grandTotal" />
        <TextField label="groupSameItems" source="groupSameItems" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ignorePricingRule" source="ignorePricingRule" />
        <TextField label="inWords" source="inWords" />
        <TextField label="incoterm" source="incoterm" />
        <TextField
          label="interCompanyOrderReference"
          source="interCompanyOrderReference"
        />
        <TextField label="isInternalCustomer" source="isInternalCustomer" />
        <TextField label="language" source="language" />
        <TextField label="letterHead" source="letterHead" />
        <TextField label="loyaltyAmount" source="loyaltyAmount" />
        <TextField label="loyaltyPoints" source="loyaltyPoints" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namedPlace" source="namedPlace" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="netTotal" source="netTotal" />
        <TextField label="orderType" source="orderType" />
        <TextField
          label="otherChargesCalculation"
          source="otherChargesCalculation"
        />
        <TextField label="owner" source="owner" />
        <TextField label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextField label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <TextField label="perBilled" source="perBilled" />
        <TextField label="perDelivered" source="perDelivered" />
        <TextField label="perPicked" source="perPicked" />
        <TextField label="plcConversionRate" source="plcConversionRate" />
        <TextField label="poDate" source="poDate" />
        <TextField label="poNo" source="poNo" />
        <TextField label="priceListCurrency" source="priceListCurrency" />
        <TextField label="project" source="project" />
        <TextField label="representsCompany" source="representsCompany" />
        <TextField label="reserveStock" source="reserveStock" />
        <TextField label="roundedTotal" source="roundedTotal" />
        <TextField label="roundingAdjustment" source="roundingAdjustment" />
        <TextField label="salesPartner" source="salesPartner" />
        <TextField label="scanBarcode" source="scanBarcode" />
        <TextField label="selectPrintHeading" source="selectPrintHeading" />
        <TextField label="sellingPriceList" source="sellingPriceList" />
        <TextField label="setWarehouse" source="setWarehouse" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField label="shippingAddressName" source="shippingAddressName" />
        <TextField label="shippingRule" source="shippingRule" />
        <TextField label="skipDeliveryNote" source="skipDeliveryNote" />
        <TextField label="source" source="source" />
        <TextField label="status" source="status" />
        <TextField label="taxCategory" source="taxCategory" />
        <TextField label="taxId" source="taxId" />
        <TextField label="taxesAndCharges" source="taxesAndCharges" />
        <TextField label="tcName" source="tcName" />
        <TextField label="terms" source="terms" />
        <TextField label="territory" source="territory" />
        <TextField label="title" source="title" />
        <TextField label="toDate" source="toDate" />
        <TextField label="total" source="total" />
        <TextField label="totalCommission" source="totalCommission" />
        <TextField label="totalNetWeight" source="totalNetWeight" />
        <TextField label="totalQty" source="totalQty" />
        <TextField label="totalTaxesAndCharges" source="totalTaxesAndCharges" />
        <TextField label="transactionDate" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
