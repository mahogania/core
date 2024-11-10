import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ActivityLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="communication_date" source="communicationDate" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="full_name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ip_address" source="ipAddress" />
        <TextField label="link_doctype" source="linkDoctype" />
        <TextField label="link_name" source="linkName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="operation" source="operation" />
        <TextField label="owner" source="owner" />
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="reference_name" source="referenceName" />
        <TextField label="reference_owner" source="referenceOwner" />
        <TextField label="status" source="status" />
        <TextField label="subject" source="subject" />
        <TextField label="timeline_doctype" source="timelineDoctype" />
        <TextField label="timeline_name" source="timelineName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
