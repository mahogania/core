import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const DeliveryTripCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="departure_time" source="departureTime" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="driver" source="driver" />
        <TextInput label="driver_address" source="driverAddress" />
        <TextInput label="driver_email" source="driverEmail" />
        <TextInput label="driver_name" source="driverName" />
        <BooleanInput
          label="email_notification_sent"
          source="emailNotificationSent"
        />
        <TextInput label="employee" source="employee" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="status" source="status" />
        <NumberInput label="total_distance" source="totalDistance" />
        <TextInput label="uom" source="uom" />
        <TextInput label="vehicle" source="vehicle" />
      </SimpleForm>
    </Create>
  );
};
