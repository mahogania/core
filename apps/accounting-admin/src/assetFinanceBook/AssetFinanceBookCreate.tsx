import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const AssetFinanceBookCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          step={1}
          label="dailyProrataBased"
          source="dailyProrataBased"
        />
        <TextInput label="depreciationMethod" source="depreciationMethod" />
        <DateTimeInput
          label="depreciationStartDate"
          source="depreciationStartDate"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          label="expectedValueAfterUsefulLife"
          source="expectedValueAfterUsefulLife"
        />
        <TextInput label="financeBook" source="financeBook" />
        <NumberInput
          step={1}
          label="frequencyOfDepreciation"
          source="frequencyOfDepreciation"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="rateOfDepreciation" source="rateOfDepreciation" />
        <NumberInput
          label="salvageValuePercentage"
          source="salvageValuePercentage"
        />
        <NumberInput step={1} label="shiftBased" source="shiftBased" />
        <NumberInput
          step={1}
          label="totalNumberOfBookedDepreciations"
          source="totalNumberOfBookedDepreciations"
        />
        <NumberInput
          step={1}
          label="totalNumberOfDepreciations"
          source="totalNumberOfDepreciations"
        />
        <NumberInput
          label="valueAfterDepreciation"
          source="valueAfterDepreciation"
        />
      </SimpleForm>
    </Create>
  );
};
