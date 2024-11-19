import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ConfigurationTitle } from "../configuration/ConfigurationTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const CatalogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="configurations" reference="Configuration">
          <SelectArrayInput
            optionText={ConfigurationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="unit.id" reference="Unit" label="Unit">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
