import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CharacterDialogueTitle } from "../characterDialogue/CharacterDialogueTitle";
import { CharacterSpellTitle } from "../characterSpell/CharacterSpellTitle";

export const CharacterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="characterDialogues"
          reference="CharacterDialogue"
        >
          <SelectArrayInput
            optionText={CharacterDialogueTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="characterSpells.id"
          reference="CharacterSpell"
          label="Character Spells"
        >
          <SelectInput optionText={CharacterSpellTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
