import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BomCreatorItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="baseAmount" source="baseAmount" />
        <NumberInput label="baseRate" source="baseRate" />
        <BooleanInput label="bomCreated" source="bomCreated" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="doNotExplode" source="doNotExplode" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="fgItem" source="fgItem" />
        <TextInput label="fgReferenceId" source="fgReferenceId" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="instruction" multiline source="instruction" />
        <BooleanInput label="isExpandable" source="isExpandable" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemGroup" source="itemGroup" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentRowNo" source="parentRowNo" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="qty" source="qty" />
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
