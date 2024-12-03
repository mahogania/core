import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QuotationItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuotationItems"}
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
        <TextField label="blanketOrder" source="blanketOrder" />
        <TextField label="blanketOrderRate" source="blanketOrderRate" />
        <TextField label="brand" source="brand" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customerItemCode" source="customerItemCode" />
        <TextField label="description" source="description" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="discountPercentage" source="discountPercentage" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="grossProfit" source="grossProfit" />
        <TextField label="hasAlternativeItem" source="hasAlternativeItem" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="isAlternative" source="isAlternative" />
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
        <TextField label="prevdocDocname" source="prevdocDocname" />
        <TextField label="prevdocDoctype" source="prevdocDoctype" />
        <TextField label="priceListRate" source="priceListRate" />
        <TextField label="pricingRules" source="pricingRules" />
        <TextField label="projectedQty" source="projectedQty" />
        <TextField label="qty" source="qty" />
        <TextField label="rate" source="rate" />
        <TextField label="rateWithMargin" source="rateWithMargin" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="stockUomRate" source="stockUomRate" />
        <TextField label="totalWeight" source="totalWeight" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuationRate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="weightPerUnit" source="weightPerUnit" />
        <TextField label="weightUom" source="weightUom" />{" "}
      </Datagrid>
    </List>
  );
};
