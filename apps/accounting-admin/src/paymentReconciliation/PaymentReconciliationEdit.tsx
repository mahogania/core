import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PaymentReconciliationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <TextInput label="bankCashAccount" source="bankCashAccount" />
        <TextInput label="company" source="company" />
        <TextInput label="costCenter" source="costCenter" />
        <TextInput
          label="defaultAdvanceAccount"
          source="defaultAdvanceAccount"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="errorLog" multiline source="errorLog" />
        <DateTimeInput label="fromInvoiceDate" source="fromInvoiceDate" />
        <DateTimeInput label="fromPaymentDate" source="fromPaymentDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="party" source="party" />
        <TextInput label="partyType" source="partyType" />
        <TextInput
          label="receivablePayableAccount"
          source="receivablePayableAccount"
        />
        <TextInput label="status" source="status" />
        <DateTimeInput label="toInvoiceDate" source="toInvoiceDate" />
        <DateTimeInput label="toPaymentDate" source="toPaymentDate" />
      </SimpleForm>
    </Edit>
  );
};
