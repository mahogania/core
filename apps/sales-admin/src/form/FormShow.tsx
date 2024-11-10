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

import { FORM_TITLE_FIELD } from "./FormTitle";
import { PROCESS_TITLE_FIELD } from "../process/ProcessTitle";

export const FormShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Process" source="process.id" reference="Process">
          <TextField source={PROCESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Schema" source="schema" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Template"
          target="formId"
          label="Templates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fields" source="fields" />
            <ReferenceField label="Form" source="form.id" reference="Form">
              <TextField source={FORM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
