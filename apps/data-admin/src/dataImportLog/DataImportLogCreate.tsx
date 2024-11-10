import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DataImportTitle } from "../dataImport/DataImportTitle";

export const DataImportLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <ReferenceInput
          source="dataImport.id"
          reference="DataImport"
          label="DataImport"
        >
          <SelectInput optionText={DataImportTitle} />
        </ReferenceInput>
        <TextInput label="docname" source="docname" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="exception" multiline source="exception" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="log_index" source="logIndex" />
        <TextInput label="messages" multiline source="messages" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="row_indexes" multiline source="rowIndexes" />
        <NumberInput step={1} label="success" source="success" />
      </SimpleForm>
    </Create>
  );
};
