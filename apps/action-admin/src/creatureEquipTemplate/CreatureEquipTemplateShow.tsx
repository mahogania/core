import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreatureEquipTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AppearanceModID1" source="appearanceModId1" />
        <TextField label="AppearanceModID2" source="appearanceModId2" />
        <TextField label="AppearanceModID3" source="appearanceModId3" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatureID" source="creatureId" />
        <TextField label="ID" source="id" />
        <TextField label="ItemID1" source="itemId1" />
        <TextField label="ItemID2" source="itemId2" />
        <TextField label="ItemID3" source="itemId3" />
        <TextField label="ItemVisual1" source="itemVisual1" />
        <TextField label="ItemVisual2" source="itemVisual2" />
        <TextField label="ItemVisual3" source="itemVisual3" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
      </SimpleShowLayout>
    </Show>
  );
};
