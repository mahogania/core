import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetCategoryAccountEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="accumulatedDepreciationAccount"
          source="accumulatedDepreciationAccount"
        />
        <TextInput
          label="capitalWorkInProgressAccount"
          source="capitalWorkInProgressAccount"
        />
        <TextInput label="companyName" source="companyName" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput
          label="depreciationExpenseAccount"
          source="depreciationExpenseAccount"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="fixedAssetAccount" source="fixedAssetAccount" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
      </SimpleForm>
    </Edit>
  );
};