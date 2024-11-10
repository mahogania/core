import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CRAFT_TITLE_FIELD } from "./CraftTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const CraftShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CraftLevelStat"
          target="craftId"
          label="CraftLevelStats"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Craft" source="craft.id" reference="Craft">
              <TextField source={CRAFT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Level" source="level" />
            <TextField label="Stat" source="stat" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PlayerCraft"
          target="craftId"
          label="Player Crafts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Craft" source="craft.id" reference="Craft">
              <TextField source={CRAFT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
