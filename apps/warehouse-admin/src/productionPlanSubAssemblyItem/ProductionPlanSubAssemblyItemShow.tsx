import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductionPlanSubAssemblyItemShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actual_qty" source="actualQty" />
        <TextField label="bom_level" source="bomLevel" />
        <TextField label="bom_no" source="bomNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fg_warehouse" source="fgWarehouse" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="indent" source="indent" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parent_item_code" source="parentItemCode" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="production_item" source="productionItem" />
        <TextField label="production_plan_item" source="productionPlanItem" />
        <TextField label="projected_qty" source="projectedQty" />
        <TextField label="purchase_order" source="purchaseOrder" />
        <TextField label="qty" source="qty" />
        <TextField label="received_qty" source="receivedQty" />
        <TextField label="schedule_date" source="scheduleDate" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="supplier" source="supplier" />
        <TextField label="type_of_manufacturing" source="typeOfManufacturing" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wo_produced_qty" source="woProducedQty" />
      </SimpleShowLayout>
    </Show>
  );
};
