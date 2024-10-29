import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LootTemplateTitle } from "../lootTemplate/LootTemplateTitle";

export const MillingLootTemplateCreate = (
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
      </SimpleForm>
    </Create>
  );
};
