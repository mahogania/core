import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerCreatePropertiesOrbitCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="AreaTriggerCreatePropertiesId"
          source="areaTriggerCreatePropertiesId"
        />
        <NumberInput label="BlendFromRadius" source="blendFromRadius" />
        <BooleanInput label="CanLoop" source="canLoop" />
        <NumberInput label="CircleRadius" source="circleRadius" />
        <BooleanInput label="CounterClockwise" source="counterClockwise" />
        <NumberInput label="InitialAngle" source="initialAngle" />
        <BooleanInput label="IsCustom" source="isCustom" />
        <NumberInput step={1} label="StartDelay" source="startDelay" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
        <NumberInput label="ZOffset" source="zOffset" />
      </SimpleForm>
    </Create>
  );
};
