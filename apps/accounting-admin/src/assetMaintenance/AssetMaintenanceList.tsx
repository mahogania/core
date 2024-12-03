import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetMaintenanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetMaintenances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assetCategory" source="assetCategory" />
        <TextField label="assetName" source="assetName" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemName" source="itemName" />
        <TextField label="maintenanceManager" source="maintenanceManager" />
        <TextField
          label="maintenanceManagerName"
          source="maintenanceManagerName"
        />
        <TextField label="maintenanceTeam" source="maintenanceTeam" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
