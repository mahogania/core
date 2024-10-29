import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LootTemplateTitle } from "../lootTemplate/LootTemplateTitle";

export const GameObjectLootTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Chance" source="chance" />
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Group Id" source="groupId" />
        <NumberInput step={1} label="Item Id" source="itemId" />
        <NumberInput step={1} label="LootMode" source="lootMode" />
        <ReferenceInput
          source="lootTemplate.id"
          reference="LootTemplate"
          label="Loot Template"
        >
          <SelectInput optionText={LootTemplateTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Max Count" source="maxCount" />
        <NumberInput step={1} label="Min Count" source="minCount" />
        <NumberInput step={1} label="Quest Id" source="questId" />
      </SimpleForm>
    </Create>
  );
};
