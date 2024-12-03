import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobCardItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"JobCardItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="allow_alternative_item"
          source="allowAlternativeItem"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="required_qty" source="requiredQty" />
        <TextField label="source_warehouse" source="sourceWarehouse" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="transferred_qty" source="transferredQty" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
