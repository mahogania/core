import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentReconciliationLogList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PaymentReconciliationLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="allocated" source="allocated" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="errorLog" source="errorLog" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="processPr" source="processPr" />
        <TextField label="reconciled" source="reconciled" />
        <TextField label="reconciledEntries" source="reconciledEntries" />
        <TextField label="status" source="status" />
        <TextField label="totalAllocations" source="totalAllocations" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
