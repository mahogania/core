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

import { POINTOFINTEREST_TITLE_FIELD } from "./PointOfInterestTitle";
import { QUESTREGION_TITLE_FIELD } from "../questRegion/QuestRegionTitle";

export const PointOfInterestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PointsOfInterestLocale"
          target="pointsOfInterestId"
          label="PointsOfInterestLocales"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PointsOfInterest"
              source="pointofinterest.id"
              reference="PointOfInterest"
            >
              <TextField source={POINTOFINTEREST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuestPoi"
          target="pointOfInterestId"
          label="QuestPois"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Point of Interest"
              source="pointofinterest.id"
              reference="PointOfInterest"
            >
              <TextField source={POINTOFINTEREST_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Quest Poi"
              source="questregion.id"
              reference="QuestRegion"
            >
              <TextField source={QUESTREGION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
