import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INDUSTRY_TITLE_FIELD } from "./IndustryTitle";
import { RELATION_TITLE_FIELD } from "../relation/RelationTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";

export const IndustryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Business"
          target="industryId"
          label="Businesses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Industry"
              source="industry.id"
              reference="Industry"
            >
              <TextField source={INDUSTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Succesor relations"
              source="relation.id"
              reference="Relation"
            >
              <TextField source={RELATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Relation"
          target="industryId"
          label="Relations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Ascendant Business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Descendant Business"
              source="business.id"
              reference="Business"
            >
              <TextField source={BUSINESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Industry"
              source="industry.id"
              reference="Industry"
            >
              <TextField source={INDUSTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Kind" source="kind" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
