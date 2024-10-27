import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestTitle } from "../quest/QuestTitle";

export const QuestDescriptionConditionalEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="quests.id" reference="Quest" label="Quests">
          <SelectInput optionText={QuestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
