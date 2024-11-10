import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DocPermEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="amend" source="amend" />
        <NumberInput step={1} label="cancel" source="cancel" />
        <NumberInput step={1} label="create" source="create" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="delete" source="deleteField" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="email" source="email" />
        <NumberInput step={1} label="export" source="exportField" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="if_owner" source="ifOwner" />
        <NumberInput step={1} label="import" source="importField" />
        <TextInput label="match" source="match" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput step={1} label="permlevel" source="permlevel" />
        <NumberInput step={1} label="print" source="print" />
        <NumberInput step={1} label="read" source="read" />
        <NumberInput step={1} label="report" source="report" />
        <TextInput label="role" source="role" />
        <NumberInput step={1} label="select" source="select" />
        <NumberInput step={1} label="share" source="share" />
        <NumberInput step={1} label="submit" source="submit" />
        <NumberInput step={1} label="write" source="write" />
      </SimpleForm>
    </Edit>
  );
};
