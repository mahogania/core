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
import { QUESTOBJECTIVECOMPLETIONEFFECT_TITLE_FIELD } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffectTitle";
import { QUESTOBJECTIVELOCALE_TITLE_FIELD } from "../questObjectiveLocale/QuestObjectiveLocaleTitle";
import { QUESTREGION_TITLE_FIELD } from "../questRegion/QuestRegionTitle";

export const QuestObjectiveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestObjectives"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
