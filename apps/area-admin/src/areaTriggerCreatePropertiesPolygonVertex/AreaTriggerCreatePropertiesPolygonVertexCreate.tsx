import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerCreatePropertiesPolygonVertexCreate = (
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
        <NumberInput step={1} label="Idx" source="idx" />
        <BooleanInput label="IsCustom" source="isCustom" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
        <NumberInput label="VerticeTargetX" source="verticeTargetX" />
        <NumberInput label="VerticeTargetY" source="verticeTargetY" />
        <NumberInput label="VerticeX" source="verticeX" />
        <NumberInput label="VerticeY" source="verticeY" />
      </SimpleForm>
    </Create>
  );
};
