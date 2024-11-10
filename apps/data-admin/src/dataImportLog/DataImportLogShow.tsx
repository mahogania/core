import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DATAIMPORT_TITLE_FIELD } from "../dataImport/DataImportTitle";

export const DataImportLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <ReferenceField
          label="DataImport"
          source="dataimport.id"
          reference="DataImport"
        >
          <TextField source={DATAIMPORT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="docname" source="docname" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="exception" source="exception" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="log_index" source="logIndex" />
        <TextField label="messages" source="messages" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="row_indexes" source="rowIndexes" />
        <TextField label="success" source="success" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
