import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AchievementTitle } from "../achievement/AchievementTitle";

export const AchievementBehaviourCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="achievement.id"
          reference="Achievement"
          label="Achievement"
        >
          <SelectInput optionText={AchievementTitle} />
        </ReferenceInput>
        <TextInput label="Behaviour Name" source="behaviourName" />
      </SimpleForm>
    </Create>
  );
};
