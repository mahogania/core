import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetMaintenanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assetCategory" source="assetCategory" />
        <TextInput label="assetName" source="assetName" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemName" source="itemName" />
        <TextInput label="maintenanceManager" source="maintenanceManager" />
        <TextInput
          label="maintenanceManagerName"
          source="maintenanceManagerName"
        />
        <TextInput label="maintenanceTeam" source="maintenanceTeam" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
      </SimpleForm>
    </Create>
  );
};
