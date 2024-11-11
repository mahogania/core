import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UomConversionFactorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
