import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PickListItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="batch_no" source="batchNo" />
        <TextField label="conversion_factor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="material_request" source="materialRequest" />
        <TextField label="material_request_item" source="materialRequestItem" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="picked_qty" source="pickedQty" />
        <TextField label="product_bundle_item" source="productBundleItem" />
        <TextField label="qty" source="qty" />
        <TextField label="sales_order" source="salesOrder" />
        <TextField label="sales_order_item" source="salesOrderItem" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="stock_qty" source="stockQty" />
        <TextField label="stock_reserved_qty" source="stockReservedQty" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextField label="warehouse" source="warehouse" />
      </SimpleShowLayout>
    </Show>
  );
};
