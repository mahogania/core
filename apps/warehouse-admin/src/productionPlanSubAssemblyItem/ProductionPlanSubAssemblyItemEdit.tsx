import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProductionPlanSubAssemblyItemEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actual_qty" source="actualQty" />
        <NumberInput step={1} label="bom_level" source="bomLevel" />
        <TextInput label="bom_no" source="bomNo" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="fg_warehouse" source="fgWarehouse" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="indent" source="indent" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parent_item_code" source="parentItemCode" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="production_item" source="productionItem" />
        <TextInput label="production_plan_item" source="productionPlanItem" />
        <NumberInput label="projected_qty" source="projectedQty" />
        <TextInput label="purchase_order" source="purchaseOrder" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="received_qty" source="receivedQty" />
        <DateTimeInput label="schedule_date" source="scheduleDate" />
        <TextInput label="stock_uom" source="stockUom" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="type_of_manufacturing" source="typeOfManufacturing" />
        <TextInput label="uom" source="uom" />
        <NumberInput label="wo_produced_qty" source="woProducedQty" />
      </SimpleForm>
    </Edit>
  );
};
