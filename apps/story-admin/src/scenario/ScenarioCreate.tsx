import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AreaScenarioTriggerTitle } from "../areaScenarioTrigger/AreaScenarioTriggerTitle";
import { ScenarioRegionTitle } from "../scenarioRegion/ScenarioRegionTitle";
import { SceneTemplateTitle } from "../sceneTemplate/SceneTemplateTitle";
import { UserTitle } from "../user/UserTitle";

export const ScenarioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="areaScenarioTriggers"
          reference="AreaScenarioTrigger"
        >
          <SelectArrayInput
            optionText={AreaScenarioTriggerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="scenarioRegions.id"
          reference="ScenarioRegion"
          label="Scenario Regions"
        >
          <SelectInput optionText={ScenarioRegionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="sceneTemplate.id"
          reference="SceneTemplate"
          label="Scene Template"
        >
          <SelectInput optionText={SceneTemplateTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
