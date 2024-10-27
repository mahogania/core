import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GameObjectLootTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Chance" source="chance" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Entry Id" source="entry" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="ID" source="id" />
        <TextField label="Item Id" source="itemId" />
        <TextField label="LootMode" source="lootMode" />
        <TextField label="Max Count" source="maxCount" />
        <TextField label="Min Count" source="minCount" />
        <TextField label="Quest Id" source="questId" />
        <TextField label="Reference Id" source="referenceId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
