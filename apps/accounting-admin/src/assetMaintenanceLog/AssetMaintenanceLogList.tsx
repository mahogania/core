import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetMaintenanceLogList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetMaintenanceLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actionsPerformed" source="actionsPerformed" />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="assetMaintenance" source="assetMaintenance" />
        <TextField label="assetName" source="assetName" />
        <TextField label="assignToName" source="assignToName" />
        <TextField
          label="certificateAttachement"
          source="certificateAttachement"
        />
        <TextField label="completionDate" source="completionDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="hasCertificate" source="hasCertificate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemName" source="itemName" />
        <TextField label="maintenanceStatus" source="maintenanceStatus" />
        <TextField label="maintenanceType" source="maintenanceType" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="periodicity" source="periodicity" />
        <TextField label="task" source="task" />
        <TextField label="taskName" source="taskName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
