import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureLevelStatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureLevelStats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Prana" source="Prana" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <TextField label="Level" source="level" />
        <TextField label="Power" source="power" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
