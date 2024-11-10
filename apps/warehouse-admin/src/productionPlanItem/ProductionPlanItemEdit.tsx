import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ProductionPlanItemEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bom_no" source="bomNo" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="include_exploded_items"
          source="includeExplodedItems"
        />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_reference" source="itemReference" />
        <TextInput label="material_request" source="materialRequest" />
        <TextInput label="material_request_item" source="materialRequestItem" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="ordered_qty" source="orderedQty" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="pending_qty" source="pendingQty" />
        <NumberInput label="planned_qty" source="plannedQty" />
        <DateTimeInput label="planned_start_date" source="plannedStartDate" />
        <NumberInput label="produced_qty" source="producedQty" />
        <TextInput label="product_bundle_item" source="productBundleItem" />
        <TextInput label="sales_order" source="salesOrder" />
        <TextInput label="sales_order_item" source="salesOrderItem" />
        <TextInput label="stock_uom" source="stockUom" />
        <TextInput label="temporary_name" source="temporaryName" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Edit>
  );
};
