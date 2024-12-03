import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const SalesTaxesAndChargesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accountCurrency" source="accountCurrency" />
        <TextInput label="accountHead" source="accountHead" />
        <NumberInput label="baseTaxAmount" source="baseTaxAmount" />
        <NumberInput
          label="baseTaxAmountAfterDiscountAmount"
          source="baseTaxAmountAfterDiscountAmount"
        />
        <NumberInput label="baseTotal" source="baseTotal" />
        <TextInput label="chargeType" source="chargeType" />
        <TextInput label="costCenter" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          step={1}
          label="dontRecomputeTax"
          source="dontRecomputeTax"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="includedInPaidAmount"
          source="includedInPaidAmount"
        />
        <NumberInput
          step={1}
          label="includedInPrintRate"
          source="includedInPrintRate"
        />
        <TextInput
          label="itemWiseTaxDetail"
          multiline
          source="itemWiseTaxDetail"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="rowId" source="rowId" />
        <NumberInput label="taxAmount" source="taxAmount" />
        <NumberInput
          label="taxAmountAfterDiscountAmount"
          source="taxAmountAfterDiscountAmount"
        />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
