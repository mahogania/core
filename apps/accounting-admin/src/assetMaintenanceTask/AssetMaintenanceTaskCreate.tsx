import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const AssetMaintenanceTaskCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assignTo" source="assignTo" />
        <TextInput label="assignToName" source="assignToName" />
        <NumberInput
          step={1}
          label="certificateRequired"
          source="certificateRequired"
        />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="endDate" source="endDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="lastCompletionDate" source="lastCompletionDate" />
        <TextInput label="maintenanceStatus" source="maintenanceStatus" />
        <TextInput label="maintenanceTask" source="maintenanceTask" />
        <TextInput label="maintenanceType" source="maintenanceType" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="nextDueDate" source="nextDueDate" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="periodicity" source="periodicity" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
