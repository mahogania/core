import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScenarioPoiTitle } from "../scenarioPoi/ScenarioPoiTitle";
import { ScenarioTitle } from "../scenario/ScenarioTitle";

export const ScenarioRegionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="scenarioPois.id"
          reference="ScenarioPoi"
          label="Scenario Pois"
        >
          <SelectInput optionText={ScenarioPoiTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="scenarios" reference="Scenario">
          <SelectArrayInput
            optionText={ScenarioTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
