import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const DocTypeLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="custom" source="custom" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="group" source="group" />
        <NumberInput step={1} label="hidden" source="hidden" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="is_child_table" source="isChildTable" />
        <TextInput label="link_doctype" source="linkDoctype" />
        <TextInput label="link_fieldname" source="linkFieldname" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parent_doctype" source="parentDoctype" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="table_fieldname" source="tableFieldname" />
      </SimpleForm>
    </Create>
  );
};
