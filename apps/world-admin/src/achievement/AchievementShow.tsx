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

import { ACHIEVEMENT_TITLE_FIELD } from "./AchievementTitle";
import { ACHIEVEMENTREWARD_TITLE_FIELD } from "../achievementReward/AchievementRewardTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const AchievementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Points" source="points" />
        <TextField label="Ref Achievement" source="refAchievement" />
        <TextField label="Required Faction" source="requiredFaction" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AchievementBehaviour"
          target="achievementId"
          label="AchievementBehaviours"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Achievement"
              source="achievement.id"
              reference="Achievement"
            >
              <TextField source={ACHIEVEMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Behaviour Name" source="behaviourName" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
