import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CreatureTitle } from "../creature/CreatureTitle";

export const CreatureImmunityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Auras" source="auras" />
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceArrayInput source="creatures" reference="Creature">
          <SelectArrayInput
            optionText={CreatureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Dispel Mask" source="dispelMask" />
        <TextInput label="Effects" source="effects" />
        <TextInput label="Mechanic Mask" source="mechanicMask" />
        <TextInput label="School Mask" source="schoolMask" />
      </SimpleForm>
    </Create>
  );
};
