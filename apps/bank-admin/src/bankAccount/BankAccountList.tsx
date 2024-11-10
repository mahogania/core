import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BankAccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BankAccounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="account" source="account" />
        <TextField label="account_name" source="accountName" />
        <TextField label="account_subtype" source="accountSubtype" />
        <TextField label="account_type" source="accountType" />
        <TextField label="bank" source="bank" />
        <TextField label="bank_account_no" source="bankAccountNo" />
        <TextField label="branch_code" source="branchCode" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="iban" source="iban" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="integration_id" source="integrationId" />
        <TextField label="is_company_account" source="isCompanyAccount" />
        <TextField label="is_default" source="isDefault" />
        <TextField label="last_integration_date" source="lastIntegrationDate" />
        <TextField label="mask" source="mask" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="party" source="party" />
        <TextField label="party_type" source="partyType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
