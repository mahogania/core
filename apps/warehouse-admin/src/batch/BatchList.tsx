import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BatchList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Batches"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="batchId" source="batchId" />
        <TextField label="batchQty" source="batchQty" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="item" source="item" />
        <TextField label="itemName" source="itemName" />
        <TextField label="manufacturingDate" source="manufacturingDate" />
        <TextField label="owner" source="owner" />
        <TextField label="parentBatch" source="parentBatch" />
        <TextField label="producedQty" source="producedQty" />
        <TextField label="qtyToProduce" source="qtyToProduce" />
        <TextField label="referenceDoctype" source="referenceDoctype" />
        <TextField label="referenceName" source="referenceName" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="supplier" source="supplier" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="useBatchwiseValuation"
          source="useBatchwiseValuation"
        />{" "}
      </Datagrid>
    </List>
  );
};
