import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EmployeeEducationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="class_per" source="classPer" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="level" source="level" />
        <TextInput label="maj_opt_subj" multiline source="majOptSubj" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="qualification" source="qualification" />
        <TextInput label="school_univ" multiline source="schoolUniv" />
        <NumberInput step={1} label="year_of_passing" source="yearOfPassing" />
      </SimpleForm>
    </Edit>
  );
};
