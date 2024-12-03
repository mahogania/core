import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const BomCreatorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="buyingPriceList" source="buyingPriceList" />
        <TextField label="company" source="company" />
        <TextField label="conversionRate" source="conversionRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="defaultWarehouse" source="defaultWarehouse" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="errorLog" source="errorLog" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="plcConversionRate" source="plcConversionRate" />
        <TextField label="priceListCurrency" source="priceListCurrency" />
        <TextField label="project" source="project" />
        <TextField label="qty" source="qty" />
        <TextField label="rawMaterialCost" source="rawMaterialCost" />
        <TextField label="remarks" source="remarks" />
        <TextField label="rmCostAsPer" source="rmCostAsPer" />
        <BooleanField
          label="setRateBasedOnWarehouse"
          source="setRateBasedOnWarehouse"
        />
        <TextField label="status" source="status" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
