import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PurchaseOrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PurchaseOrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actualQty" source="actualQty" />
        <TextField label="againstBlanketOrder" source="againstBlanketOrder" />
        <TextField label="amount" source="amount" />
        <TextField label="applyTds" source="applyTds" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseNetAmount" source="baseNetAmount" />
        <TextField label="baseNetRate" source="baseNetRate" />
        <TextField label="basePriceListRate" source="basePriceListRate" />
        <TextField label="baseRate" source="baseRate" />
        <TextField label="baseRateWithMargin" source="baseRateWithMargin" />
        <TextField label="billedAmt" source="billedAmt" />
        <TextField label="blanketOrder" source="blanketOrder" />
        <TextField label="blanketOrderRate" source="blanketOrderRate" />
        <TextField label="bom" source="bom" />
        <TextField label="brand" source="brand" />
        <TextField label="companyTotalStock" source="companyTotalStock" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="deliveredBySupplier" source="deliveredBySupplier" />
        <TextField label="description" source="description" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="discountPercentage" source="discountPercentage" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expectedDeliveryDate" source="expectedDeliveryDate" />
        <TextField label="expenseAccount" source="expenseAccount" />
        <TextField label="fgItem" source="fgItem" />
        <TextField label="fgItemQty" source="fgItemQty" />
        <TextField label="fromWarehouse" source="fromWarehouse" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="includeExplodedItems" source="includeExplodedItems" />
        <TextField label="isFixedAsset" source="isFixedAsset" />
        <TextField label="isFreeItem" source="isFreeItem" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="itemTaxRate" source="itemTaxRate" />
        <TextField label="itemTaxTemplate" source="itemTaxTemplate" />
        <TextField label="lastPurchaseRate" source="lastPurchaseRate" />
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
        <TextField label="productionPlan" source="productionPlan" />
        <TextField label="productionPlanItem" source="productionPlanItem" />
        <TextField
          label="productionPlanSubAssemblyItem"
          source="productionPlanSubAssemblyItem"
        />
        <TextField label="project" source="project" />
        <TextField label="qty" source="qty" />
        <TextField label="rate" source="rate" />
        <TextField label="rateWithMargin" source="rateWithMargin" />
        <TextField label="receivedQty" source="receivedQty" />
        <TextField label="returnedQty" source="returnedQty" />
        <TextField label="salesOrder" source="salesOrder" />
        <TextField label="salesOrderItem" source="salesOrderItem" />
        <TextField label="salesOrderPackedItem" source="salesOrderPackedItem" />
        <TextField label="scheduleDate" source="scheduleDate" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="stockUomRate" source="stockUomRate" />
        <TextField label="supplierPartNo" source="supplierPartNo" />
        <TextField label="supplierQuotation" source="supplierQuotation" />
        <TextField
          label="supplierQuotationItem"
          source="supplierQuotationItem"
        />
        <TextField label="totalWeight" source="totalWeight" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="weightPerUnit" source="weightPerUnit" />
        <TextField label="weightUom" source="weightUom" />
        <TextField label="wipCompositeAsset" source="wipCompositeAsset" />{" "}
      </Datagrid>
    </List>
  );
};
