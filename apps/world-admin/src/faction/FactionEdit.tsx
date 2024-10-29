import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerFactionAchievementTitle } from "../playerFactionAchievement/PlayerFactionAchievementTitle";
import { PlayerFactionQuestTitle } from "../playerFactionQuest/PlayerFactionQuestTitle";
import { PlayerFactionReputationTitle } from "../playerFactionReputation/PlayerFactionReputationTitle";
import { PlayerFactionSpellTitle } from "../playerFactionSpell/PlayerFactionSpellTitle";
import { PlayerFactionTitleTitle } from "../playerFactionTitle/PlayerFactionTitleTitle";

export const FactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="playerFactionAchievements.id"
          reference="PlayerFactionAchievement"
          label="Player Faction Achievements"
        >
          <SelectInput optionText={PlayerFactionAchievementTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="playerFactionQuests"
          reference="PlayerFactionQuest"
        >
          <SelectArrayInput
            optionText={PlayerFactionQuestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="playerFactionReputations"
          reference="PlayerFactionReputation"
        >
          <SelectArrayInput
            optionText={PlayerFactionReputationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="playerFactionSpells"
          reference="PlayerFactionSpell"
        >
          <SelectArrayInput
            optionText={PlayerFactionSpellTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="playerFactionTitles"
          reference="PlayerFactionTitle"
        >
          <SelectArrayInput
            optionText={PlayerFactionTitleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
