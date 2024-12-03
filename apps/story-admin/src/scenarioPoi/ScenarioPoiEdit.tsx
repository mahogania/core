import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScenarioRegionTitle } from "../scenarioRegion/ScenarioRegionTitle";

export const ScenarioPoiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
