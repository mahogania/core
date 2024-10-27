import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const GameObjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Area Id" source="areaId" />
        <NumberInput step={1} label="Map Id" source="mapId" />
        <NumberInput step={1} label="Phase Group Id" source="phaseGroupId" />
        <NumberInput step={1} label="Phase Id" source="phaseId" />
        <TextInput label="Position X" source="positionX" />
        <TextInput label="Position Y" source="positionY" />
        <TextInput label="Position Z" source="positionZ" />
        <TextInput label="Rotation W" source="rotationW" />
        <TextInput label="Rotation X" source="rotationX" />
        <TextInput label="Rotation Y" source="rotationY" />
        <TextInput label="Rotation Z" source="rotationZ" />
        <div />
        <DateTimeInput label="Spawn Time" source="spawnTime" />
        <NumberInput step={1} label="State" source="state" />
        <TextInput label="Name" source="stringId" />
        <NumberInput step={1} label="Version" source="version" />
        <NumberInput step={1} label="Zone Id" source="zoneId" />
      </SimpleForm>
    </Edit>
  );
};
