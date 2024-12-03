import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentReconciliationLogAllocationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PaymentReconciliationLogAllocations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="allocatedAmount" source="allocatedAmount" />
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="differenceAccount" source="differenceAccount" />
        <TextField label="differenceAmount" source="differenceAmount" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="exchangeRate" source="exchangeRate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="invoiceNumber" source="invoiceNumber" />
        <TextField label="invoiceType" source="invoiceType" />
        <TextField label="isAdvance" source="isAdvance" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="reconciled" source="reconciled" />
        <TextField label="referenceName" source="referenceName" />
        <TextField label="referenceRow" source="referenceRow" />
        <TextField label="referenceType" source="referenceType" />
        <TextField label="unreconciledAmount" source="unreconciledAmount" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
