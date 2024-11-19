import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const SerialAndBatchBundleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput label="avg_rate" source="avgRate" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="has_batch_no" source="hasBatchNo" />
        <NumberInput step={1} label="has_serial_no" source="hasSerialNo" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="is_cancelled" source="isCancelled" />
        <NumberInput step={1} label="is_rejected" source="isRejected" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <DateTimeInput label="posting_time" source="postingTime" />
        <TextInput label="returned_against" source="returnedAgainst" />
        <NumberInput label="total_amount" source="totalAmount" />
        <NumberInput label="total_qty" source="totalQty" />
        <TextInput label="type_of_transaction" source="typeOfTransaction" />
        <TextInput label="voucher_detail_no" source="voucherDetailNo" />
        <TextInput label="voucher_no" source="voucherNo" />
        <TextInput label="voucher_type" source="voucherType" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Create>
  );
};
