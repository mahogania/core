import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const AreaTriggerCreatePropertiesOrbitShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="AreaTriggerCreatePropertiesId"
          source="areaTriggerCreatePropertiesId"
        />
        <TextField label="BlendFromRadius" source="blendFromRadius" />
        <BooleanField label="CanLoop" source="canLoop" />
        <TextField label="CircleRadius" source="circleRadius" />
        <BooleanField label="CounterClockwise" source="counterClockwise" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="InitialAngle" source="initialAngle" />
        <BooleanField label="IsCustom" source="isCustom" />
        <TextField label="StartDelay" source="startDelay" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
        <TextField label="ZOffset" source="zOffset" />
      </SimpleShowLayout>
    </Show>
  );
};
