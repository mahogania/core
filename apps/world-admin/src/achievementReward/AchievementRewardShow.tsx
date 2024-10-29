import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACHIEVEMENTREWARD_TITLE_FIELD } from "./AchievementRewardTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { ACHIEVEMENTREWARDLOCALE_TITLE_FIELD } from "../achievementRewardLocale/AchievementRewardLocaleTitle";

export const AchievementRewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Achievement Reward Locales"
          source="achievementrewardlocale.id"
          reference="AchievementRewardLocale"
        >
          <TextField source={ACHIEVEMENTREWARDLOCALE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Item ID" source="itemId" />
        <TextField label="Mail Template ID" source="mailTemplateId" />
        <TextField label="Sender" source="sender" />
        <TextField label="Subject" source="subject" />
        <TextField label="TitleA" source="titleA" />
        <TextField label="TitleH" source="titleH" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Achievement"
          target="achievementRewardsId"
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
      </SimpleShowLayout>
    </Show>
  );
};
