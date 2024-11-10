import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { PORTAL_TITLE_FIELD } from "./PortalTitle";

export const PortalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AreaTeleportTrigger"
          target="portalId"
          label="AreaTeleportTriggers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Portal"
              source="portal.id"
              reference="Portal"
            >
              <TextField source={PORTAL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
