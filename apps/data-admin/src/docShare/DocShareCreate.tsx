import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const DocShareCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="everyone" source="everyone" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="notify_by_email" source="notifyByEmail" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="read" source="read" />
        <NumberInput step={1} label="share" source="share" />
        <TextInput label="share_doctype" source="shareDoctype" />
        <TextInput label="share_name" source="shareName" />
        <NumberInput step={1} label="submit" source="submit" />
        <TextInput label="user" source="user" />
        <NumberInput step={1} label="write" source="write" />
      </SimpleForm>
    </Create>
  );
};
