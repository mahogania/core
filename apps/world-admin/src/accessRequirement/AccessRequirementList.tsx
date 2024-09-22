import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccessRequirementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccessRequirements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Comment" source="comment" />
        <TextField
          label="Completed achievement"
          source="completedAchievement"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Difficulty" source="difficulty" />
        <TextField label="Failure Text" source="failureText" />
        <TextField label="ID" source="id" />
        <TextField label="Item" source="item" />
        <TextField label="Level Max" source="levelMax" />
        <TextField label="Level Min" source="levelMin" />
        <TextField label="Map" source="mapId" />
        <TextField label="Quest Done" source="questDone" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
