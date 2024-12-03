import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UomConversionFactorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="from_uom" source="fromUom" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="to_uom" source="toUom" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
