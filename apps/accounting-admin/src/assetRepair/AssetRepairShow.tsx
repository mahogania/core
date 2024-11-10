import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AssetRepairShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actionsPerformed" source="actionsPerformed" />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="asset" source="asset" />
        <TextField label="assetName" source="assetName" />
        <TextField label="capitalizeRepairCost" source="capitalizeRepairCost" />
        <TextField label="company" source="company" />
        <TextField label="completionDate" source="completionDate" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="downtime" source="downtime" />
        <TextField label="failureDate" source="failureDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="increaseInAssetLife" source="increaseInAssetLife" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="project" source="project" />
        <TextField label="purchaseInvoice" source="purchaseInvoice" />
        <TextField label="repairCost" source="repairCost" />
        <TextField label="repairStatus" source="repairStatus" />
        <TextField label="stockConsumption" source="stockConsumption" />
        <TextField label="totalRepairCost" source="totalRepairCost" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
