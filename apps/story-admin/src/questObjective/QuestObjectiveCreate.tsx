import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestObjectiveCompletionEffectTitle } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffectTitle";
import { QuestObjectiveLocaleTitle } from "../questObjectiveLocale/QuestObjectiveLocaleTitle";
import { QuestRegionTitle } from "../questRegion/QuestRegionTitle";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestObjectiveCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questObjectiveCompletionEffects.id"
          reference="QuestObjectiveCompletionEffect"
          label="Quest Objective Completion Effects"
        >
          <SelectInput optionText={QuestObjectiveCompletionEffectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questObjectiveLocales.id"
          reference="QuestObjectiveLocale"
          label="Quest Objective Locales"
        >
          <SelectInput optionText={QuestObjectiveLocaleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questPois.id"
          reference="QuestRegion"
          label="Quest Pois"
        >
          <SelectInput optionText={QuestRegionTitle} />
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
