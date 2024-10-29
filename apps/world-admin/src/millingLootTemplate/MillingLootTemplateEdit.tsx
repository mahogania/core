import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LootTemplateTitle } from "../lootTemplate/LootTemplateTitle";

export const MillingLootTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="lootTemplate.id"
          reference="LootTemplate"
          label="Loot Template"
        >
          <SelectInput optionText={LootTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
