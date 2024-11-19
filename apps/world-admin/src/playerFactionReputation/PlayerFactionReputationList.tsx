import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FACTION_TITLE_FIELD } from "../faction/FactionTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const PlayerFactionReputationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PlayerFactionReputations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Faction" source="faction.id" reference="Faction">
          <TextField source={FACTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
