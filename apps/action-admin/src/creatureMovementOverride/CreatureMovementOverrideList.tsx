import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureMovementOverrideList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureMovementOverrides"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Chase" source="chase" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Flight" source="flight" />
        <TextField label="Ground" source="ground" />
        <TextField label="ID" source="id" />
        <TextField
          label="InteractionPauseTimer"
          source="interactionPauseTimer"
        />
        <TextField label="Random" source="random" />
        <TextField label="Rooted" source="rooted" />
        <TextField label="SpawnId" source="spawnId" />
        <TextField label="Swim" source="swim" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
