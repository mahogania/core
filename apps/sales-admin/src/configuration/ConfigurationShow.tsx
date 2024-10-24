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

import { CONFIGURATION_TITLE_FIELD } from "./ConfigurationTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";
import { CATALOG_TITLE_FIELD } from "../catalog/CatalogTitle";
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";

export const ConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Bundle" source="bundle.id" reference="Bundle">
          <TextField source={BUNDLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Catalog" source="catalog.id" reference="Catalog">
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
        <ReferenceManyField
          reference="Item"
          target="configurationId"
          label="Items"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Configuration"
              source="configuration.id"
              reference="Configuration"
            >
              <TextField source={CONFIGURATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Quote" source="quote.id" reference="Quote">
              <TextField source={QUOTE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
