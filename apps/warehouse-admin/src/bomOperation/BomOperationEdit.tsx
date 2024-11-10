import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BomOperationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="baseCostPerUnit" source="baseCostPerUnit" />
        <NumberInput label="baseHourRate" source="baseHourRate" />
        <NumberInput label="baseOperatingCost" source="baseOperatingCost" />
        <NumberInput step={1} label="batchSize" source="batchSize" />
        <NumberInput label="costPerUnit" source="costPerUnit" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput label="fixedTime" source="fixedTime" />
        <NumberInput label="hourRate" source="hourRate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="operatingCost" source="operatingCost" />
        <TextInput label="operation" source="operation" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput step={1} label="sequenceId" source="sequenceId" />
        <BooleanInput
          label="setCostBasedOnBomQty"
          source="setCostBasedOnBomQty"
        />
        <NumberInput label="timeInMins" source="timeInMins" />
        <TextInput label="workstation" source="workstation" />
        <TextInput label="workstationType" source="workstationType" />
      </SimpleForm>
    </Edit>
  );
};
