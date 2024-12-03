import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetValueAdjustmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="asset" source="asset" />
        <TextInput label="assetCategory" source="assetCategory" />
        <TextInput label="company" source="company" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="currentAssetValue" source="currentAssetValue" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="differenceAmount" source="differenceAmount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="financeBook" source="financeBook" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="journalEntry" source="journalEntry" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="newAssetValue" source="newAssetValue" />
        <TextInput label="owner" source="owner" />
      </SimpleForm>
    </Edit>
  );
};
