import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BomItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField
          label="allowAlternativeItem"
          source="allowAlternativeItem"
        />
        <TextField label="amount" source="amount" />
        <TextField label="baseAmount" source="baseAmount" />
        <TextField label="baseRate" source="baseRate" />
        <TextField label="bomNo" source="bomNo" />
        <TextField label="conversionFactor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <BooleanField label="doNotExplode" source="doNotExplode" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="hasVariants" source="hasVariants" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <BooleanField
          label="includeItemInManufacturing"
          source="includeItemInManufacturing"
        />
        <BooleanField label="isStockItem" source="isStockItem" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemName" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="operation" source="operation" />
        <TextField label="originalItem" source="originalItem" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qty" source="qty" />
        <TextField label="qtyConsumedPerUnit" source="qtyConsumedPerUnit" />
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
