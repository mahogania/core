import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ShipmentParcelCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="height" source="height" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="length" source="length" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="weight" source="weight" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};
