import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="batchId" source="batchId" />
        <NumberInput label="batchQty" source="batchQty" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <TextInput label="item" source="item" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="manufacturingDate" source="manufacturingDate" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parentBatch" source="parentBatch" />
        <NumberInput label="producedQty" source="producedQty" />
        <NumberInput label="qtyToProduce" source="qtyToProduce" />
        <TextInput label="referenceDoctype" source="referenceDoctype" />
        <TextInput label="referenceName" source="referenceName" />
        <TextInput label="stockUom" source="stockUom" />
        <TextInput label="supplier" source="supplier" />
        <NumberInput
          step={1}
          label="useBatchwiseValuation"
          source="useBatchwiseValuation"
        />
      </SimpleForm>
    </Create>
  );
};
