import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CreatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="areaId" source="areaId" />
        <NumberInput step={1} label="curhealth" source="curhealth" />
        <NumberInput step={1} label="curmana" source="curmana" />
        <NumberInput
          step={1}
          label="currentwaypoint"
          source="currentwaypoint"
        />
        <NumberInput step={1} label="equipment_id" source="equipmentId" />
        <NumberInput label="guid" source="guid" />
        <NumberInput step={1} label="map" source="map" />
        <NumberInput step={1} label="modelid" source="modelid" />
        <NumberInput step={1} label="MovementType" source="movementType" />
        <NumberInput label="npcflag" source="npcflag" />
        <NumberInput label="orientation" source="orientation" />
        <NumberInput step={1} label="PhaseGroup" source="phaseGroup" />
        <NumberInput step={1} label="PhaseId" source="phaseId" />
        <NumberInput step={1} label="phaseUseFlags" source="phaseUseFlags" />
        <NumberInput label="position_x" source="positionX" />
        <NumberInput label="position_y" source="positionY" />
        <NumberInput label="position_z" source="positionZ" />
        <TextInput label="ScriptName" source="scriptName" />
        <TextInput label="spawnDifficulties" source="spawnDifficulties" />
        <NumberInput step={1} label="spawntimesecs" source="spawntimesecs" />
        <TextInput label="StringId" source="stringId" />
        <NumberInput step={1} label="terrainSwapMap" source="terrainSwapMap" />
        <NumberInput step={1} label="unit_flags" source="unitFlags" />
        <NumberInput step={1} label="unit_flags2" source="unitFlags2" />
        <NumberInput step={1} label="unit_flags3" source="unitFlags3" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
        <NumberInput label="wander_distance" source="wanderDistance" />
        <NumberInput step={1} label="zoneId" source="zoneId" />
      </SimpleForm>
    </Create>
  );
};
