import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestTitle } from "../quest/QuestTitle";

export const QuestCompletionConditionalEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="quest.id" reference="Quest" label="Quest">
          <SelectInput optionText={QuestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
