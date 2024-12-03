import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestGreetingLocaleTitle } from "../questGreetingLocale/QuestGreetingLocaleTitle";
import { QuestTitle } from "../quest/QuestTitle";

export const QuestGreetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
