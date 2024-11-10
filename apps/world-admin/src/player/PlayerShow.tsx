import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FACTION_TITLE_FIELD } from "../faction/FactionTitle";
import { PLAYER_TITLE_FIELD } from "./PlayerTitle";
import { ACHIEVEMENTREWARD_TITLE_FIELD } from "../achievementReward/AchievementRewardTitle";
import { CRAFT_TITLE_FIELD } from "../craft/CraftTitle";
import { CHOICE_TITLE_FIELD } from "../choice/ChoiceTitle";
import { RESPONSELOCALE_TITLE_FIELD } from "../responseLocale/ResponseLocaleTitle";
import { GENESTAT_TITLE_FIELD } from "../geneStat/GeneStatTitle";

export const PlayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Gene Stats"
          source="genestat.id"
          reference="GeneStat"
        >
          <TextField source={GENESTAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PlayerFactionAchievement"
          target="playerId"
          label="PlayerFactionAchievements"
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
          reference="Achievement"
          target="playerId"
          label="Achievements"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Achievement Rewards"
              source="achievementreward.id"
              reference="AchievementReward"
            >
              <TextField source={ACHIEVEMENTREWARD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Count" source="count" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Flags" source="flags" />
            <TextField label="ID" source="id" />
            <TextField label="Map" source="map" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Points" source="points" />
            <TextField label="Ref Achievement" source="refAchievement" />
            <TextField label="Required Faction" source="requiredFaction" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PlayerCraft"
          target="playerId"
          label="Player Crafts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Craft" source="craft.id" reference="Craft">
              <TextField source={CRAFT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
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
          reference="PlayerFactionQuest"
          target="playerId"
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
          target="playerId"
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
          target="playerId"
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
          target="playerId"
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
        <ReferenceManyField
          reference="PlayerXpForLevel"
          target="playerId"
          label="PlayerXpForLevels"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Players"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Response"
          target="playerId"
          label="Responses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Choice"
              source="choice.id"
              reference="Choice"
            >
              <TextField source={CHOICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Response Locales"
              source="responselocale.id"
              reference="ResponseLocale"
            >
              <TextField source={RESPONSELOCALE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
