import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetMaintenanceLogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="actionsPerformed"
          multiline
          source="actionsPerformed"
        />
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="assetMaintenance" source="assetMaintenance" />
        <TextInput label="assetName" source="assetName" />
        <TextInput label="assignToName" source="assignToName" />
        <TextInput
          label="certificateAttachement"
          multiline
          source="certificateAttachement"
        />
        <DateTimeInput label="completionDate" source="completionDate" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <NumberInput step={1} label="hasCertificate" source="hasCertificate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemName" source="itemName" />
        <TextInput label="maintenanceStatus" source="maintenanceStatus" />
        <TextInput label="maintenanceType" source="maintenanceType" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="periodicity" source="periodicity" />
        <TextInput label="task" source="task" />
        <TextInput label="taskName" source="taskName" />
      </SimpleForm>
    </Create>
  );
};
