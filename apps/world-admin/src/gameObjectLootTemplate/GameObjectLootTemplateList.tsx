import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameObjectLootTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameObjectLootTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
