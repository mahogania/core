import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LOOTTEMPLATE_TITLE_FIELD } from "./LootTemplateTitle";

export const LootTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Chance" source="chance" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Entry" source="entry" />
        <TextField label="GroupId" source="groupId" />
        <TextField label="ID" source="id" />
        <TextField label="Item" source="item" />
        <TextField label="LootMode" source="lootMode" />
        <TextField label="MaxCount" source="maxCount" />
        <TextField label="MinCount" source="minCount" />
        <BooleanField label="QuestRequired" source="questRequired" />
        <TextField label="Reference" source="reference" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="GameObjectLootTemplate"
          target="lootTemplateId"
          label="GameObjectLootTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Chance" source="chance" />
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Group Id" source="groupId" />
            <TextField label="ID" source="id" />
            <TextField label="Item Id" source="itemId" />
            <TextField label="LootMode" source="lootMode" />
            <ReferenceField
              label="Loot Template"
              source="loottemplate.id"
              reference="LootTemplate"
            >
              <TextField source={LOOTTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Max Count" source="maxCount" />
            <TextField label="Min Count" source="minCount" />
            <TextField label="Quest Id" source="questId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MailLootTemplate"
          target="lootTemplateId"
          label="MailLootTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Loot Template"
              source="loottemplate.id"
              reference="LootTemplate"
            >
              <TextField source={LOOTTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sender" source="sender" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MillingLootTemplate"
          target="lootTemplateId"
          label="MillingLootTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Loot Template"
              source="loottemplate.id"
              reference="LootTemplate"
            >
              <TextField source={LOOTTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
