import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerCreatePropertiesPolygonVertexEdit = (
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
        <NumberInput step={1} label="Idx" source="idx" />
        <BooleanInput label="IsCustom" source="isCustom" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
        <NumberInput label="VerticeTargetX" source="verticeTargetX" />
        <NumberInput label="VerticeTargetY" source="verticeTargetY" />
        <NumberInput label="VerticeX" source="verticeX" />
        <NumberInput label="VerticeY" source="verticeY" />
      </SimpleForm>
    </Edit>
  );
};
