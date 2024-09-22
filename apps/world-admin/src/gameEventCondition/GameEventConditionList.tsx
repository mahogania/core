import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventConditionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEventConditions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="condition_id" source="conditionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField
          label="done_world_state_field"
          source="doneWorldStateField"
        />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="ID" source="id" />
        <TextField label="max_world_state_field" source="maxWorldStateField" />
        <TextField label="req_num" source="reqNum" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
