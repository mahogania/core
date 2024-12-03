import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const MaintenanceVisitPurposeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField
          label="maintenance_schedule_detail"
          source="maintenanceScheduleDetail"
        />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="prevdoc_docname" source="prevdocDocname" />
        <TextField label="prevdoc_doctype" source="prevdocDoctype" />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="service_person" source="servicePerson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="work_done" source="workDone" />
      </SimpleShowLayout>
    </Show>
  );
};
