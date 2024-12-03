import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="account_currency" source="accountCurrency" />
        <TextField label="account_name" source="accountName" />
        <TextField label="account_number" source="accountNumber" />
        <TextField label="account_type" source="accountType" />
        <TextField label="_assign" source="assign" />
        <TextField label="balance_must_be" source="balanceMustBe" />
        <TextField label="_comments" source="comments" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="freeze_account" source="freezeAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="include_in_gross" source="includeInGross" />
        <TextField label="is_group" source="isGroup" />
        <TextField label="lft" source="lft" />
        <TextField label="_liked_by" source="likedBy" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="old_parent" source="oldParent" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_account" source="parentAccount" />
        <TextField label="report_type" source="reportType" />
        <TextField label="rgt" source="rgt" />
        <TextField label="root_type" source="rootType" />
        <TextField label="tax_rate" source="taxRate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="_user_tags" source="userTags" />{" "}
      </Datagrid>
    </List>
  );
};
