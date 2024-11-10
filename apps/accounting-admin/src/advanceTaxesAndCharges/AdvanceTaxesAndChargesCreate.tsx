import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AdvanceTaxesAndChargesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account_head" source="accountHead" />
        <TextInput label="add_deduct_tax" source="addDeductTax" />
        <NumberInput label="allocated_amount" source="allocatedAmount" />
        <NumberInput label="base_tax_amount" source="baseTaxAmount" />
        <NumberInput label="base_total" source="baseTotal" />
        <TextInput label="charge_type" source="chargeType" />
        <TextInput label="cost_center" source="costCenter" />
        <TextInput label="currency" source="currency" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="included_in_paid_amount"
          source="includedInPaidAmount"
        />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="row_id" source="rowId" />
        <NumberInput label="tax_amount" source="taxAmount" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
