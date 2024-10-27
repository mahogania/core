import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureModelInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureModelInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Bound Radius" source="boundRadius" />
        <TextField label="Combat Radius" source="combatRadius" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display ID" source="displayId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
