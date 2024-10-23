import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AssociationTitle } from "../association/AssociationTitle";
import { UserTitle } from "../user/UserTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const EntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Display Name" source="displayName" />
        <ReferenceArrayInput
          source="incomingAssociations"
          reference="Association"
        >
          <SelectArrayInput
            optionText={AssociationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="outgoingAssociations"
          reference="Association"
        >
          <SelectArrayInput
            optionText={AssociationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="Template"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
        <TextInput label="Version" source="version" />
      </SimpleForm>
    </Create>
  );
};
