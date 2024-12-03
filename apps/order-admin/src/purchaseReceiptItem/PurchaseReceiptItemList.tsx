import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PurchaseReceiptItemList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PurchaseReceiptItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="allowZeroValuationRate"
          source="allowZeroValuationRate"
        />
        <TextField label="amount" source="amount" />
        <TextField label="applyTds" source="applyTds" />
        <TextField label="assetCategory" source="assetCategory" />
        <TextField label="assetLocation" source="assetLocation" />
        <TextField label="barcode" source="barcode" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseNetAmount" source="baseNetAmount" />
        <TextField label="baseNetRate" source="baseNetRate" />
        <TextField label="basePriceListRate" source="basePriceListRate" />
        <TextField label="baseRate" source="baseRate" />
        <TextField label="baseRateWithMargin" source="baseRateWithMargin" />
        <TextField label="batchNo" source="batchNo" />
        <TextField label="billedAmt" source="billedAmt" />
        <TextField label="bom" source="bom" />
        <TextField label="brand" source="brand" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="deliveryNoteItem" source="deliveryNoteItem" />
        <TextField label="description" source="description" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="discountPercentage" source="discountPercentage" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expenseAccount" source="expenseAccount" />
        <TextField label="fromWarehouse" source="fromWarehouse" />
        <TextField label="hasItemScanned" source="hasItemScanned" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="includeExplodedItems" source="includeExplodedItems" />
        <TextField label="isFixedAsset" source="isFixedAsset" />
        <TextField label="isFreeItem" source="isFreeItem" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="itemTaxAmount" source="itemTaxAmount" />
        <TextField label="itemTaxRate" source="itemTaxRate" />
        <TextField label="itemTaxTemplate" source="itemTaxTemplate" />
        <TextField
          label="landedCostVoucherAmount"
          source="landedCostVoucherAmount"
        />
        <TextField label="manufacturer" source="manufacturer" />
        <TextField label="manufacturerPartNo" source="manufacturerPartNo" />
        <TextField label="marginRateOrAmount" source="marginRateOrAmount" />
        <TextField label="marginType" source="marginType" />
        <TextField label="materialRequest" source="materialRequest" />
        <TextField label="materialRequestItem" source="materialRequestItem" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="netAmount" source="netAmount" />
        <TextField label="netRate" source="netRate" />
        <TextField label="owner" source="owner" />
        <TextField label="pageBreak" source="pageBreak" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="priceListRate" source="priceListRate" />
        <TextField label="pricingRules" source="pricingRules" />
        <TextField label="productBundle" source="productBundle" />
        <TextField label="project" source="project" />
        <TextField
          label="provisionalExpenseAccount"
          source="provisionalExpenseAccount"
        />
        <TextField label="purchaseInvoice" source="purchaseInvoice" />
        <TextField label="purchaseInvoiceItem" source="purchaseInvoiceItem" />
        <TextField label="purchaseOrder" source="purchaseOrder" />
        <TextField label="purchaseOrderItem" source="purchaseOrderItem" />
        <TextField label="purchaseReceiptItem" source="purchaseReceiptItem" />
        <TextField label="putawayRule" source="putawayRule" />
        <TextField label="qty" source="qty" />
        <TextField label="qualityInspection" source="qualityInspection" />
        <TextField label="rate" source="rate" />
        <TextField
          label="rateDifferenceWithPurchaseInvoice"
          source="rateDifferenceWithPurchaseInvoice"
        />
        <TextField label="rateWithMargin" source="rateWithMargin" />
        <TextField label="receivedQty" source="receivedQty" />
        <TextField label="receivedStockQty" source="receivedStockQty" />
        <TextField label="rejectedQty" source="rejectedQty" />
        <TextField
          label="rejectedSerialAndBatchBundle"
          source="rejectedSerialAndBatchBundle"
        />
        <TextField label="rejectedSerialNo" source="rejectedSerialNo" />
        <TextField label="rejectedWarehouse" source="rejectedWarehouse" />
        <TextField label="retainSample" source="retainSample" />
        <TextField
          label="returnQtyFromRejectedWarehouse"
          source="returnQtyFromRejectedWarehouse"
        />
        <TextField label="returnedQty" source="returnedQty" />
        <TextField label="rmSuppCost" source="rmSuppCost" />
        <TextField label="salesIncomingRate" source="salesIncomingRate" />
        <TextField label="salesOrder" source="salesOrder" />
        <TextField label="salesOrderItem" source="salesOrderItem" />
        <TextField label="sampleQuantity" source="sampleQuantity" />
        <TextField label="scheduleDate" source="scheduleDate" />
        <TextField label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextField label="serialNo" source="serialNo" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="stockUomRate" source="stockUomRate" />
        <TextField
          label="subcontractingReceiptItem"
          source="subcontractingReceiptItem"
        />
        <TextField label="supplierPartNo" source="supplierPartNo" />
        <TextField label="totalWeight" source="totalWeight" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="useSerialBatchFields" source="useSerialBatchFields" />
        <TextField label="valuationRate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="weightPerUnit" source="weightPerUnit" />
        <TextField label="weightUom" source="weightUom" />
        <TextField label="wipCompositeAsset" source="wipCompositeAsset" />{" "}
      </Datagrid>
    </List>
  );
};
