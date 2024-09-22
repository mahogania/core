import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreatureModelInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BoundingRadius" source="boundingRadius" />
        <TextField label="CombatReach" source="combatReach" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DisplayID" source="displayId" />
        <TextField
          label="DisplayID_Other_Gender"
          source="displayIdOtherGender"
        />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
      </SimpleShowLayout>
    </Show>
  );
};
