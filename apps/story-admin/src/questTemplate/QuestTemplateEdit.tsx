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

import { QuestMailTitle } from "../questMail/QuestMailTitle";
import { QuestObjectiveTitle } from "../questObjective/QuestObjectiveTitle";
import { QuestOfferRewardTitle } from "../questOfferReward/QuestOfferRewardTitle";
import { QuestPoolTitle } from "../questPool/QuestPoolTitle";
import { QuestRequestItemTitle } from "../questRequestItem/QuestRequestItemTitle";
import { QuestTemplateLocaleTitle } from "../questTemplateLocale/QuestTemplateLocaleTitle";
import { QuestTitle } from "../quest/QuestTitle";

export const QuestTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questMails.id"
          reference="QuestMail"
          label="Quest Mails"
        >
          <SelectInput optionText={QuestMailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questObjectives.id"
          reference="QuestObjective"
          label="Quest Objectives"
        >
          <SelectInput optionText={QuestObjectiveTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questOfferRewards.id"
          reference="QuestOfferReward"
          label="Quest Offer Rewards"
        >
          <SelectInput optionText={QuestOfferRewardTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questPools.id"
          reference="QuestPool"
          label="Quest Pools"
        >
          <SelectInput optionText={QuestPoolTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questRequestItems.id"
          reference="QuestRequestItem"
          label="Quest Request Items"
        >
          <SelectInput optionText={QuestRequestItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questTemplateLocale.id"
          reference="QuestTemplateLocale"
          label="Quest Template Locale"
        >
          <SelectInput optionText={QuestTemplateLocaleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="quests" reference="Quest">
          <SelectArrayInput
            optionText={QuestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
