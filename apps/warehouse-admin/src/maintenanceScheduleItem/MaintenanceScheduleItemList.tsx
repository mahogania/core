import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MaintenanceScheduleItemList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MaintenanceScheduleItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="end_date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="no_of_visits" source="noOfVisits" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="periodicity" source="periodicity" />
        <TextField label="sales_order" source="salesOrder" />
        <TextField label="sales_person" source="salesPerson" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="start_date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
