import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureFormationsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureFormationsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="angle" source="angle" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dist" source="dist" />
        <TextField label="groupAI" source="groupAi" />
        <TextField label="ID" source="id" />
        <TextField label="leaderGUID" source="leaderGuid" />
        <TextField label="memberGUID" source="memberGuid" />
        <TextField label="point_1" source="point_1" />
        <TextField label="point_2" source="point_2" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
