import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseOrderShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="applyDiscountOn" source="applyDiscountOn" />
        <TextField label="applyTds" source="applyTds" />
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
        <TextField label="billingAddress" source="billingAddress" />
        <TextField
          label="billingAddressDisplay"
          source="billingAddressDisplay"
        />
        <TextField label="buyingPriceList" source="buyingPriceList" />
        <TextField label="company" source="company" />
        <TextField label="contactDisplay" source="contactDisplay" />
        <TextField label="contactEmail" source="contactEmail" />
        <TextField label="contactMobile" source="contactMobile" />
        <TextField label="contactPerson" source="contactPerson" />
        <TextField label="conversionRate" source="conversionRate" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="customer" source="customer" />
        <TextField
          label="customerContactDisplay"
          source="customerContactDisplay"
        />
        <TextField label="customerContactEmail" source="customerContactEmail" />
        <TextField
          label="customerContactMobile"
          source="customerContactMobile"
        />
        <TextField
          label="customerContactPerson"
          source="customerContactPerson"
        />
        <TextField label="customerName" source="customerName" />
        <TextField label="disableRoundedTotal" source="disableRoundedTotal" />
        <TextField label="discountAmount" source="discountAmount" />
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
        <TextField label="isInternalSupplier" source="isInternalSupplier" />
        <TextField
          label="isOldSubcontractingFlow"
          source="isOldSubcontractingFlow"
        />
        <TextField label="isSubcontracted" source="isSubcontracted" />
        <TextField label="language" source="language" />
        <TextField label="letterHead" source="letterHead" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namedPlace" source="namedPlace" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="netTotal" source="netTotal" />
        <TextField
          label="orderConfirmationDate"
          source="orderConfirmationDate"
        />
        <TextField label="orderConfirmationNo" source="orderConfirmationNo" />
        <TextField
          label="otherChargesCalculation"
          source="otherChargesCalculation"
        />
        <TextField label="owner" source="owner" />
        <TextField label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextField label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <TextField label="perBilled" source="perBilled" />
        <TextField label="perReceived" source="perReceived" />
        <TextField label="plcConversionRate" source="plcConversionRate" />
        <TextField label="priceListCurrency" source="priceListCurrency" />
        <TextField label="project" source="project" />
        <TextField label="refSq" source="refSq" />
        <TextField label="representsCompany" source="representsCompany" />
        <TextField label="roundedTotal" source="roundedTotal" />
        <TextField label="roundingAdjustment" source="roundingAdjustment" />
        <TextField label="scanBarcode" source="scanBarcode" />
        <TextField label="scheduleDate" source="scheduleDate" />
        <TextField label="selectPrintHeading" source="selectPrintHeading" />
        <TextField label="setFromWarehouse" source="setFromWarehouse" />
        <TextField label="setReserveWarehouse" source="setReserveWarehouse" />
        <TextField label="setWarehouse" source="setWarehouse" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField
          label="shippingAddressDisplay"
          source="shippingAddressDisplay"
        />
        <TextField label="shippingRule" source="shippingRule" />
        <TextField label="status" source="status" />
        <TextField label="supplier" source="supplier" />
        <TextField label="supplierAddress" source="supplierAddress" />
        <TextField label="supplierName" source="supplierName" />
        <TextField label="supplierWarehouse" source="supplierWarehouse" />
        <TextField label="taxCategory" source="taxCategory" />
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
        <TextField label="totalNetWeight" source="totalNetWeight" />
        <TextField label="totalQty" source="totalQty" />
        <TextField label="totalTaxesAndCharges" source="totalTaxesAndCharges" />
        <TextField label="transactionDate" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
