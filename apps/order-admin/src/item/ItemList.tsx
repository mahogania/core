import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Items"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="allowAlternativeItem" source="allowAlternativeItem" />
        <TextField label="autoCreateAssets" source="autoCreateAssets" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="hasVariants" source="hasVariants" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="isFixedAsset" source="isFixedAsset" />
        <TextField label="isGroupedAsset" source="isGroupedAsset" />
        <TextField label="isStockItem" source="isStockItem" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="openingStock" source="openingStock" />
        <TextField label="owner" source="owner" />
        <TextField label="standardRate" source="standardRate" />
        <TextField label="stockUom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuationRate" source="valuationRate" />{" "}
      </Datagrid>
    </List>
  );
};
