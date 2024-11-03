import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SCENARIOREGION_TITLE_FIELD } from "../scenarioRegion/ScenarioRegionTitle";
import { SCENETEMPLATE_TITLE_FIELD } from "../sceneTemplate/SceneTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ScenarioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Scenarios"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
