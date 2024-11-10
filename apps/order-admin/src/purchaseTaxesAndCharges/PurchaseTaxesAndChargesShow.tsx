import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseTaxesAndChargesShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accountCurrency" source="accountCurrency" />
        <TextField label="accountHead" source="accountHead" />
        <TextField label="addDeductTax" source="addDeductTax" />
        <TextField label="baseTaxAmount" source="baseTaxAmount" />
        <TextField
          label="baseTaxAmountAfterDiscountAmount"
          source="baseTaxAmountAfterDiscountAmount"
        />
        <TextField label="baseTotal" source="baseTotal" />
        <TextField label="category" source="category" />
        <TextField label="chargeType" source="chargeType" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="includedInPaidAmount" source="includedInPaidAmount" />
        <TextField label="includedInPrintRate" source="includedInPrintRate" />
        <TextField
          label="isTaxWithholdingAccount"
          source="isTaxWithholdingAccount"
        />
        <TextField label="itemWiseTaxDetail" source="itemWiseTaxDetail" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="rate" source="rate" />
        <TextField label="rowId" source="rowId" />
        <TextField label="taxAmount" source="taxAmount" />
        <TextField
          label="taxAmountAfterDiscountAmount"
          source="taxAmountAfterDiscountAmount"
        />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
