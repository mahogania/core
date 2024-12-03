import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseOrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actualQty" source="actualQty" />
        <NumberInput
          step={1}
          label="againstBlanketOrder"
          source="againstBlanketOrder"
        />
        <NumberInput label="amount" source="amount" />
        <NumberInput step={1} label="applyTds" source="applyTds" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <NumberInput label="baseNetAmount" source="baseNetAmount" />
        <NumberInput label="baseNetRate" source="baseNetRate" />
        <NumberInput label="basePriceListRate" source="basePriceListRate" />
        <NumberInput label="baseRate" source="baseRate" />
        <NumberInput label="baseRateWithMargin" source="baseRateWithMargin" />
        <NumberInput label="billedAmt" source="billedAmt" />
        <TextInput label="blanketOrder" source="blanketOrder" />
        <NumberInput label="blanketOrderRate" source="blanketOrderRate" />
        <TextInput label="bom" source="bom" />
        <TextInput label="brand" source="brand" />
        <NumberInput label="companyTotalStock" source="companyTotalStock" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          step={1}
          label="deliveredBySupplier"
          source="deliveredBySupplier"
        />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput
          label="expectedDeliveryDate"
          source="expectedDeliveryDate"
        />
        <TextInput label="expenseAccount" source="expenseAccount" />
        <TextInput label="fgItem" source="fgItem" />
        <NumberInput label="fgItemQty" source="fgItemQty" />
        <TextInput label="fromWarehouse" source="fromWarehouse" />
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
        <TextInput label="itemTaxRate" multiline source="itemTaxRate" />
        <TextInput label="itemTaxTemplate" source="itemTaxTemplate" />
        <NumberInput label="lastPurchaseRate" source="lastPurchaseRate" />
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
        <TextInput label="productionPlan" source="productionPlan" />
        <TextInput label="productionPlanItem" source="productionPlanItem" />
        <TextInput
          label="productionPlanSubAssemblyItem"
          source="productionPlanSubAssemblyItem"
        />
        <TextInput label="project" source="project" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="rate" source="rate" />
        <NumberInput label="rateWithMargin" source="rateWithMargin" />
        <NumberInput label="receivedQty" source="receivedQty" />
        <NumberInput label="returnedQty" source="returnedQty" />
        <TextInput label="salesOrder" source="salesOrder" />
        <TextInput label="salesOrderItem" source="salesOrderItem" />
        <TextInput label="salesOrderPackedItem" source="salesOrderPackedItem" />
        <DateTimeInput label="scheduleDate" source="scheduleDate" />
        <NumberInput label="stockQty" source="stockQty" />
        <TextInput label="stockUom" source="stockUom" />
        <NumberInput label="stockUomRate" source="stockUomRate" />
        <TextInput label="supplierPartNo" source="supplierPartNo" />
        <TextInput label="supplierQuotation" source="supplierQuotation" />
        <TextInput
          label="supplierQuotationItem"
          source="supplierQuotationItem"
        />
        <NumberInput label="totalWeight" source="totalWeight" />
        <TextInput label="uom" source="uom" />
        <TextInput label="warehouse" source="warehouse" />
        <NumberInput label="weightPerUnit" source="weightPerUnit" />
        <TextInput label="weightUom" source="weightUom" />
        <TextInput label="wipCompositeAsset" source="wipCompositeAsset" />
      </SimpleForm>
    </Edit>
  );
};
