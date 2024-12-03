import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const AssetRepairCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="actionsPerformed"
          multiline
          source="actionsPerformed"
        />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="asset" source="asset" />
        <TextInput label="assetName" source="assetName" />
        <NumberInput
          step={1}
          label="capitalizeRepairCost"
          source="capitalizeRepairCost"
        />
        <TextInput label="company" source="company" />
        <DateTimeInput label="completionDate" source="completionDate" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="downtime" source="downtime" />
        <DateTimeInput label="failureDate" source="failureDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="increaseInAssetLife"
          source="increaseInAssetLife"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="project" source="project" />
        <TextInput label="purchaseInvoice" source="purchaseInvoice" />
        <NumberInput label="repairCost" source="repairCost" />
        <TextInput label="repairStatus" source="repairStatus" />
        <NumberInput
          step={1}
          label="stockConsumption"
          source="stockConsumption"
        />
        <NumberInput label="totalRepairCost" source="totalRepairCost" />
      </SimpleForm>
    </Create>
  );
};
