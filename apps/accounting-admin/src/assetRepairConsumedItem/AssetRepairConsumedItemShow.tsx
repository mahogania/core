import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AssetRepairConsumedItemShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="consumedQuantity" source="consumedQuantity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextField label="serialNo" source="serialNo" />
        <TextField label="totalValue" source="totalValue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuationRate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />
      </SimpleShowLayout>
    </Show>
  );
};
