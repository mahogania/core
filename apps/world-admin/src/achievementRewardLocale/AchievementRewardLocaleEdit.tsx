import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AchievementRewardTitle } from "../achievementReward/AchievementRewardTitle";

export const AchievementRewardLocaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="achievementRewards"
          reference="AchievementReward"
        >
          <SelectArrayInput
            optionText={AchievementRewardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Subject" multiline source="subject" />
      </SimpleForm>
    </Edit>
  );
};
