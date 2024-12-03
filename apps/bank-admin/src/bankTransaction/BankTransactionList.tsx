import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BankTransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BankTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="allocated_amount" source="allocatedAmount" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField
          label="bank_party_account_number"
          source="bankPartyAccountNumber"
        />
        <TextField label="bank_party_iban" source="bankPartyIban" />
        <TextField label="bank_party_name" source="bankPartyName" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="date" source="date" />
        <TextField label="deposit" source="deposit" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="party" source="party" />
        <TextField label="party_type" source="partyType" />
        <TextField label="reference_number" source="referenceNumber" />
        <TextField label="status" source="status" />
        <TextField label="transaction_id" source="transactionId" />
        <TextField label="transaction_type" source="transactionType" />
        <TextField label="unallocated_amount" source="unallocatedAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="withdrawal" source="withdrawal" />{" "}
      </Datagrid>
    </List>
  );
};
