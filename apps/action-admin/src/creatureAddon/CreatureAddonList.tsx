import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureAddonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureAddons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="aiAnimKit" source="aiAnimKit" />
        <TextField label="AnimTier" source="animTier" />
        <TextField label="auras" source="auras" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emote" source="emote" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="meleeAnimKit" source="meleeAnimKit" />
        <TextField label="mount" source="mount" />
        <TextField label="MountCreatureID" source="mountCreatureId" />
        <TextField label="movementAnimKit" source="movementAnimKit" />
        <TextField label="PathId" source="pathId" />
        <TextField label="PvPFlags" source="pvPFlags" />
        <TextField label="SheathState" source="sheathState" />
        <TextField label="StandState" source="standState" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VisFlags" source="visFlags" />
        <TextField
          label="visibilityDistanceType"
          source="visibilityDistanceType"
        />{" "}
      </Datagrid>
    </List>
  );
};
