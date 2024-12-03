import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseReceiptItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="allowZeroValuationRate"
          source="allowZeroValuationRate"
        />
        <NumberInput label="amount" source="amount" />
        <NumberInput step={1} label="applyTds" source="applyTds" />
        <TextInput label="assetCategory" source="assetCategory" />
        <TextInput label="assetLocation" source="assetLocation" />
        <TextInput label="barcode" source="barcode" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <NumberInput label="baseNetAmount" source="baseNetAmount" />
        <NumberInput label="baseNetRate" source="baseNetRate" />
        <NumberInput label="basePriceListRate" source="basePriceListRate" />
        <NumberInput label="baseRate" source="baseRate" />
        <NumberInput label="baseRateWithMargin" source="baseRateWithMargin" />
        <TextInput label="batchNo" source="batchNo" />
        <NumberInput label="billedAmt" source="billedAmt" />
        <TextInput label="bom" source="bom" />
        <TextInput label="brand" source="brand" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="deliveryNoteItem" source="deliveryNoteItem" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="expenseAccount" source="expenseAccount" />
        <TextInput label="fromWarehouse" source="fromWarehouse" />
        <NumberInput step={1} label="hasItemScanned" source="hasItemScanned" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <NumberInput
          step={1}
          label="includeExplodedItems"
          source="includeExplodedItems"
        />
        <NumberInput step={1} label="isFixedAsset" source="isFixedAsset" />
        <NumberInput step={1} label="isFreeItem" source="isFreeItem" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemGroup" source="itemGroup" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput label="itemTaxAmount" source="itemTaxAmount" />
        <TextInput label="itemTaxRate" multiline source="itemTaxRate" />
        <TextInput label="itemTaxTemplate" source="itemTaxTemplate" />
        <NumberInput
          label="landedCostVoucherAmount"
          source="landedCostVoucherAmount"
        />
        <TextInput label="manufacturer" source="manufacturer" />
        <TextInput label="manufacturerPartNo" source="manufacturerPartNo" />
        <NumberInput label="marginRateOrAmount" source="marginRateOrAmount" />
        <TextInput label="marginType" source="marginType" />
        <TextInput label="materialRequest" source="materialRequest" />
        <TextInput label="materialRequestItem" source="materialRequestItem" />
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
        <NumberInput label="priceListRate" source="priceListRate" />
        <TextInput label="pricingRules" multiline source="pricingRules" />
        <TextInput label="productBundle" source="productBundle" />
        <TextInput label="project" source="project" />
        <TextInput
          label="provisionalExpenseAccount"
          source="provisionalExpenseAccount"
        />
        <TextInput label="purchaseInvoice" source="purchaseInvoice" />
        <TextInput label="purchaseInvoiceItem" source="purchaseInvoiceItem" />
        <TextInput label="purchaseOrder" source="purchaseOrder" />
        <TextInput label="purchaseOrderItem" source="purchaseOrderItem" />
        <TextInput label="purchaseReceiptItem" source="purchaseReceiptItem" />
        <TextInput label="putawayRule" source="putawayRule" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="qualityInspection" source="qualityInspection" />
        <NumberInput label="rate" source="rate" />
        <NumberInput
          label="rateDifferenceWithPurchaseInvoice"
          source="rateDifferenceWithPurchaseInvoice"
        />
        <NumberInput label="rateWithMargin" source="rateWithMargin" />
        <NumberInput label="receivedQty" source="receivedQty" />
        <NumberInput label="receivedStockQty" source="receivedStockQty" />
        <NumberInput label="rejectedQty" source="rejectedQty" />
        <TextInput
          label="rejectedSerialAndBatchBundle"
          source="rejectedSerialAndBatchBundle"
        />
        <TextInput
          label="rejectedSerialNo"
          multiline
          source="rejectedSerialNo"
        />
        <TextInput label="rejectedWarehouse" source="rejectedWarehouse" />
        <NumberInput step={1} label="retainSample" source="retainSample" />
        <NumberInput
          step={1}
          label="returnQtyFromRejectedWarehouse"
          source="returnQtyFromRejectedWarehouse"
        />
        <NumberInput label="returnedQty" source="returnedQty" />
        <NumberInput label="rmSuppCost" source="rmSuppCost" />
        <NumberInput label="salesIncomingRate" source="salesIncomingRate" />
        <TextInput label="salesOrder" source="salesOrder" />
        <TextInput label="salesOrderItem" source="salesOrderItem" />
        <NumberInput step={1} label="sampleQuantity" source="sampleQuantity" />
        <DateTimeInput label="scheduleDate" source="scheduleDate" />
        <TextInput label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextInput label="serialNo" multiline source="serialNo" />
        <NumberInput label="stockQty" source="stockQty" />
        <TextInput label="stockUom" source="stockUom" />
        <NumberInput label="stockUomRate" source="stockUomRate" />
        <TextInput
          label="subcontractingReceiptItem"
          source="subcontractingReceiptItem"
        />
        <TextInput label="supplierPartNo" source="supplierPartNo" />
        <NumberInput label="totalWeight" source="totalWeight" />
        <TextInput label="uom" source="uom" />
        <NumberInput
          step={1}
          label="useSerialBatchFields"
          source="useSerialBatchFields"
        />
        <NumberInput label="valuationRate" source="valuationRate" />
        <TextInput label="warehouse" source="warehouse" />
        <NumberInput label="weightPerUnit" source="weightPerUnit" />
        <TextInput label="weightUom" source="weightUom" />
        <TextInput label="wipCompositeAsset" source="wipCompositeAsset" />
      </SimpleForm>
    </Create>
  );
};
