import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { EntityTitle } from "../entity/EntityTitle";

export const AssociationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ascendant.id"
          reference="Entity"
          label="Ascendant"
        >
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="descendant.id"
          reference="Entity"
          label="Descendant"
        >
          <SelectInput optionText={EntityTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
