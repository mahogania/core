import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StockLedgerEntryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="actual_qty" source="actualQty" />
        <BooleanInput
          label="auto_created_serial_and_batch_bundle"
          source="autoCreatedSerialAndBatchBundle"
        />
        <TextInput label="batch_no" source="batchNo" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput
          label="dependant_sle_voucher_detail_no"
          source="dependantSleVoucherDetailNo"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="fiscal_year" source="fiscalYear" />
        <BooleanInput label="has_batch_no" source="hasBatchNo" />
        <BooleanInput label="has_serial_no" source="hasSerialNo" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="incoming_rate" source="incomingRate" />
        <BooleanInput label="is_adjustment_entry" source="isAdjustmentEntry" />
        <BooleanInput label="is_cancelled" source="isCancelled" />
        <TextInput label="item_code" source="itemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="outgoing_rate" source="outgoingRate" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <DateTimeInput label="posting_datetime" source="postingDatetime" />
        <DateTimeInput label="posting_time" source="postingTime" />
        <TextInput label="project" source="project" />
        <NumberInput
          label="qty_after_transaction"
          source="qtyAfterTransaction"
        />
        <BooleanInput label="recalculate_rate" source="recalculateRate" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <TextInput label="stock_queue" multiline source="stockQueue" />
        <TextInput label="stock_uom" source="stockUom" />
        <NumberInput label="stock_value" source="stockValue" />
        <NumberInput
          label="stock_value_difference"
          source="stockValueDifference"
        />
        <BooleanInput label="to_rename" source="toRename" />
        <NumberInput label="valuation_rate" source="valuationRate" />
        <TextInput label="voucher_detail_no" source="voucherDetailNo" />
        <TextInput label="voucher_no" source="voucherNo" />
        <TextInput label="voucher_type" source="voucherType" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Create>
  );
};
