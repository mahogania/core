import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CallLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="call_received_by" source="callReceivedBy" />
        <TextInput label="call_type" source="callType" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="duration" source="duration" />
        <TextInput label="employee_user_id" source="employeeUserId" />
        <DateTimeInput label="end_time" source="endTime" />
        <TextInput label="from" source="fromField" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="medium" source="medium" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="original_id" source="originalId" />
        <TextInput label="owner" source="owner" />
        <TextInput label="recording_url" source="recordingUrl" />
        <DateTimeInput label="start_time" source="startTime" />
        <TextInput label="status" source="status" />
        <TextInput label="summary" multiline source="summary" />
        <TextInput label="to" source="to" />
        <TextInput label="type_of_call" source="typeOfCall" />
      </SimpleForm>
    </Edit>
  );
};
