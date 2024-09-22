import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GameObjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="animprogress" source="animprogress" />
        <NumberInput step={1} label="areaId" source="areaId" />
        <NumberInput step={1} label="guid" source="guid" />
        <NumberInput step={1} label="map" source="map" />
        <NumberInput label="orientation" source="orientation" />
        <NumberInput step={1} label="PhaseGroup" source="phaseGroup" />
        <NumberInput step={1} label="PhaseId" source="phaseId" />
        <NumberInput step={1} label="phaseUseFlags" source="phaseUseFlags" />
        <NumberInput label="position_x" source="positionX" />
        <NumberInput label="position_y" source="positionY" />
        <NumberInput label="position_z" source="positionZ" />
        <NumberInput label="rotation0" source="rotation0" />
        <NumberInput label="rotation1" source="rotation1" />
        <NumberInput label="rotation2" source="rotation2" />
        <NumberInput label="rotation3" source="rotation3" />
        <TextInput label="ScriptName" source="scriptName" />
        <TextInput label="spawnDifficulties" source="spawnDifficulties" />
        <NumberInput step={1} label="spawntimesecs" source="spawntimesecs" />
        <NumberInput step={1} label="state" source="state" />
        <TextInput label="StringId" source="stringId" />
        <NumberInput step={1} label="terrainSwapMap" source="terrainSwapMap" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
        <NumberInput step={1} label="zoneId" source="zoneId" />
      </SimpleForm>
    </Edit>
  );
};
