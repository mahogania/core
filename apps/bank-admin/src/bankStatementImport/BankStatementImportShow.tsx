import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BankStatementImportShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bank" source="bank" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custom_delimiters" source="customDelimiters" />
        <TextField label="delimiter_options" source="delimiterOptions" />
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
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="show_failed_logs" source="showFailedLogs" />
        <TextField label="status" source="status" />
        <TextField label="submit_after_import" source="submitAfterImport" />
        <TextField label="template_options" source="templateOptions" />
        <TextField label="template_warnings" source="templateWarnings" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
