import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const MaintenanceVisitPurposeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_name" source="itemName" />
        <TextInput
          label="maintenance_schedule_detail"
          source="maintenanceScheduleDetail"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="prevdoc_docname" source="prevdocDocname" />
        <TextInput label="prevdoc_doctype" source="prevdocDoctype" />
        <TextInput label="serial_no" source="serialNo" />
        <TextInput label="service_person" source="servicePerson" />
        <TextInput label="work_done" multiline source="workDone" />
      </SimpleForm>
    </Edit>
  );
};
