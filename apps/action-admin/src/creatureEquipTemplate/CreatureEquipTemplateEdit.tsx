import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CreatureEquipTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="AppearanceModID1"
          source="appearanceModId1"
        />
        <NumberInput
          step={1}
          label="AppearanceModID2"
          source="appearanceModId2"
        />
        <NumberInput
          step={1}
          label="AppearanceModID3"
          source="appearanceModId3"
        />
        <NumberInput step={1} label="CreatureID" source="creatureId" />
        <NumberInput step={1} label="ItemID1" source="itemId1" />
        <NumberInput step={1} label="ItemID2" source="itemId2" />
        <NumberInput step={1} label="ItemID3" source="itemId3" />
        <NumberInput step={1} label="ItemVisual1" source="itemVisual1" />
        <NumberInput step={1} label="ItemVisual2" source="itemVisual2" />
        <NumberInput step={1} label="ItemVisual3" source="itemVisual3" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Edit>
  );
};
