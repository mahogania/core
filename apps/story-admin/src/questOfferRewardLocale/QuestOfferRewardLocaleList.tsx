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
import { QUESTOFFERREWARD_TITLE_FIELD } from "../questOfferReward/QuestOfferRewardTitle";

export const QuestOfferRewardLocaleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestOfferRewardLocales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quest Offer Reward"
          source="questofferreward.id"
          reference="QuestOfferReward"
        >
          <TextField source={QUESTOFFERREWARD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
