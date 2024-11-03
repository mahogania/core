import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestOfferRewardTitle } from "../questOfferReward/QuestOfferRewardTitle";

export const QuestOfferRewardLocaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questOfferReward.id"
          reference="QuestOfferReward"
          label="Quest Offer Reward"
        >
          <SelectInput optionText={QuestOfferRewardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
