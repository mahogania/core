import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const JobCardItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="allow_alternative_item"
          source="allowAlternativeItem"
        />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="required_qty" source="requiredQty" />
        <TextInput label="source_warehouse" source="sourceWarehouse" />
        <TextInput label="stock_uom" source="stockUom" />
        <NumberInput label="transferred_qty" source="transferredQty" />
        <TextInput label="uom" source="uom" />
      </SimpleForm>
    </Edit>
  );
};
