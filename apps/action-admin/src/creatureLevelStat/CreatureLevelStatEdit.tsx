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

export const CreatureLevelStatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Prana" source="Prana" />
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceArrayInput source="creatures" reference="Creature">
          <SelectArrayInput
            optionText={CreatureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Kind" source="kind" />
        <NumberInput step={1} label="Level" source="level" />
        <NumberInput step={1} label="Power" source="power" />
      </SimpleForm>
    </Edit>
  );
};
