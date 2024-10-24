import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttributeTitle } from "../attribute/AttributeTitle";
import { TraitTitle } from "../trait/TraitTitle";
import { ViewTitle } from "../view/ViewTitle";

export const FragmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="attributes" reference="Attribute">
          <SelectArrayInput
            optionText={AttributeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="trait.id" reference="Trait" label="Trait">
          <SelectInput optionText={TraitTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="views" reference="View">
          <SelectArrayInput
            optionText={ViewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
