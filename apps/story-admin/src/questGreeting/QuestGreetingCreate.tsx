import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestGreetingLocaleTitle } from "../questGreetingLocale/QuestGreetingLocaleTitle";
import { QuestTitle } from "../quest/QuestTitle";

export const QuestGreetingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="questGreetingLocales"
          reference="QuestGreetingLocale"
        >
          <SelectArrayInput
            optionText={QuestGreetingLocaleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="quests" reference="Quest">
          <SelectArrayInput
            optionText={QuestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
