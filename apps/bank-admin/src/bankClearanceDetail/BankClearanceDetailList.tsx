import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BankClearanceDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BankClearanceDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="against_account" source="againstAccount" />
        <TextField label="amount" source="amount" />
        <TextField label="cheque_date" source="chequeDate" />
        <TextField label="cheque_number" source="chequeNumber" />
        <TextField label="clearance_date" source="clearanceDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="payment_document" source="paymentDocument" />
        <TextField label="payment_entry" source="paymentEntry" />
        <TextField label="posting_date" source="postingDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
