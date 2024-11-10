import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CraftTitle } from "../craft/CraftTitle";

export const CraftLevelStatCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="craft.id" reference="Craft" label="Craft">
          <SelectInput optionText={CraftTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Level" source="level" />
        <TextInput label="Stat" source="stat" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
