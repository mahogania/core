import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CreatureMovementOverrideCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Chase" source="chase" />
        <NumberInput step={1} label="Flight" source="flight" />
        <NumberInput step={1} label="Ground" source="ground" />
        <NumberInput
          step={1}
          label="InteractionPauseTimer"
          source="interactionPauseTimer"
        />
        <NumberInput step={1} label="Random" source="random" />
        <NumberInput step={1} label="Rooted" source="rooted" />
        <NumberInput label="SpawnId" source="spawnId" />
        <NumberInput step={1} label="Swim" source="swim" />
      </SimpleForm>
    </Create>
  );
};
