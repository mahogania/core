import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AreaTriggerCreatePropertiesPolygonVertexShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="AreaTriggerCreatePropertiesId"
          source="areaTriggerCreatePropertiesId"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <BooleanField label="IsCustom" source="isCustom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
        <TextField label="VerticeTargetX" source="verticeTargetX" />
        <TextField label="VerticeTargetY" source="verticeTargetY" />
        <TextField label="VerticeX" source="verticeX" />
        <TextField label="VerticeY" source="verticeY" />
      </SimpleShowLayout>
    </Show>
  );
};
