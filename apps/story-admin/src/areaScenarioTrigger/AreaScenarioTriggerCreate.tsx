import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AreaTitle } from "../area/AreaTitle";
import { ScenarioTitle } from "../scenario/ScenarioTitle";

export const AreaScenarioTriggerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="scenario.id"
          reference="Scenario"
          label="Scenario"
        >
          <SelectInput optionText={ScenarioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
