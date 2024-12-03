import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CreatureTitle } from "../creature/CreatureTitle";

export const CreatureLootEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Chance" source="chance" />
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceArrayInput source="creatures" reference="Creature">
          <SelectArrayInput
            optionText={CreatureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Item Id" source="itemId" />
        <NumberInput step={1} label="Max Count" source="maxCount" />
        <NumberInput step={1} label="Min Count" source="minCount" />
        <TextInput label="Quest Id" source="questId" />
      </SimpleForm>
    </Edit>
  );
};
