import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="appointment_with" source="appointmentWith" />
        <TextField label="calendar_event" source="calendarEvent" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer_details" source="customerDetails" />
        <TextField label="customer_email" source="customerEmail" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="customer_phone_number" source="customerPhoneNumber" />
        <TextField label="customer_skype" source="customerSkype" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="party" source="party" />
        <TextField label="scheduled_time" source="scheduledTime" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
