import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { CharacterTitle } from "../character/CharacterTitle";

export const CharacterSpellEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="characters" reference="Character">
          <SelectArrayInput
            optionText={CharacterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
