import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BomScrapItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMScrapItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseRate" source="baseRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="rate" source="rate" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
