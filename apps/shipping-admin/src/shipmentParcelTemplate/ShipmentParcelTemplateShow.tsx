import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ShipmentParcelTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="length" source="length" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parcel_template_name" source="parcelTemplateName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
        <TextField label="width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
