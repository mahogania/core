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

import { AREA_TITLE_FIELD } from "./AreaTitle";
import { QUEST_TITLE_FIELD } from "../quest/QuestTitle";
import { SCENARIO_TITLE_FIELD } from "../scenario/ScenarioTitle";
import { PORTAL_TITLE_FIELD } from "../portal/PortalTitle";

export const AreaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AreaQuestTrigger"
          target="areaId"
          label="AreaQuestTriggers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Quest" source="quest.id" reference="Quest">
              <TextField source={QUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AreaScenarioTrigger"
          target="areaId"
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
        <ReferenceManyField
          reference="AreaTeleportTrigger"
          target="areaId"
          label="AreaTeleportTriggers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Portal"
              source="portal.id"
              reference="Portal"
            >
              <TextField source={PORTAL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
