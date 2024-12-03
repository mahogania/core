import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const StockLedgerEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actual_qty" source="actualQty" />
        <BooleanField
          label="auto_created_serial_and_batch_bundle"
          source="autoCreatedSerialAndBatchBundle"
        />
        <TextField label="batch_no" source="batchNo" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField
          label="dependant_sle_voucher_detail_no"
          source="dependantSleVoucherDetailNo"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fiscal_year" source="fiscalYear" />
        <BooleanField label="has_batch_no" source="hasBatchNo" />
        <BooleanField label="has_serial_no" source="hasSerialNo" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incoming_rate" source="incomingRate" />
        <BooleanField label="is_adjustment_entry" source="isAdjustmentEntry" />
        <BooleanField label="is_cancelled" source="isCancelled" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="outgoing_rate" source="outgoingRate" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="posting_datetime" source="postingDatetime" />
        <TextField label="posting_time" source="postingTime" />
        <TextField label="project" source="project" />
        <TextField label="qty_after_transaction" source="qtyAfterTransaction" />
        <BooleanField label="recalculate_rate" source="recalculateRate" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="stock_queue" source="stockQueue" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="stock_value" source="stockValue" />
        <TextField
          label="stock_value_difference"
          source="stockValueDifference"
        />
        <BooleanField label="to_rename" source="toRename" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuation_rate" source="valuationRate" />
        <TextField label="voucher_detail_no" source="voucherDetailNo" />
        <TextField label="voucher_no" source="voucherNo" />
        <TextField label="voucher_type" source="voucherType" />
        <TextField label="warehouse" source="warehouse" />
      </SimpleShowLayout>
    </Show>
  );
};
