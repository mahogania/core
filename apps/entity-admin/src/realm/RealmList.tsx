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
import { WORLD_TITLE_FIELD } from "../world/WorldTitle";

export const RealmList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Realms"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="World" source="world.id" reference="World">
          <TextField source={WORLD_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
