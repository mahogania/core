import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="batchId" source="batchId" />
        <TextField label="batchQty" source="batchQty" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="item" source="item" />
        <TextField label="itemName" source="itemName" />
        <TextField label="manufacturingDate" source="manufacturingDate" />
        <TextField label="owner" source="owner" />
        <TextField label="parentBatch" source="parentBatch" />
        <TextField label="producedQty" source="producedQty" />
        <TextField label="qtyToProduce" source="qtyToProduce" />
        <TextField label="referenceDoctype" source="referenceDoctype" />
        <TextField label="referenceName" source="referenceName" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="supplier" source="supplier" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="useBatchwiseValuation"
          source="useBatchwiseValuation"
        />
      </SimpleShowLayout>
    </Show>
  );
};
