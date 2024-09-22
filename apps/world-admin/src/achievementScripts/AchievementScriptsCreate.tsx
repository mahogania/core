import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AchievementScriptsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="AchievementId" source="achievementId" />
        <TextInput label="ScriptName" source="scriptName" />
      </SimpleForm>
    </Create>
  );
};
