import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScenarioTitle } from "../scenario/ScenarioTitle";

export const SceneTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="scenarios" reference="Scenario">
          <SelectArrayInput
            optionText={ScenarioTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Scene Url" source="sceneUrl" />
      </SimpleForm>
    </Edit>
  );
};
