import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AssetRepairConsumedItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="consumedQuantity" source="consumedQuantity" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextInput label="serialNo" multiline source="serialNo" />
        <NumberInput label="totalValue" source="totalValue" />
        <NumberInput label="valuationRate" source="valuationRate" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Create>
  );
};
