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
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { QUEST_TITLE_FIELD } from "../quest/QuestTitle";

export const AreaQuestTriggerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AreaQuestTriggers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Quest" source="quest.id" reference="Quest">
          <TextField source={QUEST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
