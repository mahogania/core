import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { LootTemplateTitle } from "../lootTemplate/LootTemplateTitle";

export const MailLootTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="lootTemplate.id"
          reference="LootTemplate"
          label="Loot Template"
        >
          <SelectInput optionText={LootTemplateTitle} />
        </ReferenceInput>
        <TextInput label="Sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
