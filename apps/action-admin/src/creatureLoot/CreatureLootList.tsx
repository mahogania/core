import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureLootList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureLoots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Chance" source="chance" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Item Id" source="itemId" />
        <TextField label="Max Count" source="maxCount" />
        <TextField label="Min Count" source="minCount" />
        <TextField label="Quest Id" source="questId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
