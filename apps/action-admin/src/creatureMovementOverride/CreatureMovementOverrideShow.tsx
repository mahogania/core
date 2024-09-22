import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreatureMovementOverrideShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Chase" source="chase" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Flight" source="flight" />
        <TextField label="Ground" source="ground" />
        <TextField label="ID" source="id" />
        <TextField
          label="InteractionPauseTimer"
          source="interactionPauseTimer"
        />
        <TextField label="Random" source="random" />
        <TextField label="Rooted" source="rooted" />
        <TextField label="SpawnId" source="spawnId" />
        <TextField label="Swim" source="swim" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
