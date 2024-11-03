import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="department_name" source="departmentName" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="is_group" source="isGroup" />
        <NumberInput step={1} label="lft" source="lft" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_department" source="parentDepartment" />
        <NumberInput step={1} label="rgt" source="rgt" />
      </SimpleForm>
    </Create>
  );
};
