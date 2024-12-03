import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AllowedToTransactWithShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
