import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ClientScriptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="dt" source="dt" />
        <NumberInput step={1} label="enabled" source="enabled" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="module" source="moduleField" />
        <TextInput label="owner" source="owner" />
        <TextInput label="script" multiline source="script" />
        <TextInput label="view" source="view" />
      </SimpleForm>
    </Edit>
  );
};
