import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AuthorizationRuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="approvingRole" source="approvingRole" />
        <TextInput label="approvingUser" source="approvingUser" />
        <TextInput label="basedOn" source="basedOn" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customerOrItem" source="customerOrItem" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="masterName" source="masterName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="systemRole" source="systemRole" />
        <TextInput label="systemUser" source="systemUser" />
        <TextInput label="toDesignation" source="toDesignation" />
        <TextInput label="toEmp" source="toEmp" />
        <TextInput label="transaction" source="transaction" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
