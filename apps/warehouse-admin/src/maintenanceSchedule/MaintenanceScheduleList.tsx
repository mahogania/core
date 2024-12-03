import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MaintenanceScheduleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MaintenanceSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="address_display" source="addressDisplay" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="company" source="company" />
        <TextField label="contact_display" source="contactDisplay" />
        <TextField label="contact_email" source="contactEmail" />
        <TextField label="contact_mobile" source="contactMobile" />
        <TextField label="contact_person" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="customer_address" source="customerAddress" />
        <TextField label="customer_group" source="customerGroup" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="status" source="status" />
        <TextField label="territory" source="territory" />
        <TextField label="transaction_date" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};