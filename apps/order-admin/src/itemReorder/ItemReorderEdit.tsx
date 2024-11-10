import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ItemReorderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="material_request_type" source="materialRequestType" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="warehouse" source="warehouse" />
        <TextInput label="warehouse_group" source="warehouseGroup" />
        <NumberInput
          label="warehouse_reorder_level"
          source="warehouseReorderLevel"
        />
        <NumberInput
          label="warehouse_reorder_qty"
          source="warehouseReorderQty"
        />
      </SimpleForm>
    </Edit>
  );
};
