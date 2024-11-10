import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QuestOfferRewardConditionalTitle } from "../questOfferRewardConditional/QuestOfferRewardConditionalTitle";
import { QuestOfferRewardLocaleTitle } from "../questOfferRewardLocale/QuestOfferRewardLocaleTitle";
import { QuestRewardItemTitle } from "../questRewardItem/QuestRewardItemTitle";
import { QuestRewardSpellTitle } from "../questRewardSpell/QuestRewardSpellTitle";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestOfferRewardCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="questOfferRewardConditionals"
          reference="QuestOfferRewardConditional"
        >
          <SelectArrayInput
            optionText={QuestOfferRewardConditionalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="questOfferRewardLocales"
          reference="QuestOfferRewardLocale"
        >
          <SelectArrayInput
            optionText={QuestOfferRewardLocaleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="questRewardItem.id"
          reference="QuestRewardItem"
          label="Quest Reward Item"
        >
          <SelectInput optionText={QuestRewardItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questRewardSpell.id"
          reference="QuestRewardSpell"
          label="Quest Reward Spell"
        >
          <SelectInput optionText={QuestRewardSpellTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="questTemplates" reference="QuestTemplate">
          <SelectArrayInput
            optionText={QuestTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
