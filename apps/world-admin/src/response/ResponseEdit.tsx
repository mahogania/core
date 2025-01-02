import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChoiceTitle } from "../choice/ChoiceTitle";
import { PlayerTitle } from "../player/PlayerTitle";
import { ResponseLocaleTitle } from "../responseLocale/ResponseLocaleTitle";

export const ResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="choice.id" reference="Choice" label="Choice">
          <SelectInput optionText={ChoiceTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="responseLocales.id"
          reference="ResponseLocale"
          label="Response Locales"
        >
          <SelectInput optionText={ResponseLocaleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};