import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PosInvoiceItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="actualBatchQty" source="actualBatchQty" />
        <NumberInput label="actualQty" source="actualQty" />
        <NumberInput
          step={1}
          label="allowZeroValuationRate"
          source="allowZeroValuationRate"
        />
        <NumberInput label="amount" source="amount" />
        <TextInput label="asset" source="asset" />
        <TextInput label="barcode" source="barcode" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <NumberInput label="baseNetAmount" source="baseNetAmount" />
        <NumberInput label="baseNetRate" source="baseNetRate" />
        <NumberInput label="basePriceListRate" source="basePriceListRate" />
        <NumberInput label="baseRate" source="baseRate" />
        <NumberInput label="baseRateWithMargin" source="baseRateWithMargin" />
        <TextInput label="batchNo" source="batchNo" />
        <TextInput label="brand" source="brand" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customerItemCode" source="customerItemCode" />
        <TextInput
          label="deferredRevenueAccount"
          source="deferredRevenueAccount"
        />
        <NumberInput
          step={1}
          label="deliveredBySupplier"
          source="deliveredBySupplier"
        />
        <NumberInput label="deliveredQty" source="deliveredQty" />
        <TextInput label="deliveryNote" source="deliveryNote" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <TextInput label="dnDetail" source="dnDetail" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput
          step={1}
          label="enableDeferredRevenue"
          source="enableDeferredRevenue"
        />
        <TextInput label="expenseAccount" source="expenseAccount" />
        <TextInput label="financeBook" source="financeBook" />
        <NumberInput
          step={1}
          label="grantCommission"
          source="grantCommission"
        />
        <NumberInput step={1} label="hasItemScanned" source="hasItemScanned" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <TextInput label="incomeAccount" source="incomeAccount" />
        <NumberInput step={1} label="isFixedAsset" source="isFixedAsset" />
        <NumberInput step={1} label="isFreeItem" source="isFreeItem" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemGroup" source="itemGroup" />
        <TextInput label="itemName" source="itemName" />
        <TextInput label="itemTaxRate" multiline source="itemTaxRate" />
        <TextInput label="itemTaxTemplate" source="itemTaxTemplate" />
        <NumberInput label="marginRateOrAmount" source="marginRateOrAmount" />
        <TextInput label="marginType" source="marginType" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="netAmount" source="netAmount" />
        <NumberInput label="netRate" source="netRate" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="pageBreak" source="pageBreak" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="posInvoiceItem" source="posInvoiceItem" />
        <NumberInput label="priceListRate" source="priceListRate" />
        <TextInput label="pricingRules" multiline source="pricingRules" />
        <TextInput label="project" source="project" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qualityInspection" source="qualityInspection" />
        <NumberInput label="rate" source="rate" />
        <NumberInput label="rateWithMargin" source="rateWithMargin" />
        <TextInput label="salesOrder" source="salesOrder" />
        <TextInput label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextInput label="serialNo" multiline source="serialNo" />
        <DateTimeInput label="serviceEndDate" source="serviceEndDate" />
        <DateTimeInput label="serviceStartDate" source="serviceStartDate" />
        <DateTimeInput label="serviceStopDate" source="serviceStopDate" />
        <TextInput label="soDetail" source="soDetail" />
        <NumberInput label="stockQty" source="stockQty" />
        <TextInput label="stockUom" source="stockUom" />
        <TextInput label="targetWarehouse" source="targetWarehouse" />
        <NumberInput label="totalWeight" source="totalWeight" />
        <TextInput label="uom" source="uom" />
        <NumberInput
          step={1}
          label="useSerialBatchFields"
          source="useSerialBatchFields"
        />
        <TextInput label="warehouse" source="warehouse" />
        <NumberInput label="weightPerUnit" source="weightPerUnit" />
        <TextInput label="weightUom" source="weightUom" />
      </SimpleForm>
    </Create>
  );
};
