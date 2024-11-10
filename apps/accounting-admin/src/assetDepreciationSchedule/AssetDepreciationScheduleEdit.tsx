import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AssetDepreciationScheduleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="asset" source="asset" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          step={1}
          label="dailyProrataBased"
          source="dailyProrataBased"
        />
        <TextInput label="depreciationMethod" source="depreciationMethod" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          label="expectedValueAfterUsefulLife"
          source="expectedValueAfterUsefulLife"
        />
        <TextInput label="financeBook" source="financeBook" />
        <NumberInput step={1} label="financeBookId" source="financeBookId" />
        <NumberInput
          step={1}
          label="frequencyOfDepreciation"
          source="frequencyOfDepreciation"
        />
        <NumberInput label="grossPurchaseAmount" source="grossPurchaseAmount" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="namingSeries" source="namingSeries" />
        <TextInput label="notes" multiline source="notes" />
        <NumberInput
          label="openingAccumulatedDepreciation"
          source="openingAccumulatedDepreciation"
        />
        <NumberInput
          step={1}
          label="openingNumberOfBookedDepreciations"
          source="openingNumberOfBookedDepreciations"
        />
        <TextInput label="owner" source="owner" />
        <NumberInput label="rateOfDepreciation" source="rateOfDepreciation" />
        <NumberInput step={1} label="shiftBased" source="shiftBased" />
        <TextInput label="status" source="status" />
        <NumberInput
          step={1}
          label="totalNumberOfDepreciations"
          source="totalNumberOfDepreciations"
        />
      </SimpleForm>
    </Edit>
  );
};
