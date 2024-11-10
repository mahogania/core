import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BulkTransactionLogDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BulkTransactionLogDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="date" source="date" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="error_description" source="errorDescription" />
        <TextField label="from_doctype" source="fromDoctype" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="retried" source="retried" />
        <TextField label="time" source="time" />
        <TextField label="to_doctype" source="toDoctype" />
        <TextField label="transaction_name" source="transactionName" />
        <TextField label="transaction_status" source="transactionStatus" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
