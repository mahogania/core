import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AchievementRewardLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Subject" multiline source="subject" />
      </SimpleForm>
    </Create>
  );
};
