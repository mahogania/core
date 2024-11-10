import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetMaintenanceTaskList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetMaintenanceTasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assignTo" source="assignTo" />
        <TextField label="assignToName" source="assignToName" />
        <TextField label="certificateRequired" source="certificateRequired" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="lastCompletionDate" source="lastCompletionDate" />
        <TextField label="maintenanceStatus" source="maintenanceStatus" />
        <TextField label="maintenanceTask" source="maintenanceTask" />
        <TextField label="maintenanceType" source="maintenanceType" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="nextDueDate" source="nextDueDate" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="periodicity" source="periodicity" />
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
