import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AchievementScriptsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="AchievementId" source="achievementId" />
        <TextInput label="ScriptName" source="scriptName" />
      </SimpleForm>
    </Edit>
  );
};
