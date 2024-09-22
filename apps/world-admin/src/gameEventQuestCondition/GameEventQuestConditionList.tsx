import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventQuestConditionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEventQuestConditions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="condition_id" source="conditionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="ID" source="id" />
        <TextField label="num" source="num" />
        <TextField label="quest" source="quest" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
