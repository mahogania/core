import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemReorderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemReorders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="material_request_type" source="materialRequestType" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="warehouse_group" source="warehouseGroup" />
        <TextField
          label="warehouse_reorder_level"
          source="warehouseReorderLevel"
        />
        <TextField label="warehouse_reorder_qty" source="warehouseReorderQty" />{" "}
      </Datagrid>
    </List>
  );
};
