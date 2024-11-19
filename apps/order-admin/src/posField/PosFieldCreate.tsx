import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PosFieldCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="defaultValue" source="defaultValue" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <TextInput label="fieldname" source="fieldname" />
        <TextInput label="fieldtype" source="fieldtype" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="label" source="label" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="options" multiline source="options" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <NumberInput step={1} label="readOnly" source="readOnly" />
        <NumberInput step={1} label="reqd" source="reqd" />
      </SimpleForm>
    </Create>
  );
};
