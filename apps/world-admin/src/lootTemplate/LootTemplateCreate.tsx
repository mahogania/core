import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { GameObjectLootTemplateTitle } from "../gameObjectLootTemplate/GameObjectLootTemplateTitle";
import { MailLootTemplateTitle } from "../mailLootTemplate/MailLootTemplateTitle";
import { MillingLootTemplateTitle } from "../millingLootTemplate/MillingLootTemplateTitle";

export const LootTemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Chance" source="chance" />
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Entry" source="entry" />
        <ReferenceArrayInput
          source="gameObjectLootTemplates"
          reference="GameObjectLootTemplate"
        >
          <SelectArrayInput
            optionText={GameObjectLootTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="GroupId" source="groupId" />
        <NumberInput step={1} label="Item" source="item" />
        <NumberInput step={1} label="LootMode" source="lootMode" />
        <ReferenceArrayInput
          source="mailLootTemplates"
          reference="MailLootTemplate"
        >
          <SelectArrayInput
            optionText={MailLootTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="MaxCount" source="maxCount" />
        <ReferenceArrayInput
          source="millingLootTemplates"
          reference="MillingLootTemplate"
        >
          <SelectArrayInput
            optionText={MillingLootTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="MinCount" source="minCount" />
        <BooleanInput label="QuestRequired" source="questRequired" />
        <NumberInput step={1} label="Reference" source="reference" />
      </SimpleForm>
    </Create>
  );
};
