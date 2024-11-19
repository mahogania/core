import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JournalEntryAccountList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"JournalEntryAccounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="account" source="account" />
        <TextField label="account_currency" source="accountCurrency" />
        <TextField label="account_type" source="accountType" />
        <TextField label="against_account" source="againstAccount" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="credit" source="credit" />
        <TextField
          label="credit_in_account_currency"
          source="creditInAccountCurrency"
        />
        <TextField label="debit" source="debit" />
        <TextField
          label="debit_in_account_currency"
          source="debitInAccountCurrency"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="exchange_rate" source="exchangeRate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_advance" source="isAdvance" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="party" source="party" />
        <TextField label="party_type" source="partyType" />
        <TextField label="project" source="project" />
        <TextField label="reference_detail_no" source="referenceDetailNo" />
        <TextField label="reference_due_date" source="referenceDueDate" />
        <TextField label="reference_name" source="referenceName" />
        <TextField label="reference_type" source="referenceType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_remark" source="userRemark" />{" "}
      </Datagrid>
    </List>
  );
};
