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

import { DATAIMPORT_TITLE_FIELD } from "./DataImportTitle";

export const DataImportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="google_sheets_url" source="googleSheetsUrl" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="import_file" source="importFile" />
        <TextField label="import_type" source="importType" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="mute_emails" source="muteEmails" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="payload_count" source="payloadCount" />
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="show_failed_logs" source="showFailedLogs" />
        <TextField label="status" source="status" />
        <TextField label="submit_after_import" source="submitAfterImport" />
        <TextField label="template_options" source="templateOptions" />
        <TextField label="template_warnings" source="templateWarnings" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DataImportLog"
          target="dataImportId"
          label="DataImportLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
