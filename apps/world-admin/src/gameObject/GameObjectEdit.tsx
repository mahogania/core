import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { GameObjectTemplateTitle } from "../gameObjectTemplate/GameObjectTemplateTitle";

export const GameObjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Area Id" source="areaId" />
        <ReferenceInput
          source="gameObjectTemplate.id"
          reference="GameObjectTemplate"
          label="Game Object Template"
        >
          <SelectInput optionText={GameObjectTemplateTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Map Id" source="mapId" />
        <NumberInput step={1} label="Phase Group Id" source="phaseGroupId" />
        <NumberInput step={1} label="Phase Id" source="phaseId" />
        <div />
        <DateTimeInput label="Spawn Time" source="spawnTime" />
        <NumberInput step={1} label="State" source="state" />
        <TextInput label="Name" source="stringId" />
        <TextInput label="Transform Id" source="transformId" />
        <NumberInput step={1} label="Version" source="version" />
        <NumberInput step={1} label="Zone Id" source="zoneId" />
      </SimpleForm>
    </Edit>
  );
};
