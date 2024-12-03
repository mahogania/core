import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FACTION_TITLE_FIELD } from "./FactionTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { PLAYERFACTIONACHIEVEMENT_TITLE_FIELD } from "../playerFactionAchievement/PlayerFactionAchievementTitle";

export const FactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Player Faction Achievements"
          source="playerfactionachievement.id"
          reference="PlayerFactionAchievement"
        >
          <TextField source={PLAYERFACTIONACHIEVEMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PlayerFactionQuest"
          target="factionId"
          label="PlayerFactionQuests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Faction"
              source="faction.id"
              reference="Faction"
            >
              <TextField source={FACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quest Id" source="questId" />
            <TextField label="State" source="state" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PlayerFactionReputation"
          target="factionId"
          label="PlayerFactionReputations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Faction"
              source="faction.id"
              reference="Faction"
            >
              <TextField source={FACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PlayerFactionSpell"
          target="factionId"
          label="PlayerFactionSpells"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Faction"
              source="faction.id"
              reference="Faction"
            >
              <TextField source={FACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PlayerFactionTitle"
          target="factionId"
          label="PlayerFactionTitles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Faction"
              source="faction.id"
              reference="Faction"
            >
              <TextField source={FACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
