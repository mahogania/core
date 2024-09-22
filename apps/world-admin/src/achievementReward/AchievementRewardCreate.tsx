import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AchievementRewardCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Body" multiline source="body" />
        <NumberInput step={1} label="ItemID" source="itemId" />
        <NumberInput step={1} label="MailTemplateID" source="mailTemplateId" />
        <NumberInput step={1} label="Sender" source="sender" />
        <TextInput label="Subject" source="subject" />
        <NumberInput step={1} label="TitleA" source="titleA" />
        <NumberInput step={1} label="TitleH" source="titleH" />
      </SimpleForm>
    </Create>
  );
};
