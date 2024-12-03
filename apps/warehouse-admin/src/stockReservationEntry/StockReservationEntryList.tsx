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

export const StockReservationEntryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StockReservationEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="available_qty" source="availableQty" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="delivered_qty" source="deliveredQty" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="from_voucher_detail_no"
          source="fromVoucherDetailNo"
        />
        <TextField label="from_voucher_no" source="fromVoucherNo" />
        <TextField label="from_voucher_type" source="fromVoucherType" />
        <BooleanField label="has_batch_no" source="hasBatchNo" />
        <BooleanField label="has_serial_no" source="hasSerialNo" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="project" source="project" />
        <TextField label="reservation_based_on" source="reservationBasedOn" />
        <TextField label="reserved_qty" source="reservedQty" />
        <TextField label="status" source="status" />
        <TextField label="stock_uom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voucher_detail_no" source="voucherDetailNo" />
        <TextField label="voucher_no" source="voucherNo" />
        <TextField label="voucher_qty" source="voucherQty" />
        <TextField label="voucher_type" source="voucherType" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
