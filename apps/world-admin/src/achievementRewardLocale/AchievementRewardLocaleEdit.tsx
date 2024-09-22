import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AchievementRewardLocaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Subject" multiline source="subject" />
      </SimpleForm>
    </Edit>
  );
};
