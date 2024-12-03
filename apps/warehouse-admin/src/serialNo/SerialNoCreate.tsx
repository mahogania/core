import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const SerialNoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="amc_expiry_date" source="amcExpiryDate" />
        <TextInput label="asset" source="asset" />
        <TextInput label="asset_status" source="assetStatus" />
        <TextInput label="batch_no" source="batchNo" />
        <TextInput label="brand" source="brand" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="employee" source="employee" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <TextInput label="location" source="location" />
        <TextInput label="maintenance_status" source="maintenanceStatus" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="purchase_document_no" source="purchaseDocumentNo" />
        <NumberInput label="purchase_rate" source="purchaseRate" />
        <TextInput label="serial_no" source="serialNo" />
        <TextInput label="status" source="status" />
        <TextInput label="warehouse" source="warehouse" />
        <DateTimeInput
          label="warranty_expiry_date"
          source="warrantyExpiryDate"
        />
        <NumberInput step={1} label="warranty_period" source="warrantyPeriod" />
        <TextInput label="work_order" source="workOrder" />
      </SimpleForm>
    </Create>
  );
};
