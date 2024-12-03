import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalesOrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalesOrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actualQty" source="actualQty" />
        <TextField label="additionalNotes" source="additionalNotes" />
        <TextField label="againstBlanketOrder" source="againstBlanketOrder" />
        <TextField label="amount" source="amount" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseNetAmount" source="baseNetAmount" />
        <TextField label="baseNetRate" source="baseNetRate" />
        <TextField label="basePriceListRate" source="basePriceListRate" />
        <TextField label="baseRate" source="baseRate" />
        <TextField label="baseRateWithMargin" source="baseRateWithMargin" />
        <TextField label="billedAmt" source="billedAmt" />
        <TextField label="blanketOrder" source="blanketOrder" />
        <TextField label="blanketOrderRate" source="blanketOrderRate" />
        <TextField label="bomNo" source="bomNo" />
        <TextField label="brand" source="brand" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customerItemCode" source="customerItemCode" />
        <TextField label="deliveredBySupplier" source="deliveredBySupplier" />
        <TextField label="deliveredQty" source="deliveredQty" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="description" source="description" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="discountPercentage" source="discountPercentage" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="ensureDeliveryBasedOnProducedSerialNo"
          source="ensureDeliveryBasedOnProducedSerialNo"
        />
        <TextField label="grantCommission" source="grantCommission" />
        <TextField label="grossProfit" source="grossProfit" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="isFreeItem" source="isFreeItem" />
        <TextField label="isStockItem" source="isStockItem" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="itemTaxRate" source="itemTaxRate" />
        <TextField label="itemTaxTemplate" source="itemTaxTemplate" />
        <TextField label="marginRateOrAmount" source="marginRateOrAmount" />
        <TextField label="marginType" source="marginType" />
        <TextField label="materialRequest" source="materialRequest" />
        <TextField label="materialRequestItem" source="materialRequestItem" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="netAmount" source="netAmount" />
        <TextField label="netRate" source="netRate" />
        <TextField label="orderedQty" source="orderedQty" />
        <TextField label="owner" source="owner" />
        <TextField label="pageBreak" source="pageBreak" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="pickedQty" source="pickedQty" />
        <TextField label="plannedQty" source="plannedQty" />
        <TextField label="prevdocDocname" source="prevdocDocname" />
        <TextField label="priceListRate" source="priceListRate" />
        <TextField label="pricingRules" source="pricingRules" />
        <TextField label="producedQty" source="producedQty" />
        <TextField label="productionPlanQty" source="productionPlanQty" />
        <TextField label="projectedQty" source="projectedQty" />
        <TextField label="purchaseOrder" source="purchaseOrder" />
        <TextField label="purchaseOrderItem" source="purchaseOrderItem" />
        <TextField label="qty" source="qty" />
        <TextField label="quotationItem" source="quotationItem" />
        <TextField label="rate" source="rate" />
        <TextField label="rateWithMargin" source="rateWithMargin" />
        <TextField label="reserveStock" source="reserveStock" />
        <TextField label="returnedQty" source="returnedQty" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockReservedQty" source="stockReservedQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="stockUomRate" source="stockUomRate" />
        <TextField label="supplier" source="supplier" />
        <TextField label="targetWarehouse" source="targetWarehouse" />
        <TextField label="totalWeight" source="totalWeight" />
        <TextField label="transactionDate" source="transactionDate" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuationRate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="weightPerUnit" source="weightPerUnit" />
        <TextField label="weightUom" source="weightUom" />
        <TextField label="workOrderQty" source="workOrderQty" />{" "}
      </Datagrid>
    </List>
  );
};
