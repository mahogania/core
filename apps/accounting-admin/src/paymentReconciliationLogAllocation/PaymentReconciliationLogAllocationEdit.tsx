import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PaymentReconciliationLogAllocationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="allocatedAmount" source="allocatedAmount" />
        <NumberInput label="amount" source="amount" />
        <TextInput label="currency" source="currency" />
        <TextInput label="differenceAccount" source="differenceAccount" />
        <NumberInput label="differenceAmount" source="differenceAmount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="exchangeRate" source="exchangeRate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="invoiceNumber" source="invoiceNumber" />
        <TextInput label="invoiceType" source="invoiceType" />
        <TextInput label="isAdvance" source="isAdvance" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput step={1} label="reconciled" source="reconciled" />
        <TextInput label="referenceName" source="referenceName" />
        <TextInput label="referenceRow" source="referenceRow" />
        <TextInput label="referenceType" source="referenceType" />
        <NumberInput label="unreconciledAmount" source="unreconciledAmount" />
      </SimpleForm>
    </Edit>
  );
};
