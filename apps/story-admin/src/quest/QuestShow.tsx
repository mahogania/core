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

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { QUEST_TITLE_FIELD } from "./QuestTitle";
import { EPIC_TITLE_FIELD } from "../epic/EpicTitle";
import { QUESTCUEEFFECT_TITLE_FIELD } from "../questCueEffect/QuestCueEffectTitle";
import { QUESTDETAIL_TITLE_FIELD } from "../questDetail/QuestDetailTitle";
import { QUESTGREETING_TITLE_FIELD } from "../questGreeting/QuestGreetingTitle";
import { QUESTTEMPLATE_TITLE_FIELD } from "../questTemplate/QuestTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QuestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Epic" source="epic.id" reference="Epic">
          <TextField source={EPIC_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quest Cue Effects"
          source="questcueeffect.id"
          reference="QuestCueEffect"
        >
          <TextField source={QUESTCUEEFFECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Details"
          source="questdetail.id"
          reference="QuestDetail"
        >
          <TextField source={QUESTDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Greeting"
          source="questgreeting.id"
          reference="QuestGreeting"
        >
          <TextField source={QUESTGREETING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Template"
          source="questtemplate.id"
          reference="QuestTemplate"
        >
          <TextField source={QUESTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AreaQuestTrigger"
          target="questId"
          label="AreaQuestTriggers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Quest" source="quest.id" reference="Quest">
              <TextField source={QUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuestCompletionConditional"
          target="questId"
          label="QuestCompletionConditionals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Quest" source="quest.id" reference="Quest">
              <TextField source={QUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuestDescriptionConditional"
          target="questsId"
          label="QuestDescriptionConditionals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Quests" source="quest.id" reference="Quest">
              <TextField source={QUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
