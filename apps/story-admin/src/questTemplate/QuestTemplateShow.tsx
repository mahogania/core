import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUESTCUEEFFECT_TITLE_FIELD } from "../questCueEffect/QuestCueEffectTitle";
import { QUESTDETAIL_TITLE_FIELD } from "../questDetail/QuestDetailTitle";
import { QUESTGREETING_TITLE_FIELD } from "../questGreeting/QuestGreetingTitle";
import { QUESTTEMPLATE_TITLE_FIELD } from "./QuestTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { QUESTMAIL_TITLE_FIELD } from "../questMail/QuestMailTitle";
import { QUESTOBJECTIVE_TITLE_FIELD } from "../questObjective/QuestObjectiveTitle";
import { QUESTOFFERREWARD_TITLE_FIELD } from "../questOfferReward/QuestOfferRewardTitle";
import { QUESTPOOL_TITLE_FIELD } from "../questPool/QuestPoolTitle";
import { QUESTREQUESTITEM_TITLE_FIELD } from "../questRequestItem/QuestRequestItemTitle";
import { QUESTTEMPLATELOCALE_TITLE_FIELD } from "../questTemplateLocale/QuestTemplateLocaleTitle";

export const QuestTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quest Mails"
          source="questmail.id"
          reference="QuestMail"
        >
          <TextField source={QUESTMAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Objectives"
          source="questobjective.id"
          reference="QuestObjective"
        >
          <TextField source={QUESTOBJECTIVE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Offer Rewards"
          source="questofferreward.id"
          reference="QuestOfferReward"
        >
          <TextField source={QUESTOFFERREWARD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Pools"
          source="questpool.id"
          reference="QuestPool"
        >
          <TextField source={QUESTPOOL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Request Items"
          source="questrequestitem.id"
          reference="QuestRequestItem"
        >
          <TextField source={QUESTREQUESTITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Template Locale"
          source="questtemplatelocale.id"
          reference="QuestTemplateLocale"
        >
          <TextField source={QUESTTEMPLATELOCALE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Quest"
          target="questTemplateId"
          label="Quests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
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
