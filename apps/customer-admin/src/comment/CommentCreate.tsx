import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment_by" source="commentBy" />
        <TextInput label="comment_email" source="commentEmail" />
        <TextInput label="comment_type" source="commentType" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="ip_address" source="ipAddress" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="published" source="published" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <TextInput label="reference_name" source="referenceName" />
        <TextInput label="reference_owner" source="referenceOwner" />
        <NumberInput step={1} label="seen" source="seen" />
        <TextInput label="subject" multiline source="subject" />
      </SimpleForm>
    </Create>
  );
};
