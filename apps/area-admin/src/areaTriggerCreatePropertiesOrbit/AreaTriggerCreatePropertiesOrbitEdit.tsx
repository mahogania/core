import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerCreatePropertiesOrbitEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
