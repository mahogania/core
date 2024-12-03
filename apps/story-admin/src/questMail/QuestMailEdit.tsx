import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestMailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Decription" source="decription" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="questTemplates" reference="QuestTemplate">
          <SelectArrayInput
            optionText={QuestTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
