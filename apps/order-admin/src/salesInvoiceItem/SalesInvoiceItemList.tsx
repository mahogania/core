import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalesInvoiceItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalesInvoiceItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actualBatchQty" source="actualBatchQty" />
        <TextField label="actualQty" source="actualQty" />
        <TextField
          label="allowZeroValuationRate"
          source="allowZeroValuationRate"
        />
        <TextField label="amount" source="amount" />
        <TextField label="asset" source="asset" />
        <TextField label="barcode" source="barcode" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseNetAmount" source="baseNetAmount" />
        <TextField label="baseNetRate" source="baseNetRate" />
        <TextField label="basePriceListRate" source="basePriceListRate" />
        <TextField label="baseRate" source="baseRate" />
        <TextField label="baseRateWithMargin" source="baseRateWithMargin" />
        <TextField label="batchNo" source="batchNo" />
        <TextField label="brand" source="brand" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customerItemCode" source="customerItemCode" />
        <TextField
          label="deferredRevenueAccount"
          source="deferredRevenueAccount"
        />
        <TextField label="deliveredBySupplier" source="deliveredBySupplier" />
        <TextField label="deliveredQty" source="deliveredQty" />
        <TextField label="deliveryNote" source="deliveryNote" />
        <TextField label="description" source="description" />
        <TextField label="discountAccount" source="discountAccount" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="discountPercentage" source="discountPercentage" />
        <TextField label="dnDetail" source="dnDetail" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="enableDeferredRevenue"
          source="enableDeferredRevenue"
        />
        <TextField label="expenseAccount" source="expenseAccount" />
        <TextField label="financeBook" source="financeBook" />
        <TextField label="grantCommission" source="grantCommission" />
        <TextField label="hasItemScanned" source="hasItemScanned" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="incomeAccount" source="incomeAccount" />
        <TextField label="incomingRate" source="incomingRate" />
        <TextField label="isFixedAsset" source="isFixedAsset" />
        <TextField label="isFreeItem" source="isFreeItem" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="itemTaxRate" source="itemTaxRate" />
        <TextField label="itemTaxTemplate" source="itemTaxTemplate" />
        <TextField label="marginRateOrAmount" source="marginRateOrAmount" />
        <TextField label="marginType" source="marginType" />
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
        <TextField label="project" source="project" />
        <TextField label="purchaseOrder" source="purchaseOrder" />
        <TextField label="purchaseOrderItem" source="purchaseOrderItem" />
        <TextField label="qty" source="qty" />
        <TextField label="qualityInspection" source="qualityInspection" />
        <TextField label="rate" source="rate" />
        <TextField label="rateWithMargin" source="rateWithMargin" />
        <TextField label="salesInvoiceItem" source="salesInvoiceItem" />
        <TextField label="salesOrder" source="salesOrder" />
        <TextField label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextField label="serialNo" source="serialNo" />
        <TextField label="serviceEndDate" source="serviceEndDate" />
        <TextField label="serviceStartDate" source="serviceStartDate" />
        <TextField label="serviceStopDate" source="serviceStopDate" />
        <TextField label="soDetail" source="soDetail" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="stockUomRate" source="stockUomRate" />
        <TextField label="targetWarehouse" source="targetWarehouse" />
        <TextField label="totalWeight" source="totalWeight" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="useSerialBatchFields" source="useSerialBatchFields" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="weightPerUnit" source="weightPerUnit" />
        <TextField label="weightUom" source="weightUom" />{" "}
      </Datagrid>
    </List>
  );
};
