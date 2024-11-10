import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACHIEVEMENTREWARDLOCALE_TITLE_FIELD } from "./AchievementRewardLocaleTitle";

export const AchievementRewardLocaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Locale" source="locale" />
        <TextField label="Subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AchievementReward"
          target="achievementRewardLocalesId"
          label="AchievementRewards"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Achievement Reward Locales"
              source="achievementrewardlocale.id"
              reference="AchievementRewardLocale"
            >
              <TextField source={ACHIEVEMENTREWARDLOCALE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Body" source="body" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Item ID" source="itemId" />
            <TextField label="Mail Template ID" source="mailTemplateId" />
            <TextField label="Sender" source="sender" />
            <TextField label="Subject" source="subject" />
            <TextField label="TitleA" source="titleA" />
            <TextField label="TitleH" source="titleH" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
