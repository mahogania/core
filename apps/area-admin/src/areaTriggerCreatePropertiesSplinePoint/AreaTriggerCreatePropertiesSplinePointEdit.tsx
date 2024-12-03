import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerCreatePropertiesSplinePointEdit = (
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
        <NumberInput label="X" source="x" />
        <NumberInput label="Y" source="y" />
        <NumberInput label="Z" source="z" />
      </SimpleForm>
    </Edit>
  );
};
