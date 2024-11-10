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

import { QUESTREWARDITEM_TITLE_FIELD } from "./QuestRewardItemTitle";
import { QUESTREWARDSPELL_TITLE_FIELD } from "../questRewardSpell/QuestRewardSpellTitle";

export const QuestRewardItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestOfferReward"
          target="questRewardItemId"
          label="QuestOfferRewards"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Quest Reward Item"
              source="questrewarditem.id"
              reference="QuestRewardItem"
            >
              <TextField source={QUESTREWARDITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Quest Reward Spell"
              source="questrewardspell.id"
              reference="QuestRewardSpell"
            >
              <TextField source={QUESTREWARDSPELL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
