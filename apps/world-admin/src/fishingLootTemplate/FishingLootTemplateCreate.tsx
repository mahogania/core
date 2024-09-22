import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const FishingLootTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Chance" source="chance" />
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Entry" source="entry" />
        <NumberInput step={1} label="GroupId" source="groupId" />
        <NumberInput step={1} label="Item" source="item" />
        <NumberInput step={1} label="LootMode" source="lootMode" />
        <NumberInput step={1} label="MaxCount" source="maxCount" />
        <NumberInput step={1} label="MinCount" source="minCount" />
        <BooleanInput label="QuestRequired" source="questRequired" />
        <NumberInput step={1} label="Reference" source="reference" />
      </SimpleForm>
    </Create>
  );
};
