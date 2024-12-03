import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestTitle } from "../quest/QuestTitle";

export const QuestDescriptionConditionalCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="quests.id" reference="Quest" label="Quests">
          <SelectInput optionText={QuestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
