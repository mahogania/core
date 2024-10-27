import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GameObjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Area Id" source="areaId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Map Id" source="mapId" />
        <TextField label="Phase Group Id" source="phaseGroupId" />
        <TextField label="Phase Id" source="phaseId" />
        <TextField label="Position X" source="positionX" />
        <TextField label="Position Y" source="positionY" />
        <TextField label="Position Z" source="positionZ" />
        <TextField label="Rotation W" source="rotationW" />
        <TextField label="Rotation X" source="rotationX" />
        <TextField label="Rotation Y" source="rotationY" />
        <TextField label="Rotation Z" source="rotationZ" />
        <TextField label="Script" source="script" />
        <TextField label="Spawn Time" source="spawnTime" />
        <TextField label="State" source="state" />
        <TextField label="Name" source="stringId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Version" source="version" />
        <TextField label="Zone Id" source="zoneId" />
      </SimpleShowLayout>
    </Show>
  );
};
