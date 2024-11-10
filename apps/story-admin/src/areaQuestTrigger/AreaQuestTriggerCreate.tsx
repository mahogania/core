import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AreaTitle } from "../area/AreaTitle";
import { QuestTitle } from "../quest/QuestTitle";

export const AreaQuestTriggerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <ReferenceInput source="quest.id" reference="Quest" label="Quest">
          <SelectInput optionText={QuestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
