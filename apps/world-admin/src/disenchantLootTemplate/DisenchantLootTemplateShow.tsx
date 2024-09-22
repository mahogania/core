import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DisenchantLootTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Chance" source="chance" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Entry" source="entry" />
        <TextField label="GroupId" source="groupId" />
        <TextField label="ID" source="id" />
        <TextField label="Item" source="item" />
        <TextField label="LootMode" source="lootMode" />
        <TextField label="MaxCount" source="maxCount" />
        <TextField label="MinCount" source="minCount" />
        <BooleanField label="QuestRequired" source="questRequired" />
        <TextField label="Reference" source="reference" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
