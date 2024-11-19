import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SerialAndBatchEntryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SerialAndBatchEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="batch_no" source="batchNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="delivered_qty" source="deliveredQty" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incoming_rate" source="incomingRate" />
        <TextField label="is_outward" source="isOutward" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="outgoing_rate" source="outgoingRate" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qty" source="qty" />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="stock_queue" source="stockQueue" />
        <TextField
          label="stock_value_difference"
          source="stockValueDifference"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
