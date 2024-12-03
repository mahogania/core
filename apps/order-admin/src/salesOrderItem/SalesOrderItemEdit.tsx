import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SalesOrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actualQty" source="actualQty" />
        <TextInput label="additionalNotes" multiline source="additionalNotes" />
        <NumberInput
          step={1}
          label="againstBlanketOrder"
          source="againstBlanketOrder"
        />
        <NumberInput label="amount" source="amount" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <NumberInput label="baseNetAmount" source="baseNetAmount" />
        <NumberInput label="baseNetRate" source="baseNetRate" />
        <NumberInput label="basePriceListRate" source="basePriceListRate" />
        <NumberInput label="baseRate" source="baseRate" />
        <NumberInput label="baseRateWithMargin" source="baseRateWithMargin" />
        <NumberInput label="billedAmt" source="billedAmt" />
        <TextInput label="blanketOrder" source="blanketOrder" />
        <NumberInput label="blanketOrderRate" source="blanketOrderRate" />
        <TextInput label="bomNo" source="bomNo" />
        <TextInput label="brand" source="brand" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customerItemCode" source="customerItemCode" />
        <NumberInput
          step={1}
          label="deliveredBySupplier"
          source="deliveredBySupplier"
        />
        <NumberInput label="deliveredQty" source="deliveredQty" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          step={1}
          label="ensureDeliveryBasedOnProducedSerialNo"
          source="ensureDeliveryBasedOnProducedSerialNo"
        />
        <NumberInput
          step={1}
          label="grantCommission"
          source="grantCommission"
        />
        <NumberInput label="grossProfit" source="grossProfit" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <NumberInput step={1} label="isFreeItem" source="isFreeItem" />
        <NumberInput step={1} label="isStockItem" source="isStockItem" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemGroup" source="itemGroup" />
        <TextInput label="itemName" source="itemName" />
        <TextInput label="itemTaxRate" multiline source="itemTaxRate" />
        <TextInput label="itemTaxTemplate" source="itemTaxTemplate" />
        <NumberInput label="marginRateOrAmount" source="marginRateOrAmount" />
        <TextInput label="marginType" source="marginType" />
        <TextInput label="materialRequest" source="materialRequest" />
        <TextInput label="materialRequestItem" source="materialRequestItem" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="netAmount" source="netAmount" />
        <NumberInput label="netRate" source="netRate" />
        <NumberInput label="orderedQty" source="orderedQty" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="pageBreak" source="pageBreak" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <NumberInput label="pickedQty" source="pickedQty" />
        <NumberInput label="plannedQty" source="plannedQty" />
        <TextInput label="prevdocDocname" source="prevdocDocname" />
        <NumberInput label="priceListRate" source="priceListRate" />
        <TextInput label="pricingRules" multiline source="pricingRules" />
        <NumberInput label="producedQty" source="producedQty" />
        <NumberInput label="productionPlanQty" source="productionPlanQty" />
        <NumberInput label="projectedQty" source="projectedQty" />
        <TextInput label="purchaseOrder" source="purchaseOrder" />
        <TextInput label="purchaseOrderItem" source="purchaseOrderItem" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="quotationItem" source="quotationItem" />
        <NumberInput label="rate" source="rate" />
        <NumberInput label="rateWithMargin" source="rateWithMargin" />
        <NumberInput step={1} label="reserveStock" source="reserveStock" />
        <NumberInput label="returnedQty" source="returnedQty" />
        <NumberInput label="stockQty" source="stockQty" />
        <NumberInput label="stockReservedQty" source="stockReservedQty" />
        <TextInput label="stockUom" source="stockUom" />
        <NumberInput label="stockUomRate" source="stockUomRate" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="targetWarehouse" source="targetWarehouse" />
        <NumberInput label="totalWeight" source="totalWeight" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <TextInput label="uom" source="uom" />
        <NumberInput label="valuationRate" source="valuationRate" />
        <TextInput label="warehouse" source="warehouse" />
        <NumberInput label="weightPerUnit" source="weightPerUnit" />
        <TextInput label="weightUom" source="weightUom" />
        <NumberInput label="workOrderQty" source="workOrderQty" />
      </SimpleForm>
    </Edit>
  );
};
