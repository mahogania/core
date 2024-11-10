import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const LandedCostVoucherCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput
          label="distribute_charges_based_on"
          source="distributeChargesBasedOn"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <NumberInput
          label="total_taxes_and_charges"
          source="totalTaxesAndCharges"
        />
      </SimpleForm>
    </Create>
  );
};
