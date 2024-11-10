import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAMEOBJECTTEMPLATE_TITLE_FIELD } from "../gameObjectTemplate/GameObjectTemplateTitle";

export const GameObjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameObjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Area Id" source="areaId" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Game Object Template"
          source="gameobjecttemplate.id"
          reference="GameObjectTemplate"
        >
          <TextField source={GAMEOBJECTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Map Id" source="mapId" />
        <TextField label="Phase Group Id" source="phaseGroupId" />
        <TextField label="Phase Id" source="phaseId" />
        <TextField label="Script" source="script" />
        <TextField label="Spawn Time" source="spawnTime" />
        <TextField label="State" source="state" />
        <TextField label="Name" source="stringId" />
        <TextField label="Transform Id" source="transformId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Version" source="version" />
        <TextField label="Zone Id" source="zoneId" />{" "}
      </Datagrid>
    </List>
  );
};
