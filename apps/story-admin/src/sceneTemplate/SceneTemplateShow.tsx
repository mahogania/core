import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCENARIOREGION_TITLE_FIELD } from "../scenarioRegion/ScenarioRegionTitle";
import { SCENETEMPLATE_TITLE_FIELD } from "./SceneTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SceneTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Scene Url" source="sceneUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Scenario"
          target="sceneTemplateId"
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
