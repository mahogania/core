import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductionPlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ProductionPlans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="combine_items" source="combineItems" />
        <TextField label="combine_sub_items" source="combineSubItems" />
        <TextField label="company" source="company" />
        <TextField
          label="consider_minimum_order_qty"
          source="considerMinimumOrderQty"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="for_warehouse" source="forWarehouse" />
        <TextField label="from_date" source="fromDate" />
        <TextField label="from_delivery_date" source="fromDeliveryDate" />
        <TextField label="get_items_from" source="getItemsFrom" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="ignore_existing_ordered_qty"
          source="ignoreExistingOrderedQty"
        />
        <TextField
          label="include_non_stock_items"
          source="includeNonStockItems"
        />
        <TextField label="include_safety_stock" source="includeSafetyStock" />
        <TextField
          label="include_subcontracted_items"
          source="includeSubcontractedItems"
        />
        <TextField label="item_code" source="itemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="project" source="project" />
        <TextField label="sales_order_status" source="salesOrderStatus" />
        <TextField
          label="skip_available_sub_assembly_item"
          source="skipAvailableSubAssemblyItem"
        />
        <TextField label="status" source="status" />
        <TextField
          label="sub_assembly_warehouse"
          source="subAssemblyWarehouse"
        />
        <TextField label="to_date" source="toDate" />
        <TextField label="to_delivery_date" source="toDeliveryDate" />
        <TextField label="total_planned_qty" source="totalPlannedQty" />
        <TextField label="total_produced_qty" source="totalProducedQty" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
