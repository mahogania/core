import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EmployeeInternalWorkHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="branch" source="branch" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="department" source="department" />
        <TextInput label="designation" source="designation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="from_date" source="fromDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <DateTimeInput label="to_date" source="toDate" />
      </SimpleForm>
    </Create>
  );
};
