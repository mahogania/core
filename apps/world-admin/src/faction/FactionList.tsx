import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PLAYERFACTIONACHIEVEMENT_TITLE_FIELD } from "../playerFactionAchievement/PlayerFactionAchievementTitle";

export const FactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Factions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Player Faction Achievements"
          source="playerfactionachievement.id"
          reference="PlayerFactionAchievement"
        >
          <TextField source={PLAYERFACTIONACHIEVEMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
