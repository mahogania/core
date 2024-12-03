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
import { ACHIEVEMENT_TITLE_FIELD } from "../achievement/AchievementTitle";

export const AchievementBehaviourList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AchievementBehaviours"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Achievement"
          source="achievement.id"
          reference="Achievement"
        >
          <TextField source={ACHIEVEMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Behaviour Name" source="behaviourName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
