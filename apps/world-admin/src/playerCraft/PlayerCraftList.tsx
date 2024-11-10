import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CRAFT_TITLE_FIELD } from "../craft/CraftTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const PlayerCraftList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Player Crafts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Craft" source="craft.id" reference="Craft">
          <TextField source={CRAFT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
