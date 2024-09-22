import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreatureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="areaId" source="areaId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="curhealth" source="curhealth" />
        <TextField label="curmana" source="curmana" />
        <TextField label="currentwaypoint" source="currentwaypoint" />
        <TextField label="equipment_id" source="equipmentId" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="map" source="map" />
        <TextField label="modelid" source="modelid" />
        <TextField label="MovementType" source="movementType" />
        <TextField label="npcflag" source="npcflag" />
        <TextField label="orientation" source="orientation" />
        <TextField label="PhaseGroup" source="phaseGroup" />
        <TextField label="PhaseId" source="phaseId" />
        <TextField label="phaseUseFlags" source="phaseUseFlags" />
        <TextField label="position_x" source="positionX" />
        <TextField label="position_y" source="positionY" />
        <TextField label="position_z" source="positionZ" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="spawnDifficulties" source="spawnDifficulties" />
        <TextField label="spawntimesecs" source="spawntimesecs" />
        <TextField label="StringId" source="stringId" />
        <TextField label="terrainSwapMap" source="terrainSwapMap" />
        <TextField label="unit_flags" source="unitFlags" />
        <TextField label="unit_flags2" source="unitFlags2" />
        <TextField label="unit_flags3" source="unitFlags3" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
        <TextField label="wander_distance" source="wanderDistance" />
        <TextField label="zoneId" source="zoneId" />
      </SimpleShowLayout>
    </Show>
  );
};
