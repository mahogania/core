import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureFormationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureFormations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Angle" source="angle" />
        <TextField label="Box Id" source="boxId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Distance" source="dist" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="ID" source="id" />
        <TextField label="Leader Id" source="leaderId" />
        <TextField label="Member Id" source="memberId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
