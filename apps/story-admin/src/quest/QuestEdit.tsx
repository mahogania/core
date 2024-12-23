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

import { AreaQuestTriggerTitle } from "../areaQuestTrigger/AreaQuestTriggerTitle";
import { EpicTitle } from "../epic/EpicTitle";
import { QuestCompletionConditionalTitle } from "../questCompletionConditional/QuestCompletionConditionalTitle";
import { QuestCueEffectTitle } from "../questCueEffect/QuestCueEffectTitle";
import { QuestDescriptionConditionalTitle } from "../questDescriptionConditional/QuestDescriptionConditionalTitle";
import { QuestDetailTitle } from "../questDetail/QuestDetailTitle";
import { QuestGreetingTitle } from "../questGreeting/QuestGreetingTitle";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";
import { UserTitle } from "../user/UserTitle";

export const QuestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="areaQuestTriggers"
          reference="AreaQuestTrigger"
        >
          <SelectArrayInput
            optionText={AreaQuestTriggerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="epic.id" reference="Epic" label="Epic">
          <SelectInput optionText={EpicTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="questCompletionConditionals"
          reference="QuestCompletionConditional"
        >
          <SelectArrayInput
            optionText={QuestCompletionConditionalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="questCueEffects.id"
          reference="QuestCueEffect"
          label="Quest Cue Effects"
        >
          <SelectInput optionText={QuestCueEffectTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="questDescriptionConditionals"
          reference="QuestDescriptionConditional"
        >
          <SelectArrayInput
            optionText={QuestDescriptionConditionalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="questDetails.id"
          reference="QuestDetail"
          label="Quest Details"
        >
          <SelectInput optionText={QuestDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questGreeting.id"
          reference="QuestGreeting"
          label="Quest Greeting"
        >
          <SelectInput optionText={QuestGreetingTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questTemplate.id"
          reference="QuestTemplate"
          label="Quest Template"
        >
          <SelectInput optionText={QuestTemplateTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
