import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductionPlanItemList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ProductionPlanItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="bom_no" source="bomNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="include_exploded_items"
          source="includeExplodedItems"
        />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_reference" source="itemReference" />
        <TextField label="material_request" source="materialRequest" />
        <TextField label="material_request_item" source="materialRequestItem" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="ordered_qty" source="orderedQty" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="pending_qty" source="pendingQty" />
        <TextField label="planned_qty" source="plannedQty" />
        <TextField label="planned_start_date" source="plannedStartDate" />
        <TextField label="produced_qty" source="producedQty" />
        <TextField label="product_bundle_item" source="productBundleItem" />
        <TextField label="sales_order" source="salesOrder" />
        <TextField label="sales_order_item" source="salesOrderItem" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="temporary_name" source="temporaryName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
