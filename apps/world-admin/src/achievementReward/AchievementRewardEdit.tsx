import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AchievementRewardLocaleTitle } from "../achievementRewardLocale/AchievementRewardLocaleTitle";
import { AchievementTitle } from "../achievement/AchievementTitle";

export const AchievementRewardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="achievementRewardLocales.id"
          reference="AchievementRewardLocale"
          label="Achievement Reward Locales"
        >
          <SelectInput optionText={AchievementRewardLocaleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="achievements" reference="Achievement">
          <SelectArrayInput
            optionText={AchievementTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Body" multiline source="body" />
        <NumberInput step={1} label="Item ID" source="itemId" />
        <NumberInput
          step={1}
          label="Mail Template ID"
          source="mailTemplateId"
        />
        <NumberInput step={1} label="Sender" source="sender" />
        <TextInput label="Subject" source="subject" />
        <NumberInput step={1} label="TitleA" source="titleA" />
        <NumberInput step={1} label="TitleH" source="titleH" />
      </SimpleForm>
    </Edit>
  );
};
