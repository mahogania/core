import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AdvanceTaxesAndChargesShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="account_head" source="accountHead" />
        <TextField label="add_deduct_tax" source="addDeductTax" />
        <TextField label="allocated_amount" source="allocatedAmount" />
        <TextField label="base_tax_amount" source="baseTaxAmount" />
        <TextField label="base_total" source="baseTotal" />
        <TextField label="charge_type" source="chargeType" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="included_in_paid_amount"
          source="includedInPaidAmount"
        />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="rate" source="rate" />
        <TextField label="row_id" source="rowId" />
        <TextField label="tax_amount" source="taxAmount" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
