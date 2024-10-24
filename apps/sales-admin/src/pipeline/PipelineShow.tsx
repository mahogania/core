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

import { PIPELINE_TITLE_FIELD } from "./PipelineTitle";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";

export const PipelineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Configuration"
          target="processConfigurationId"
          label="Configurations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Process"
          target="PipelineId"
          label="Processes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Pipeline"
              source="pipeline.id"
              reference="Pipeline"
            >
              <TextField source={PIPELINE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
