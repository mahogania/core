import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommunicationMediumTimeslotEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="day_of_week" source="dayOfWeek" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="employee_group" source="employeeGroup" />
        <DateTimeInput label="from_time" source="fromTime" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <DateTimeInput label="to_time" source="toTime" />
      </SimpleForm>
    </Edit>
  );
};
