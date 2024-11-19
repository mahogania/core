import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const QuotationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextInput label="addressDisplay" multiline source="addressDisplay" />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="applyDiscountOn" source="applyDiscountOn" />
        <TextInput label="autoRepeat" source="autoRepeat" />
        <NumberInput label="baseDiscountAmount" source="baseDiscountAmount" />
        <NumberInput label="baseGrandTotal" source="baseGrandTotal" />
        <TextInput label="baseInWords" multiline source="baseInWords" />
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
        <TextInput label="campaign" source="campaign" />
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
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="couponCode" source="couponCode" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customerAddress" source="customerAddress" />
        <TextInput label="customerGroup" source="customerGroup" />
        <TextInput label="customerName" source="customerName" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="enqDet" multiline source="enqDet" />
        <NumberInput label="grandTotal" source="grandTotal" />
        <NumberInput step={1} label="groupSameItems" source="groupSameItems" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignorePricingRule"
          source="ignorePricingRule"
        />
        <TextInput label="inWords" multiline source="inWords" />
        <TextInput label="incoterm" source="incoterm" />
        <TextInput label="language" source="language" />
        <TextInput label="letterHead" source="letterHead" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namedPlace" source="namedPlace" />
        <TextInput label="namingSeries" source="namingSeries" />
        <NumberInput label="netTotal" source="netTotal" />
        <TextInput label="opportunity" source="opportunity" />
        <TextInput label="orderLostReason" multiline source="orderLostReason" />
        <TextInput label="orderType" source="orderType" />
        <TextInput
          label="otherChargesCalculation"
          multiline
          source="otherChargesCalculation"
        />
        <TextInput label="owner" source="owner" />
        <TextInput label="partyName" source="partyName" />
        <TextInput label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <TextInput label="quotationTo" source="quotationTo" />
        <TextInput label="referralSalesPartner" source="referralSalesPartner" />
        <NumberInput label="roundedTotal" source="roundedTotal" />
        <NumberInput label="roundingAdjustment" source="roundingAdjustment" />
        <TextInput label="scanBarcode" source="scanBarcode" />
        <TextInput label="selectPrintHeading" source="selectPrintHeading" />
        <TextInput label="sellingPriceList" source="sellingPriceList" />
        <TextInput label="shippingAddress" multiline source="shippingAddress" />
        <TextInput label="shippingAddressName" source="shippingAddressName" />
        <TextInput label="shippingRule" source="shippingRule" />
        <TextInput label="source" source="source" />
        <TextInput label="status" source="status" />
        <TextInput label="supplierQuotation" source="supplierQuotation" />
        <TextInput label="taxCategory" source="taxCategory" />
        <TextInput label="taxesAndCharges" source="taxesAndCharges" />
        <TextInput label="tcName" source="tcName" />
        <TextInput label="terms" multiline source="terms" />
        <TextInput label="territory" source="territory" />
        <TextInput label="title" source="title" />
        <NumberInput label="total" source="total" />
        <NumberInput label="totalNetWeight" source="totalNetWeight" />
        <NumberInput label="totalQty" source="totalQty" />
        <NumberInput
          label="totalTaxesAndCharges"
          source="totalTaxesAndCharges"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <DateTimeInput label="validTill" source="validTill" />
      </SimpleForm>
    </Edit>
  );
};
