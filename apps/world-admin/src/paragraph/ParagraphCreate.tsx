import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CharacterDialogueTitle } from "../characterDialogue/CharacterDialogueTitle";
import { ParagraphLocaleTitle } from "../paragraphLocale/ParagraphLocaleTitle";

export const ParagraphCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="characterLines"
          reference="CharacterDialogue"
        >
          <SelectArrayInput
            optionText={CharacterDialogueTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="paragraphLocales.id"
          reference="ParagraphLocale"
          label="Paragraph Locales"
        >
          <SelectInput optionText={ParagraphLocaleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};