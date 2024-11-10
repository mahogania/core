import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DeliveryTripShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departure_time" source="departureTime" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="driver" source="driver" />
        <TextField label="driver_address" source="driverAddress" />
        <TextField label="driver_email" source="driverEmail" />
        <TextField label="driver_name" source="driverName" />
        <BooleanField
          label="email_notification_sent"
          source="emailNotificationSent"
        />
        <TextField label="employee" source="employee" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="status" source="status" />
        <TextField label="total_distance" source="totalDistance" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vehicle" source="vehicle" />
      </SimpleShowLayout>
    </Show>
  );
};
