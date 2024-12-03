import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SerialAndBatchBundleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SerialAndBatchBundles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="avg_rate" source="avgRate" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="has_batch_no" source="hasBatchNo" />
        <TextField label="has_serial_no" source="hasSerialNo" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_cancelled" source="isCancelled" />
        <TextField label="is_rejected" source="isRejected" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="posting_time" source="postingTime" />
        <TextField label="returned_against" source="returnedAgainst" />
        <TextField label="total_amount" source="totalAmount" />
        <TextField label="total_qty" source="totalQty" />
        <TextField label="type_of_transaction" source="typeOfTransaction" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voucher_detail_no" source="voucherDetailNo" />
        <TextField label="voucher_no" source="voucherNo" />
        <TextField label="voucher_type" source="voucherType" />
        <TextField label="warehouse" source="warehouse" />{" "}
      </Datagrid>
    </List>
  );
};
