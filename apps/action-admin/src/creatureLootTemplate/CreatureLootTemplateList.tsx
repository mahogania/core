import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureLootTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureLootTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="QuestRequired" source="questRequired" />
        <TextField label="Reference" source="reference" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
