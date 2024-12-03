import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestOfferRewardTitle } from "../questOfferReward/QuestOfferRewardTitle";

export const QuestOfferRewardLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questOfferReward.id"
          reference="QuestOfferReward"
          label="Quest Offer Reward"
        >
          <SelectInput optionText={QuestOfferRewardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
