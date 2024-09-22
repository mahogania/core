import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreatureModelInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CreatureModelInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="BoundingRadius" source="boundingRadius" />
        <TextField label="CombatReach" source="combatReach" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DisplayID" source="displayId" />
        <TextField
          label="DisplayID_Other_Gender"
          source="displayIdOtherGender"
        />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />{" "}
      </Datagrid>
    </List>
  );
};
