import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssignmentRuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assignCondition" multiline source="assignCondition" />
        <TextInput label="closeCondition" multiline source="closeCondition" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="documentType" source="documentType" />
        <TextInput label="dueDateBasedOn" source="dueDateBasedOn" />
        <TextInput label="field" source="fieldField" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="lastUser" source="lastUser" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="priority" source="priority" />
        <TextInput label="rule" source="rule" />
        <TextInput
          label="unassignCondition"
          multiline
          source="unassignCondition"
        />
      </SimpleForm>
    </Edit>
  );
};
