import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AreaTitle } from "../area/AreaTitle";
import { QuestTitle } from "../quest/QuestTitle";

export const AreaQuestTriggerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <ReferenceInput source="quest.id" reference="Quest" label="Quest">
          <SelectInput optionText={QuestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
