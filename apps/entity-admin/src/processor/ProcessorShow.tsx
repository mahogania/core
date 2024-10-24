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

import { PROCESSOR_TITLE_FIELD } from "./ProcessorTitle";
import { TRAIT_TITLE_FIELD } from "../trait/TraitTitle";
import { FRAGMENT_TITLE_FIELD } from "../fragment/FragmentTitle";

export const ProcessorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Command"
          target="processorId"
          label="Commands"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Processor"
              source="processor.id"
              reference="Processor"
            >
              <TextField source={PROCESSOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trait" source="trait.id" reference="Trait">
              <TextField source={TRAIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="View" target="processorId" label="Views">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Fragment"
              source="fragment.id"
              reference="Fragment"
            >
              <TextField source={FRAGMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Processor"
              source="processor.id"
              reference="Processor"
            >
              <TextField source={PROCESSOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
