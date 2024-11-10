import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DataImportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DataImports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
