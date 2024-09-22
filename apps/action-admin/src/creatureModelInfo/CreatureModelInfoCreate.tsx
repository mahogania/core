import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CreatureModelInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="BoundingRadius" source="boundingRadius" />
        <NumberInput label="CombatReach" source="combatReach" />
        <NumberInput step={1} label="DisplayID" source="displayId" />
        <NumberInput
          step={1}
          label="DisplayID_Other_Gender"
          source="displayIdOtherGender"
        />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Create>
  );
};
