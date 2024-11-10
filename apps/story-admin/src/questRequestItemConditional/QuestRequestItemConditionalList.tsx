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
import { QUESTREQUESTITEM_TITLE_FIELD } from "../questRequestItem/QuestRequestItemTitle";

export const QuestRequestItemConditionalList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestRequestItemConditionals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quest Request Item"
          source="questrequestitem.id"
          reference="QuestRequestItem"
        >
          <TextField source={QUESTREQUESTITEM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
