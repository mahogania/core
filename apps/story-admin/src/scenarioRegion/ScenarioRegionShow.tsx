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

import { SCENARIOREGION_TITLE_FIELD } from "./ScenarioRegionTitle";
import { SCENETEMPLATE_TITLE_FIELD } from "../sceneTemplate/SceneTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SCENARIOPOI_TITLE_FIELD } from "../scenarioPoi/ScenarioPoiTitle";

export const ScenarioRegionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Scenario Pois"
          source="scenariopoi.id"
          reference="ScenarioPoi"
        >
          <TextField source={SCENARIOPOI_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Scenario"
          target="scenarioRegionsId"
          label="Scenarios"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
