import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AssignmentRuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="assignCondition" source="assignCondition" />
        <TextField label="closeCondition" source="closeCondition" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="documentType" source="documentType" />
        <TextField label="dueDateBasedOn" source="dueDateBasedOn" />
        <TextField label="field" source="fieldField" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="lastUser" source="lastUser" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="priority" source="priority" />
        <TextField label="rule" source="rule" />
        <TextField label="unassignCondition" source="unassignCondition" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
