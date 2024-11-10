import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LOOTTEMPLATE_TITLE_FIELD } from "../lootTemplate/LootTemplateTitle";

export const GameObjectLootTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
