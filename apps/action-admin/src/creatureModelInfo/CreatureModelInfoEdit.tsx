import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CreatureModelInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
