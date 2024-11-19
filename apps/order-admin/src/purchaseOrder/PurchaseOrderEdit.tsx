import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextInput label="addressDisplay" multiline source="addressDisplay" />
        <NumberInput label="advancePaid" source="advancePaid" />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="applyDiscountOn" source="applyDiscountOn" />
        <NumberInput step={1} label="applyTds" source="applyTds" />
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
        <TextInput label="billingAddress" source="billingAddress" />
        <TextInput
          label="billingAddressDisplay"
          multiline
          source="billingAddressDisplay"
        />
        <TextInput label="buyingPriceList" source="buyingPriceList" />
        <TextInput label="company" source="company" />
        <TextInput label="contactDisplay" multiline source="contactDisplay" />
        <TextInput label="contactEmail" multiline source="contactEmail" />
        <TextInput label="contactMobile" multiline source="contactMobile" />
        <TextInput label="contactPerson" source="contactPerson" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customer" source="customer" />
        <TextInput
          label="customerContactDisplay"
          multiline
          source="customerContactDisplay"
        />
        <TextInput
          label="customerContactEmail"
          multiline
          source="customerContactEmail"
        />
        <TextInput
          label="customerContactMobile"
          multiline
          source="customerContactMobile"
        />
        <TextInput
          label="customerContactPerson"
          source="customerContactPerson"
        />
        <TextInput label="customerName" source="customerName" />
        <NumberInput
          step={1}
          label="disableRoundedTotal"
          source="disableRoundedTotal"
        />
        <NumberInput label="discountAmount" source="discountAmount" />
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
        <TextInput label="inWords" multiline source="inWords" />
        <TextInput label="incoterm" source="incoterm" />
        <TextInput
          label="interCompanyOrderReference"
          source="interCompanyOrderReference"
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
        <NumberInput
          step={1}
          label="isSubcontracted"
          source="isSubcontracted"
        />
        <TextInput label="language" source="language" />
        <TextInput label="letterHead" source="letterHead" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namedPlace" source="namedPlace" />
        <TextInput label="namingSeries" source="namingSeries" />
        <NumberInput label="netTotal" source="netTotal" />
        <DateTimeInput
          label="orderConfirmationDate"
          source="orderConfirmationDate"
        />
        <TextInput label="orderConfirmationNo" source="orderConfirmationNo" />
        <TextInput
          label="otherChargesCalculation"
          multiline
          source="otherChargesCalculation"
        />
        <TextInput label="owner" source="owner" />
        <TextInput label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextInput label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <NumberInput label="perBilled" source="perBilled" />
        <NumberInput label="perReceived" source="perReceived" />
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <TextInput label="project" source="project" />
        <TextInput label="refSq" source="refSq" />
        <TextInput label="representsCompany" source="representsCompany" />
        <NumberInput label="roundedTotal" source="roundedTotal" />
        <NumberInput label="roundingAdjustment" source="roundingAdjustment" />
        <TextInput label="scanBarcode" source="scanBarcode" />
        <DateTimeInput label="scheduleDate" source="scheduleDate" />
        <TextInput label="selectPrintHeading" source="selectPrintHeading" />
        <TextInput label="setFromWarehouse" source="setFromWarehouse" />
        <TextInput label="setReserveWarehouse" source="setReserveWarehouse" />
        <TextInput label="setWarehouse" source="setWarehouse" />
        <TextInput label="shippingAddress" source="shippingAddress" />
        <TextInput
          label="shippingAddressDisplay"
          multiline
          source="shippingAddressDisplay"
        />
        <TextInput label="shippingRule" source="shippingRule" />
        <TextInput label="status" source="status" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="supplierAddress" source="supplierAddress" />
        <TextInput label="supplierName" source="supplierName" />
        <TextInput label="supplierWarehouse" source="supplierWarehouse" />
        <TextInput label="taxCategory" source="taxCategory" />
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
        <NumberInput label="totalNetWeight" source="totalNetWeight" />
        <NumberInput label="totalQty" source="totalQty" />
        <NumberInput
          label="totalTaxesAndCharges"
          source="totalTaxesAndCharges"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
