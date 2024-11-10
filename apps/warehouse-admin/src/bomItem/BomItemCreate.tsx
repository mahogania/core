import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BomItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="allowAlternativeItem"
          source="allowAlternativeItem"
        />
        <NumberInput label="amount" source="amount" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <NumberInput label="baseRate" source="baseRate" />
        <TextInput label="bomNo" source="bomNo" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="doNotExplode" source="doNotExplode" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput label="hasVariants" source="hasVariants" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <BooleanInput
          label="includeItemInManufacturing"
          source="includeItemInManufacturing"
        />
        <BooleanInput label="isStockItem" source="isStockItem" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="operation" source="operation" />
        <TextInput label="originalItem" source="originalItem" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="qtyConsumedPerUnit" source="qtyConsumedPerUnit" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="sourceWarehouse" source="sourceWarehouse" />
        <BooleanInput label="sourcedBySupplier" source="sourcedBySupplier" />
        <NumberInput label="stockQty" source="stockQty" />
        <TextInput label="stockUom" source="stockUom" />
        <TextInput label="uom" source="uom" />
      </SimpleForm>
    </Create>
  );
};
