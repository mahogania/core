import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestGreetingTitle } from "../questGreeting/QuestGreetingTitle";

export const QuestGreetingLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questGreeting.id"
          reference="QuestGreeting"
          label="Quest Greeting"
        >
          <SelectInput optionText={QuestGreetingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
