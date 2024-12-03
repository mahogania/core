import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseReceiptItemSuppliedCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="batchNo" source="batchNo" />
        <TextInput label="bomDetailNo" source="bomDetailNo" />
        <NumberInput label="consumedQty" source="consumedQty" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="currentStock" source="currentStock" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemName" source="itemName" />
        <TextInput label="mainItemCode" source="mainItemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="purchaseOrder" source="purchaseOrder" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="referenceName" source="referenceName" />
        <NumberInput label="requiredQty" source="requiredQty" />
        <TextInput label="rmItemCode" source="rmItemCode" />
        <TextInput label="serialNo" multiline source="serialNo" />
        <TextInput label="stockUom" source="stockUom" />
      </SimpleForm>
    </Create>
  );
};
