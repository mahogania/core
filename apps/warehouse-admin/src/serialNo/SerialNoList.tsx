import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SerialNoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SerialNos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amc_expiry_date" source="amcExpiryDate" />
        <TextField label="asset" source="asset" />
        <TextField label="asset_status" source="assetStatus" />
        <TextField label="batch_no" source="batchNo" />
        <TextField label="brand" source="brand" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="employee" source="employee" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="location" source="location" />
        <TextField label="maintenance_status" source="maintenanceStatus" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="purchase_document_no" source="purchaseDocumentNo" />
        <TextField label="purchase_rate" source="purchaseRate" />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="warranty_expiry_date" source="warrantyExpiryDate" />
        <TextField label="warranty_period" source="warrantyPeriod" />
        <TextField label="work_order" source="workOrder" />{" "}
      </Datagrid>
    </List>
  );
};
