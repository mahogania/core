import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ProductionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput step={1} label="combine_items" source="combineItems" />
        <NumberInput
          step={1}
          label="combine_sub_items"
          source="combineSubItems"
        />
        <TextInput label="company" source="company" />
        <NumberInput
          step={1}
          label="consider_minimum_order_qty"
          source="considerMinimumOrderQty"
        />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="for_warehouse" source="forWarehouse" />
        <DateTimeInput label="from_date" source="fromDate" />
        <DateTimeInput label="from_delivery_date" source="fromDeliveryDate" />
        <TextInput label="get_items_from" source="getItemsFrom" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignore_existing_ordered_qty"
          source="ignoreExistingOrderedQty"
        />
        <NumberInput
          step={1}
          label="include_non_stock_items"
          source="includeNonStockItems"
        />
        <NumberInput
          step={1}
          label="include_safety_stock"
          source="includeSafetyStock"
        />
        <NumberInput
          step={1}
          label="include_subcontracted_items"
          source="includeSubcontractedItems"
        />
        <TextInput label="item_code" source="itemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <TextInput label="project" source="project" />
        <TextInput label="sales_order_status" source="salesOrderStatus" />
        <NumberInput
          step={1}
          label="skip_available_sub_assembly_item"
          source="skipAvailableSubAssemblyItem"
        />
        <TextInput label="status" source="status" />
        <TextInput
          label="sub_assembly_warehouse"
          source="subAssemblyWarehouse"
        />
        <DateTimeInput label="to_date" source="toDate" />
        <DateTimeInput label="to_delivery_date" source="toDeliveryDate" />
        <NumberInput label="total_planned_qty" source="totalPlannedQty" />
        <NumberInput label="total_produced_qty" source="totalProducedQty" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Edit>
  );
};
