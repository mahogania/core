import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { SCENARIO_TITLE_FIELD } from "./ScenarioTitle";
import { SCENARIOREGION_TITLE_FIELD } from "../scenarioRegion/ScenarioRegionTitle";
import { SCENETEMPLATE_TITLE_FIELD } from "../sceneTemplate/SceneTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ScenarioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Scenario Regions"
          source="scenarioregion.id"
          reference="ScenarioRegion"
        >
          <TextField source={SCENARIOREGION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Scene Template"
          source="scenetemplate.id"
          reference="SceneTemplate"
        >
          <TextField source={SCENETEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AreaScenarioTrigger"
          target="scenarioId"
          label="AreaScenarioTriggers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Scenario"
              source="scenario.id"
              reference="Scenario"
            >
              <TextField source={SCENARIO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
