import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SerialAndBatchEntryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="batch_no" source="batchNo" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="delivered_qty" source="deliveredQty" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="incoming_rate" source="incomingRate" />
        <NumberInput step={1} label="is_outward" source="isOutward" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="outgoing_rate" source="outgoingRate" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="serial_no" source="serialNo" />
        <TextInput label="stock_queue" multiline source="stockQueue" />
        <NumberInput
          label="stock_value_difference"
          source="stockValueDifference"
        />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Edit>
  );
};
