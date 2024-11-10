import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { DataImportLogTitle } from "../dataImportLog/DataImportLogTitle";

export const DataImportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <ReferenceArrayInput source="dataImportLogs" reference="DataImportLog">
          <SelectArrayInput
            optionText={DataImportLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
        <NumberInput step={1} label="payload_count" source="payloadCount" />
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
