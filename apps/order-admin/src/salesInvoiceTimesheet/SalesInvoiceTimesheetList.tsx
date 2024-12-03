import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalesInvoiceTimesheetList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalesInvoiceTimesheets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="activityType" source="activityType" />
        <TextField label="billingAmount" source="billingAmount" />
        <TextField label="billingHours" source="billingHours" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fromTime" source="fromTime" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="projectName" source="projectName" />
        <TextField label="timeSheet" source="timeSheet" />
        <TextField label="timesheetDetail" source="timesheetDetail" />
        <TextField label="toTime" source="toTime" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
