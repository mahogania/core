import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AuthorizationRuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="approvingRole" source="approvingRole" />
        <TextField label="approvingUser" source="approvingUser" />
        <TextField label="basedOn" source="basedOn" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customerOrItem" source="customerOrItem" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="masterName" source="masterName" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="systemRole" source="systemRole" />
        <TextField label="systemUser" source="systemUser" />
        <TextField label="toDesignation" source="toDesignation" />
        <TextField label="toEmp" source="toEmp" />
        <TextField label="transaction" source="transaction" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
