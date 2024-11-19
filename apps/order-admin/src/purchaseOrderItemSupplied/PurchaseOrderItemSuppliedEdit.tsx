import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseOrderItemSuppliedEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="bomDetailNo" source="bomDetailNo" />
        <NumberInput label="consumedQty" source="consumedQty" />
        <NumberInput label="conversionFactor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="mainItemCode" source="mainItemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="referenceName" source="referenceName" />
        <NumberInput label="requiredQty" source="requiredQty" />
        <TextInput label="reserveWarehouse" source="reserveWarehouse" />
        <NumberInput label="returnedQty" source="returnedQty" />
        <TextInput label="rmItemCode" source="rmItemCode" />
        <TextInput label="stockUom" source="stockUom" />
        <NumberInput label="suppliedQty" source="suppliedQty" />
        <NumberInput label="totalSuppliedQty" source="totalSuppliedQty" />
      </SimpleForm>
    </Edit>
  );
};
