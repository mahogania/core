import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FormTitle } from "../form/FormTitle";

export const TemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="form.id" reference="Form" label="Form">
          <SelectInput optionText={FormTitle} />
        </ReferenceInput>
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
