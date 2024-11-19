import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MaintenanceVisitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address_display" source="addressDisplay" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="company" source="company" />
        <TextField label="completion_status" source="completionStatus" />
        <TextField label="contact_display" source="contactDisplay" />
        <TextField label="contact_email" source="contactEmail" />
        <TextField label="contact_mobile" source="contactMobile" />
        <TextField label="contact_person" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="customer_address" source="customerAddress" />
        <TextField label="customer_feedback" source="customerFeedback" />
        <TextField label="customer_group" source="customerGroup" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="maintenance_schedule" source="maintenanceSchedule" />
        <TextField
          label="maintenance_schedule_detail"
          source="maintenanceScheduleDetail"
        />
        <TextField label="maintenance_type" source="maintenanceType" />
        <TextField label="mntc_date" source="mntcDate" />
        <TextField label="mntc_time" source="mntcTime" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="status" source="status" />
        <TextField label="territory" source="territory" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
