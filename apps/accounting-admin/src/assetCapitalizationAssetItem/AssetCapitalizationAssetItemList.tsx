import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetCapitalizationAssetItemList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetCapitalizationAssetItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="asset" source="asset" />
        <TextField label="asset_name" source="assetName" />
        <TextField label="asset_value" source="assetValue" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="current_asset_value" source="currentAssetValue" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="finance_book" source="financeBook" />
        <TextField label="fixed_asset_account" source="fixedAssetAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
