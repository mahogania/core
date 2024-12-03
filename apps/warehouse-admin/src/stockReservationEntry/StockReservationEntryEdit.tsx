import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const StockReservationEntryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput label="available_qty" source="availableQty" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="delivered_qty" source="deliveredQty" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput
          label="from_voucher_detail_no"
          source="fromVoucherDetailNo"
        />
        <TextInput label="from_voucher_no" source="fromVoucherNo" />
        <TextInput label="from_voucher_type" source="fromVoucherType" />
        <BooleanInput label="has_batch_no" source="hasBatchNo" />
        <BooleanInput label="has_serial_no" source="hasSerialNo" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="project" source="project" />
        <TextInput label="reservation_based_on" source="reservationBasedOn" />
        <NumberInput label="reserved_qty" source="reservedQty" />
        <TextInput label="status" source="status" />
        <TextInput label="stock_uom" source="stockUom" />
        <TextInput label="voucher_detail_no" source="voucherDetailNo" />
        <TextInput label="voucher_no" source="voucherNo" />
        <NumberInput label="voucher_qty" source="voucherQty" />
        <TextInput label="voucher_type" source="voucherType" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Edit>
  );
};
