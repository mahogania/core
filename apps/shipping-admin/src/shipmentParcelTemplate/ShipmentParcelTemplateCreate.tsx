import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ShipmentParcelTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="height" source="height" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="length" source="length" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parcel_template_name" source="parcelTemplateName" />
        <NumberInput label="weight" source="weight" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};
