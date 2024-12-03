import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChoiceLocaleTitle } from "../choiceLocale/ChoiceLocaleTitle";
import { ResponseTitle } from "../response/ResponseTitle";

export const ChoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="choiceLocales.id"
          reference="ChoiceLocale"
          label="Choice Locales"
        >
          <SelectInput optionText={ChoiceLocaleTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="responses.id"
          reference="Response"
          label="Responses"
        >
          <SelectInput optionText={ResponseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
