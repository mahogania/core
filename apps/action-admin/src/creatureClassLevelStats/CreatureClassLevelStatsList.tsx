import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureClassLevelStatsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureClassLevelStatsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="attackpower" source="attackpower" />
        <TextField label="basemana" source="basemana" />
        <TextField label="class" source="classField" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="rangedattackpower" source="rangedattackpower" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
