import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AchievementTitle } from "../achievement/AchievementTitle";

export const AchievementBehaviourEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
