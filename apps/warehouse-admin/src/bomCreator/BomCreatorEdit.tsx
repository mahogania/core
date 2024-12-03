import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const BomCreatorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="buyingPriceList" source="buyingPriceList" />
        <TextInput label="company" source="company" />
        <NumberInput label="conversionRate" source="conversionRate" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="defaultWarehouse" source="defaultWarehouse" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="errorLog" multiline source="errorLog" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemGroup" source="itemGroup" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="plcConversionRate" source="plcConversionRate" />
        <TextInput label="priceListCurrency" source="priceListCurrency" />
        <TextInput label="project" source="project" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="rawMaterialCost" source="rawMaterialCost" />
        <TextInput label="remarks" multiline source="remarks" />
        <TextInput label="rmCostAsPer" source="rmCostAsPer" />
        <BooleanInput
          label="setRateBasedOnWarehouse"
          source="setRateBasedOnWarehouse"
        />
        <TextInput label="status" source="status" />
        <TextInput label="uom" source="uom" />
      </SimpleForm>
    </Edit>
  );
};
