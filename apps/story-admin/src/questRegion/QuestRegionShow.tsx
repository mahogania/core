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

import { QUESTOBJECTIVECOMPLETIONEFFECT_TITLE_FIELD } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffectTitle";
import { QUESTOBJECTIVELOCALE_TITLE_FIELD } from "../questObjectiveLocale/QuestObjectiveLocaleTitle";
import { QUESTREGION_TITLE_FIELD } from "./QuestRegionTitle";
import { POINTOFINTEREST_TITLE_FIELD } from "../pointOfInterest/PointOfInterestTitle";

export const QuestRegionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestObjective"
          target="questPoisId"
          label="QuestObjectives"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Quest Objective Completion Effects"
              source="questobjectivecompletioneffect.id"
              reference="QuestObjectiveCompletionEffect"
            >
              <TextField source={QUESTOBJECTIVECOMPLETIONEFFECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Quest Objective Locales"
              source="questobjectivelocale.id"
              reference="QuestObjectiveLocale"
            >
              <TextField source={QUESTOBJECTIVELOCALE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Quest Pois"
              source="questregion.id"
              reference="QuestRegion"
            >
              <TextField source={QUESTREGION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuestPoi"
          target="questPoiId"
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
