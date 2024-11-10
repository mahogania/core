import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DocTypeActionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" multiline source="action" />
        <TextInput label="action_type" source="actionType" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="custom" source="custom" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="group" source="group" />
        <NumberInput step={1} label="hidden" source="hidden" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="label" source="label" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
      </SimpleForm>
    </Edit>
  );
};
