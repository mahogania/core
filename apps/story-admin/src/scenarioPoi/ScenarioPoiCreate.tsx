import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScenarioRegionTitle } from "../scenarioRegion/ScenarioRegionTitle";

export const ScenarioPoiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <ReferenceArrayInput
          source="scenarioRegions"
          reference="ScenarioRegion"
        >
          <SelectArrayInput
            optionText={ScenarioRegionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
