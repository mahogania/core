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
import { PORTAL_TITLE_FIELD } from "../portal/PortalTitle";

export const AreaTeleportTriggerList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AreaTeleportTriggers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Portal" source="portal.id" reference="Portal">
          <TextField source={PORTAL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
