import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameObjectAddonCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="AIAnimKitID" source="aiAnimKitId" />
        <NumberInput step={1} label="guid" source="guid" />
        <NumberInput
          step={1}
          label="invisibilityType"
          source="invisibilityType"
        />
        <NumberInput
          step={1}
          label="invisibilityValue"
          source="invisibilityValue"
        />
        <NumberInput label="parent_rotation0" source="parentRotation0" />
        <NumberInput label="parent_rotation1" source="parentRotation1" />
        <NumberInput label="parent_rotation2" source="parentRotation2" />
        <NumberInput label="parent_rotation3" source="parentRotation3" />
        <NumberInput step={1} label="WorldEffectID" source="worldEffectId" />
      </SimpleForm>
    </Create>
  );
};
