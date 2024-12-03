import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DunningTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="dunning_fee" source="dunningFee" />
        <TextInput label="dunning_type" source="dunningType" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="income_account" source="incomeAccount" />
        <NumberInput step={1} label="is_default" source="isDefault" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="rate_of_interest" source="rateOfInterest" />
      </SimpleForm>
    </Edit>
  );
};
