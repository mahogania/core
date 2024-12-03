import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ENTITY_TITLE_FIELD } from "./EntityTitle";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { REPRESENTATION_TITLE_FIELD } from "../representation/RepresentationTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const EntityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Agent" source="agent.id" reference="Agent">
          <TextField source={AGENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Representation"
          source="representation.id"
          reference="Representation"
        >
          <TextField source={REPRESENTATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Template"
          source="template.id"
          reference="Template"
        >
          <TextField source={TEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Version" source="version" />
        <ReferenceManyField
          reference="Association"
          target="ascendantId"
          label="Associations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Ascendant"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Descendant"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="Display Name" source="displayName" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Association"
          target="descendantId"
          label="Associations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Ascendant"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Descendant"
              source="entity.id"
              reference="Entity"
            >
              <TextField source={ENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="Display Name" source="displayName" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
