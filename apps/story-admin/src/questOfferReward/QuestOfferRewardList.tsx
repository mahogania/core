import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUESTREWARDITEM_TITLE_FIELD } from "../questRewardItem/QuestRewardItemTitle";
import { QUESTREWARDSPELL_TITLE_FIELD } from "../questRewardSpell/QuestRewardSpellTitle";

export const QuestOfferRewardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestOfferRewards"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
