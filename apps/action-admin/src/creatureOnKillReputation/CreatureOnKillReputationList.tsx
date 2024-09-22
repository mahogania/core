import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureOnKillReputationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureOnKillReputations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creatureId" source="creatureId" />
        <TextField label="ID" source="id" />
        <TextField label="IsTeamAward1" source="isTeamAward1" />
        <TextField label="IsTeamAward2" source="isTeamAward2" />
        <TextField label="MaxStanding1" source="maxStanding1" />
        <TextField label="MaxStanding2" source="maxStanding2" />
        <TextField label="RewOnKillRepFaction1" source="rewOnKillRepFaction1" />
        <TextField label="RewOnKillRepFaction2" source="rewOnKillRepFaction2" />
        <TextField label="RewOnKillRepValue1" source="rewOnKillRepValue1" />
        <TextField label="RewOnKillRepValue2" source="rewOnKillRepValue2" />
        <TextField label="TeamDependent" source="teamDependent" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
