import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LedgerHealthList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LedgerHealths"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="checked_on" source="checkedOn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="debit_credit_mismatch" source="debitCreditMismatch" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="general_and_payment_ledger_mismatch"
          source="generalAndPaymentLedgerMismatch"
        />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voucher_no" source="voucherNo" />
        <TextField label="voucher_type" source="voucherType" />{" "}
      </Datagrid>
    </List>
  );
};
