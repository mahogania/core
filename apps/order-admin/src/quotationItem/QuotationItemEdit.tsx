import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const QuotationItemEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="blanketOrder" source="blanketOrder" />
        <NumberInput label="blanketOrderRate" source="blanketOrderRate" />
        <TextInput label="brand" source="brand" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customerItemCode" source="customerItemCode" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountAmount" source="discountAmount" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="grossProfit" source="grossProfit" />
        <NumberInput
          step={1}
          label="hasAlternativeItem"
          source="hasAlternativeItem"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <NumberInput step={1} label="isAlternative" source="isAlternative" />
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
        <TextInput label="prevdocDocname" source="prevdocDocname" />
        <TextInput label="prevdocDoctype" source="prevdocDoctype" />
        <NumberInput label="priceListRate" source="priceListRate" />
        <TextInput label="pricingRules" multiline source="pricingRules" />
        <NumberInput label="projectedQty" source="projectedQty" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="rate" source="rate" />
        <NumberInput label="rateWithMargin" source="rateWithMargin" />
        <NumberInput label="stockQty" source="stockQty" />
        <TextInput label="stockUom" source="stockUom" />
        <NumberInput label="stockUomRate" source="stockUomRate" />
        <NumberInput label="totalWeight" source="totalWeight" />
        <TextInput label="uom" source="uom" />
        <NumberInput label="valuationRate" source="valuationRate" />
        <TextInput label="warehouse" source="warehouse" />
        <NumberInput label="weightPerUnit" source="weightPerUnit" />
        <TextInput label="weightUom" source="weightUom" />
      </SimpleForm>
    </Edit>
  );
};
