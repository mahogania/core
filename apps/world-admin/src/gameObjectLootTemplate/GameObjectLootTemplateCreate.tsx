import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GameObjectLootTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Chance" source="chance" />
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Entry Id" source="entry" />
        <NumberInput step={1} label="Group Id" source="groupId" />
        <NumberInput step={1} label="Item Id" source="itemId" />
        <NumberInput step={1} label="LootMode" source="lootMode" />
        <NumberInput step={1} label="Max Count" source="maxCount" />
        <NumberInput step={1} label="Min Count" source="minCount" />
        <NumberInput step={1} label="Quest Id" source="questId" />
        <NumberInput step={1} label="Reference Id" source="referenceId" />
      </SimpleForm>
    </Create>
  );
};
