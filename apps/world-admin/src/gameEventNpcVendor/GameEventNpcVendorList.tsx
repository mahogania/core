import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameEventNpcVendorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameEventNpcVendors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="BonusListIDs" source="bonusListIDs" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="ExtendedCost" source="extendedCost" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="IgnoreFiltering" source="ignoreFiltering" />
        <TextField label="incrtime" source="incrtime" />
        <TextField label="item" source="item" />
        <TextField label="maxcount" source="maxcount" />
        <TextField label="PlayerConditionID" source="playerConditionId" />
        <TextField label="slot" source="slot" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
