import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AchievementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Achievements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="Map" source="map" />
        <TextField label="Points" source="points" />
        <TextField label="Ref Achievement" source="refAchievement" />
        <TextField label="Required Faction" source="requiredFaction" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
