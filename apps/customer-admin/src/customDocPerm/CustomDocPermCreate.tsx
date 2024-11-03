import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const CustomDocPermCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="amend" source="amend" />
        <BooleanInput label="cancel" source="cancel" />
        <BooleanInput label="create" source="create" />
        <DateTimeInput label="creation" source="creation" />
        <BooleanInput label="delete" source="deleteField" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput label="email" source="email" />
        <BooleanInput label="export" source="exportField" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput label="if_owner" source="ifOwner" />
        <BooleanInput label="import" source="importField" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <NumberInput step={1} label="permlevel" source="permlevel" />
        <BooleanInput label="print" source="print" />
        <BooleanInput label="read" source="read" />
        <BooleanInput label="report" source="report" />
        <TextInput label="role" source="role" />
        <BooleanInput label="selectField" source="selectField" />
        <BooleanInput label="share" source="share" />
        <BooleanInput label="submit" source="submit" />
        <BooleanInput label="write" source="write" />
      </SimpleForm>
    </Create>
  );
};
