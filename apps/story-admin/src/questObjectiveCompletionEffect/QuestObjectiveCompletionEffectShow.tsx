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

import { QUESTOBJECTIVECOMPLETIONEFFECT_TITLE_FIELD } from "./QuestObjectiveCompletionEffectTitle";
import { QUESTOBJECTIVELOCALE_TITLE_FIELD } from "../questObjectiveLocale/QuestObjectiveLocaleTitle";
import { QUESTREGION_TITLE_FIELD } from "../questRegion/QuestRegionTitle";

export const QuestObjectiveCompletionEffectShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestObjective"
          target="questObjectiveCompletionEffectsId"
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
      </SimpleShowLayout>
    </Show>
  );
};
