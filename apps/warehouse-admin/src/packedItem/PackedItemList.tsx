import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PackedItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PackedItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actual_batch_qty" source="actualBatchQty" />
        <TextField label="actual_qty" source="actualQty" />
        <TextField label="batch_no" source="batchNo" />
        <TextField label="conversion_factor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incoming_rate" source="incomingRate" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="ordered_qty" source="orderedQty" />
        <TextField label="owner" source="owner" />
        <TextField label="packed_qty" source="packedQty" />
        <TextField label="page_break" source="pageBreak" />
        <TextField label="parent" source="parent" />
        <TextField label="parent_detail_docname" source="parentDetailDocname" />
        <TextField label="parent_item" source="parentItem" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="picked_qty" source="pickedQty" />
        <TextField label="prevdoc_doctype" source="prevdocDoctype" />
        <TextField label="projected_qty" source="projectedQty" />
        <TextField label="qty" source="qty" />
        <TextField label="rate" source="rate" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="target_warehouse" source="targetWarehouse" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
