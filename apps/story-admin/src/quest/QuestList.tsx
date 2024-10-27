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
import { QUESTCUEEFFECT_TITLE_FIELD } from "../questCueEffect/QuestCueEffectTitle";
import { QUESTDETAIL_TITLE_FIELD } from "../questDetail/QuestDetailTitle";
import { QUESTGREETING_TITLE_FIELD } from "../questGreeting/QuestGreetingTitle";
import { QUESTTEMPLATE_TITLE_FIELD } from "../questTemplate/QuestTemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QuestList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Quests"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Quest Cue Effects"
          source="questcueeffect.id"
          reference="QuestCueEffect"
        >
          <TextField source={QUESTCUEEFFECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Details"
          source="questdetail.id"
          reference="QuestDetail"
        >
          <TextField source={QUESTDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Greeting"
          source="questgreeting.id"
          reference="QuestGreeting"
        >
          <TextField source={QUESTGREETING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Template"
          source="questtemplate.id"
          reference="QuestTemplate"
        >
          <TextField source={QUESTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
