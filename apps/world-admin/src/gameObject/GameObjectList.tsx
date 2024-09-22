import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameObjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameObjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="animprogress" source="animprogress" />
        <TextField label="areaId" source="areaId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="map" source="map" />
        <TextField label="orientation" source="orientation" />
        <TextField label="PhaseGroup" source="phaseGroup" />
        <TextField label="PhaseId" source="phaseId" />
        <TextField label="phaseUseFlags" source="phaseUseFlags" />
        <TextField label="position_x" source="positionX" />
        <TextField label="position_y" source="positionY" />
        <TextField label="position_z" source="positionZ" />
        <TextField label="rotation0" source="rotation0" />
        <TextField label="rotation1" source="rotation1" />
        <TextField label="rotation2" source="rotation2" />
        <TextField label="rotation3" source="rotation3" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="spawnDifficulties" source="spawnDifficulties" />
        <TextField label="spawntimesecs" source="spawntimesecs" />
        <TextField label="state" source="state" />
        <TextField label="StringId" source="stringId" />
        <TextField label="terrainSwapMap" source="terrainSwapMap" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
        <TextField label="zoneId" source="zoneId" />{" "}
      </Datagrid>
    </List>
  );
};
