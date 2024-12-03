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

export const BomExplosionItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMExplosionItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <BooleanField
          label="includeItemInManufacturing"
          source="includeItemInManufacturing"
        />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="operation" source="operation" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qtyConsumedPerUnit" source="qtyConsumedPerUnit" />
        <TextField label="rate" source="rate" />
        <TextField label="sourceWarehouse" source="sourceWarehouse" />
        <BooleanField label="sourcedBySupplier" source="sourcedBySupplier" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
