import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const MaintenanceScheduleItemEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="end_date" source="endDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="no_of_visits" source="noOfVisits" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="periodicity" source="periodicity" />
        <TextInput label="sales_order" source="salesOrder" />
        <TextInput label="sales_person" source="salesPerson" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <DateTimeInput label="start_date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
