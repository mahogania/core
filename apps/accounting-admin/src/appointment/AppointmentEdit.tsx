import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="appointment_with" source="appointmentWith" />
        <TextInput label="calendar_event" source="calendarEvent" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput
          label="customer_details"
          multiline
          source="customerDetails"
        />
        <TextInput label="customer_email" source="customerEmail" type="email" />
        <TextInput label="customer_name" source="customerName" />
        <TextInput label="customer_phone_number" source="customerPhoneNumber" />
        <TextInput label="customer_skype" source="customerSkype" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="party" source="party" />
        <DateTimeInput label="scheduled_time" source="scheduledTime" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
