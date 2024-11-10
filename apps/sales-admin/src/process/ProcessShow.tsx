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

import { PROCESS_TITLE_FIELD } from "./ProcessTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";

export const ProcessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Form" target="processId" label="Forms">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Process"
              source="process.id"
              reference="Process"
            >
              <TextField source={PROCESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Schema" source="schema" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Threat"
          target="processId"
          label="Threats"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Process"
              source="process.id"
              reference="Process"
            >
              <TextField source={PROCESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Unit" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
