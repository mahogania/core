import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetCapitalizationServiceItemList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetCapitalizationServiceItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actualQty" source="actualQty" />
        <TextField label="amount" source="amount" />
        <TextField label="batchNo" source="batchNo" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expense_account" source="expenseAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qty" source="qty" />
        <TextField label="rate" source="rate" />
        <TextField label="serialAndBatchBundle" source="serialAndBatchBundle" />
        <TextField label="serialNo" source="serialNo" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="useSerialBatchFields" source="useSerialBatchFields" />
        <TextField label="valuationRate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
