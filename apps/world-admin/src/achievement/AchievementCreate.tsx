import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { AchievementBehaviourTitle } from "../achievementBehaviour/AchievementBehaviourTitle";
import { AchievementRewardTitle } from "../achievementReward/AchievementRewardTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const AchievementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="achievementBehaviours"
          reference="AchievementBehaviour"
        >
          <SelectArrayInput
            optionText={AchievementBehaviourTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="achievementRewards.id"
          reference="AchievementReward"
          label="Achievement Rewards"
        >
          <SelectInput optionText={AchievementRewardTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Count" source="count" />
        <NumberInput step={1} label="Flags" source="flags" />
        <NumberInput step={1} label="Map" source="map" />
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Points" source="points" />
        <NumberInput step={1} label="Ref Achievement" source="refAchievement" />
        <NumberInput
          step={1}
          label="Required Faction"
          source="requiredFaction"
        />
      </SimpleForm>
    </Create>
  );
};
