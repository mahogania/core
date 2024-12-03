import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BomCreatorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMCreators"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
