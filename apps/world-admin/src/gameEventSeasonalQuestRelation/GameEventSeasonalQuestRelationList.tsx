import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventSeasonalQuestRelationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEventSeasonalQuestRelations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="ID" source="id" />
        <TextField label="questId" source="questId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
