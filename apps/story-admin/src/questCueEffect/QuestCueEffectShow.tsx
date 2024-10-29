import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EPIC_TITLE_FIELD } from "../epic/EpicTitle";
import { QUESTCUEEFFECT_TITLE_FIELD } from "./QuestCueEffectTitle";
import { QUESTDETAIL_TITLE_FIELD } from "../questDetail/QuestDetailTitle";
import { QUESTGREETING_TITLE_FIELD } from "../questGreeting/QuestGreetingTitle";
import { QUESTTEMPLATE_TITLE_FIELD } from "../questTemplate/QuestTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QuestCueEffectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Quest"
          target="questCueEffectsId"
          label="Quests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
