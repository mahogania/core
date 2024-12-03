import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FACTION_TITLE_FIELD } from "../faction/FactionTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const PlayerFactionQuestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Faction" source="faction.id" reference="Faction">
          <TextField source={FACTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quest Id" source="questId" />
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
