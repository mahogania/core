import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestGreetingTitle } from "../questGreeting/QuestGreetingTitle";

export const QuestGreetingLocaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questGreeting.id"
          reference="QuestGreeting"
          label="Quest Greeting"
        >
          <SelectInput optionText={QuestGreetingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
