import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FACTION_TITLE_FIELD } from "../faction/FactionTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const PlayerFactionQuestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PlayerFactionQuests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Faction" source="faction.id" reference="Faction">
          <TextField source={FACTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quest Id" source="questId" />
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
