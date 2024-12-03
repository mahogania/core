import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PickListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <NumberInput
          step={1}
          label="consider_rejected_warehouses"
          source="considerRejectedWarehouses"
        />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customer_name" source="customerName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="for_qty" source="forQty" />
        <NumberInput
          step={1}
          label="group_same_items"
          source="groupSameItems"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignore_pricing_rule"
          source="ignorePricingRule"
        />
        <TextInput label="material_request" source="materialRequest" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_warehouse" source="parentWarehouse" />
        <NumberInput step={1} label="pick_manually" source="pickManually" />
        <NumberInput step={1} label="prompt_qty" source="promptQty" />
        <TextInput label="purpose" source="purpose" />
        <TextInput label="scan_barcode" source="scanBarcode" />
        <NumberInput step={1} label="scan_mode" source="scanMode" />
        <TextInput label="status" source="status" />
        <TextInput label="work_order" source="workOrder" />
      </SimpleForm>
    </Edit>
  );
};
