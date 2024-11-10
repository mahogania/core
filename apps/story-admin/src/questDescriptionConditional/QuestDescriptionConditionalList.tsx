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
import { QUEST_TITLE_FIELD } from "../quest/QuestTitle";

export const QuestDescriptionConditionalList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestDescriptionConditionals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Quests" source="quest.id" reference="Quest">
          <TextField source={QUEST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
