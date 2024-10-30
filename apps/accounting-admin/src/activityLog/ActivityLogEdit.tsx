import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ActivityLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="communication_date" source="communicationDate" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="full_name" source="fullName" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="ip_address" source="ipAddress" />
        <TextInput label="link_doctype" source="linkDoctype" />
        <TextInput label="link_name" source="linkName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="operation" source="operation" />
        <TextInput label="owner" source="owner" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <TextInput label="reference_name" source="referenceName" />
        <TextInput label="reference_owner" source="referenceOwner" />
        <TextInput label="status" source="status" />
        <TextInput label="subject" multiline source="subject" />
        <TextInput label="timeline_doctype" source="timelineDoctype" />
        <TextInput label="timeline_name" source="timelineName" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
