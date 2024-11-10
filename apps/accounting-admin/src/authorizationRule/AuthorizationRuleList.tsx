import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuthorizationRuleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AuthorizationRules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
