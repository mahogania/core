import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PickListItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="batch_no" source="batchNo" />
        <NumberInput label="conversion_factor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <TextInput label="material_request" source="materialRequest" />
        <TextInput label="material_request_item" source="materialRequestItem" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="picked_qty" source="pickedQty" />
        <TextInput label="product_bundle_item" source="productBundleItem" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="sales_order" source="salesOrder" />
        <TextInput label="sales_order_item" source="salesOrderItem" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <NumberInput label="stock_qty" source="stockQty" />
        <NumberInput label="stock_reserved_qty" source="stockReservedQty" />
        <TextInput label="stock_uom" source="stockUom" />
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
