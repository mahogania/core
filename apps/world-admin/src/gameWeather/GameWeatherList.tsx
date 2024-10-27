import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameWeatherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameWeathers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Chance" source="chance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <TextField label="Script" source="script" />
        <TextField label="Season" source="season" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zone" source="zone" />{" "}
      </Datagrid>
    </List>
  );
};
