import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const SalesInvoiceTimesheetCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="activityType" source="activityType" />
        <NumberInput label="billingAmount" source="billingAmount" />
        <NumberInput label="billingHours" source="billingHours" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="fromTime" source="fromTime" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="projectName" source="projectName" />
        <TextInput label="timeSheet" source="timeSheet" />
        <TextInput label="timesheetDetail" source="timesheetDetail" />
        <DateTimeInput label="toTime" source="toTime" />
      </SimpleForm>
    </Create>
  );
};
