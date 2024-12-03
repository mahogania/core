import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CashierClosingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CashierClosings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custody" source="custody" />
        <TextField label="date" source="date" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expense" source="expense" />
        <TextField label="from_time" source="fromTime" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="net_amount" source="netAmount" />
        <TextField label="outstanding_amount" source="outstandingAmount" />
        <TextField label="owner" source="owner" />
        <TextField label="returns" source="returns" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />{" "}
      </Datagrid>
    </List>
  );
};
