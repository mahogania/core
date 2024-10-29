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
import { ZONE_TITLE_FIELD } from "../zone/ZoneTitle";

export const AreaList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Areas"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Zone" source="zone.id" reference="Zone">
          <TextField source={ZONE_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
