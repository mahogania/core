import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetValueAdjustmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetValueAdjustments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="asset" source="asset" />
        <TextField label="assetCategory" source="assetCategory" />
        <TextField label="company" source="company" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currentAssetValue" source="currentAssetValue" />
        <TextField label="date" source="date" />
        <TextField label="differenceAmount" source="differenceAmount" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="financeBook" source="financeBook" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="journalEntry" source="journalEntry" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="newAssetValue" source="newAssetValue" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
