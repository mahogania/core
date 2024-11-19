import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PosInvoiceMergeLogList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"POSInvoiceMergeLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField
          label="consolidatedCreditNote"
          source="consolidatedCreditNote"
        />
        <TextField label="consolidatedInvoice" source="consolidatedInvoice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="customerGroup" source="customerGroup" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="mergeInvoicesBasedOn" source="mergeInvoicesBasedOn" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="posClosingEntry" source="posClosingEntry" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="postingTime" source="postingTime" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
