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

import { QUESTMAIL_TITLE_FIELD } from "../questMail/QuestMailTitle";
import { QUESTOBJECTIVE_TITLE_FIELD } from "../questObjective/QuestObjectiveTitle";
import { QUESTOFFERREWARD_TITLE_FIELD } from "../questOfferReward/QuestOfferRewardTitle";
import { QUESTPOOL_TITLE_FIELD } from "../questPool/QuestPoolTitle";
import { QUESTREQUESTITEM_TITLE_FIELD } from "../questRequestItem/QuestRequestItemTitle";
import { QUESTTEMPLATELOCALE_TITLE_FIELD } from "./QuestTemplateLocaleTitle";

export const QuestTemplateLocaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestTemplate"
          target="questTemplateLocaleId"
          label="QuestTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
