import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";
import { CATALOG_TITLE_FIELD } from "./CatalogTitle";
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const CatalogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Unit" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Configuration"
          target="catalogId"
          label="Configurations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Bundle"
              source="bundle.id"
              reference="Bundle"
            >
              <TextField source={BUNDLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Catalog"
              source="catalog.id"
              reference="Catalog"
            >
              <TextField source={CATALOG_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Pipeline"
              source="pipeline.id"
              reference="Pipeline"
            >
              <TextField source={PIPELINE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
