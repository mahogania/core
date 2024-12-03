import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PosFieldShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="defaultValue" source="defaultValue" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="fieldname" source="fieldname" />
        <TextField label="fieldtype" source="fieldtype" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="label" source="label" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="options" source="options" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="readOnly" source="readOnly" />
        <TextField label="reqd" source="reqd" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
