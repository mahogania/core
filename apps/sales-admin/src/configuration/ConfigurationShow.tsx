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

import { CONFIGURATION_TITLE_FIELD } from "./ConfigurationTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";

export const ConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Process Configuration"
          source="pipeline.id"
          reference="Pipeline"
        >
          <TextField source={PIPELINE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Configuration"
          source="bundle.id"
          reference="Bundle"
        >
          <TextField source={BUNDLE_TITLE_FIELD} />
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
