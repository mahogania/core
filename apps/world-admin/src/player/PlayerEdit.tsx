import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlayerFactionAchievementTitle } from "../playerFactionAchievement/PlayerFactionAchievementTitle";
import { AchievementTitle } from "../achievement/AchievementTitle";
import { GeneStatTitle } from "../geneStat/GeneStatTitle";
import { PlayerCraftTitle } from "../playerCraft/PlayerCraftTitle";
import { PlayerFactionQuestTitle } from "../playerFactionQuest/PlayerFactionQuestTitle";
import { PlayerFactionReputationTitle } from "../playerFactionReputation/PlayerFactionReputationTitle";
import { PlayerFactionSpellTitle } from "../playerFactionSpell/PlayerFactionSpellTitle";
import { PlayerFactionTitleTitle } from "../playerFactionTitle/PlayerFactionTitleTitle";
import { PlayerXpForLevelTitle } from "../playerXpForLevel/PlayerXpForLevelTitle";
import { ResponseTitle } from "../response/ResponseTitle";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="PlayerFactionAchievements"
          reference="PlayerFactionAchievement"
        >
          <SelectArrayInput
            optionText={PlayerFactionAchievementTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="achievements" reference="Achievement">
          <SelectArrayInput
            optionText={AchievementTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="geneStats.id"
          reference="GeneStat"
          label="Gene Stats"
        >
          <SelectInput optionText={GeneStatTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="playerCrafts" reference="PlayerCraft">
          <SelectArrayInput
            optionText={PlayerCraftTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
        <ReferenceArrayInput
          source="playerXpForLevels"
          reference="PlayerXpForLevel"
        >
          <SelectArrayInput
            optionText={PlayerXpForLevelTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="responses" reference="Response">
          <SelectArrayInput
            optionText={ResponseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
