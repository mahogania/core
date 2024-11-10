import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BomExplosionItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <BooleanInput
          label="includeItemInManufacturing"
          source="includeItemInManufacturing"
        />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="operation" source="operation" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="qtyConsumedPerUnit" source="qtyConsumedPerUnit" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="sourceWarehouse" source="sourceWarehouse" />
        <BooleanInput label="sourcedBySupplier" source="sourcedBySupplier" />
        <NumberInput label="stockQty" source="stockQty" />
        <TextInput label="stockUom" source="stockUom" />
      </SimpleForm>
    </Edit>
  );
};
