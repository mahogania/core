import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AssociationTitle } from "../association/AssociationTitle";
import { AgentTitle } from "../agent/AgentTitle";
import { UserTitle } from "../user/UserTitle";
import { RepresentationTitle } from "../representation/RepresentationTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const EntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="PredecessorAssociations"
          reference="Association"
        >
          <SelectArrayInput
            optionText={AssociationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="representation.id"
          reference="Representation"
          label="Representation"
        >
          <SelectInput optionText={RepresentationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="successorAssociations"
          reference="Association"
        >
          <SelectArrayInput
            optionText={AssociationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
