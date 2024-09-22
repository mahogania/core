import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AchievementRewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ItemID" source="itemId" />
        <TextField label="MailTemplateID" source="mailTemplateId" />
        <TextField label="Sender" source="sender" />
        <TextField label="Subject" source="subject" />
        <TextField label="TitleA" source="titleA" />
        <TextField label="TitleH" source="titleH" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
