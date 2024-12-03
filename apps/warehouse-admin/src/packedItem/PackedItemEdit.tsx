import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PackedItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actual_batch_qty" source="actualBatchQty" />
        <NumberInput label="actual_qty" source="actualQty" />
        <TextInput label="batch_no" source="batchNo" />
        <NumberInput label="conversion_factor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="incoming_rate" source="incomingRate" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="ordered_qty" source="orderedQty" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="packed_qty" source="packedQty" />
        <NumberInput step={1} label="page_break" source="pageBreak" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parent_detail_docname" source="parentDetailDocname" />
        <TextInput label="parent_item" source="parentItem" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="picked_qty" source="pickedQty" />
        <TextInput label="prevdoc_doctype" source="prevdocDoctype" />
        <NumberInput label="projected_qty" source="projectedQty" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="rate" source="rate" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <TextInput label="target_warehouse" source="targetWarehouse" />
        <TextInput label="uom" source="uom" />
        <NumberInput
          step={1}
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Edit>
  );
};
