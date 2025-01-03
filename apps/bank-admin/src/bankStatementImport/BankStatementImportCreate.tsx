import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BankStatementImportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bank" source="bank" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          step={1}
          label="custom_delimiters"
          source="customDelimiters"
        />
        <TextInput label="delimiter_options" source="delimiterOptions" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="google_sheets_url" source="googleSheetsUrl" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="import_file" multiline source="importFile" />
        <TextInput label="import_type" source="importType" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput step={1} label="mute_emails" source="muteEmails" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <NumberInput
          step={1}
          label="show_failed_logs"
          source="showFailedLogs"
        />
        <TextInput label="status" source="status" />
        <NumberInput
          step={1}
          label="submit_after_import"
          source="submitAfterImport"
        />
        <TextInput
          label="template_options"
          multiline
          source="templateOptions"
        />
        <TextInput
          label="template_warnings"
          multiline
          source="templateWarnings"
        />
      </SimpleForm>
    </Create>
  );
};
