import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PurchaseOrderItemSuppliedList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PurchaseOrderItemSupplieds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <TextField label="bomDetailNo" source="bomDetailNo" />
        <TextField label="consumedQty" source="consumedQty" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="mainItemCode" source="mainItemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="rate" source="rate" />
        <TextField label="referenceName" source="referenceName" />
        <TextField label="requiredQty" source="requiredQty" />
        <TextField label="reserveWarehouse" source="reserveWarehouse" />
        <TextField label="returnedQty" source="returnedQty" />
        <TextField label="rmItemCode" source="rmItemCode" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="suppliedQty" source="suppliedQty" />
        <TextField label="totalSuppliedQty" source="totalSuppliedQty" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
