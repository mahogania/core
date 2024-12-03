import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentReconciliationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PaymentReconciliations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="bankCashAccount" source="bankCashAccount" />
        <TextField label="company" source="company" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="defaultAdvanceAccount"
          source="defaultAdvanceAccount"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="errorLog" source="errorLog" />
        <TextField label="fromInvoiceDate" source="fromInvoiceDate" />
        <TextField label="fromPaymentDate" source="fromPaymentDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="party" source="party" />
        <TextField label="partyType" source="partyType" />
        <TextField
          label="receivablePayableAccount"
          source="receivablePayableAccount"
        />
        <TextField label="status" source="status" />
        <TextField label="toInvoiceDate" source="toInvoiceDate" />
        <TextField label="toPaymentDate" source="toPaymentDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
