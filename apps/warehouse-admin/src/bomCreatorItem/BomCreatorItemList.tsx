import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BomCreatorItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMCreatorItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseRate" source="baseRate" />
        <BooleanField label="bomCreated" source="bomCreated" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <BooleanField label="doNotExplode" source="doNotExplode" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fgItem" source="fgItem" />
        <TextField label="fgReferenceId" source="fgReferenceId" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="instruction" source="instruction" />
        <BooleanField label="isExpandable" source="isExpandable" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemGroup" source="itemGroup" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentRowNo" source="parentRowNo" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qty" source="qty" />
        <TextField label="rate" source="rate" />
        <TextField label="sourceWarehouse" source="sourceWarehouse" />
        <BooleanField label="sourcedBySupplier" source="sourcedBySupplier" />
        <TextField label="stockQty" source="stockQty" />
        <TextField label="stockUom" source="stockUom" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
