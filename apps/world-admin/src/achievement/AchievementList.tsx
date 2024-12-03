import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACHIEVEMENTREWARD_TITLE_FIELD } from "../achievementReward/AchievementRewardTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const AchievementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Achievements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Achievement Rewards"
          source="achievementreward.id"
          reference="AchievementReward"
        >
          <TextField source={ACHIEVEMENTREWARD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="Map" source="map" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Points" source="points" />
        <TextField label="Ref Achievement" source="refAchievement" />
        <TextField label="Required Faction" source="requiredFaction" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
