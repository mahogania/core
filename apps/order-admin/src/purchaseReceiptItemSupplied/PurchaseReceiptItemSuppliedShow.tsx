import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseReceiptItemSuppliedShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="batchNo" source="batchNo" />
        <TextField label="bomDetailNo" source="bomDetailNo" />
        <TextField label="consumedQty" source="consumedQty" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currentStock" source="currentStock" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemName" source="itemName" />
        <TextField label="mainItemCode" source="mainItemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="purchaseOrder" source="purchaseOrder" />
        <TextField label="rate" source="rate" />
        <TextField label="referenceName" source="referenceName" />
        <TextField label="requiredQty" source="requiredQty" />
        <TextField label="rmItemCode" source="rmItemCode" />
        <TextField label="serialNo" source="serialNo" />
        <TextField label="stockUom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
