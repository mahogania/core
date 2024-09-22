import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventScriptsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EventScriptsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="command" source="command" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataint" source="dataint" />
        <TextField label="datalong" source="datalong" />
        <TextField label="datalong2" source="datalong2" />
        <TextField label="delay" source="delay" />
        <TextField label="ID" source="id" />
        <TextField label="o" source="o" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="x" source="x" />
        <TextField label="y" source="y" />
        <TextField label="z" source="z" />{" "}
      </Datagrid>
    </List>
  );
};
