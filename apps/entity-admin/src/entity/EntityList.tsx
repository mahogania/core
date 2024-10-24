import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { REPRESENTATION_TITLE_FIELD } from "../representation/RepresentationTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const EntityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Entities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Version" source="version" />{" "}
      </Datagrid>
    </List>
  );
};
