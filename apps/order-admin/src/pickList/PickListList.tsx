import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PickListList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PickLists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="company" source="company" />
        <TextField
          label="consider_rejected_warehouses"
          source="considerRejectedWarehouses"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="for_qty" source="forQty" />
        <TextField label="group_same_items" source="groupSameItems" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ignore_pricing_rule" source="ignorePricingRule" />
        <TextField label="material_request" source="materialRequest" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_warehouse" source="parentWarehouse" />
        <TextField label="pick_manually" source="pickManually" />
        <TextField label="prompt_qty" source="promptQty" />
        <TextField label="purpose" source="purpose" />
        <TextField label="scan_barcode" source="scanBarcode" />
        <TextField label="scan_mode" source="scanMode" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="work_order" source="workOrder" />{" "}
      </Datagrid>
    </List>
  );
};
