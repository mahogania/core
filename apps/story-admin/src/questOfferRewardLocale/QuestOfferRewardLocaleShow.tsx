import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUESTOFFERREWARD_TITLE_FIELD } from "../questOfferReward/QuestOfferRewardTitle";

export const QuestOfferRewardLocaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quest Offer Reward"
          source="questofferreward.id"
          reference="QuestOfferReward"
        >
          <TextField source={QUESTOFFERREWARD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
