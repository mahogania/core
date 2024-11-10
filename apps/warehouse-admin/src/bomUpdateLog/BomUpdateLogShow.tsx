import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BomUpdateLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amendedFrom" source="amendedFrom" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currentBom" source="currentBom" />
        <TextField label="currentLevel" source="currentLevel" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="errorLog" source="errorLog" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="newBom" source="newBom" />
        <TextField label="owner" source="owner" />
        <TextField label="processedBoms" source="processedBoms" />
        <TextField label="status" source="status" />
        <TextField label="updateType" source="updateType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
