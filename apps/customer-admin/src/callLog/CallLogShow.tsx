import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CallLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="call_received_by" source="callReceivedBy" />
        <TextField label="call_type" source="callType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="duration" source="duration" />
        <TextField label="employee_user_id" source="employeeUserId" />
        <TextField label="end_time" source="endTime" />
        <TextField label="from" source="fromField" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="medium" source="medium" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="original_id" source="originalId" />
        <TextField label="owner" source="owner" />
        <TextField label="recording_url" source="recordingUrl" />
        <TextField label="start_time" source="startTime" />
        <TextField label="status" source="status" />
        <TextField label="summary" source="summary" />
        <TextField label="to" source="to" />
        <TextField label="type_of_call" source="typeOfCall" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
