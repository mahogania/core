import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductBundleItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="uom" source="uom" />
      </SimpleForm>
    </Edit>
  );
};
