import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACHIEVEMENTREWARDLOCALE_TITLE_FIELD } from "../achievementRewardLocale/AchievementRewardLocaleTitle";

export const AchievementRewardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AchievementRewards"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
