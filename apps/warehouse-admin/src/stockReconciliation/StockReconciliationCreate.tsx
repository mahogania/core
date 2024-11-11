import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const StockReconciliationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="difference_amount" source="differenceAmount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="expense_account" source="expenseAccount" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <DateTimeInput label="posting_time" source="postingTime" />
        <TextInput label="purpose" source="purpose" />
        <TextInput label="scan_barcode" source="scanBarcode" />
        <BooleanInput label="scan_mode" source="scanMode" />
        <BooleanInput label="set_posting_time" source="setPostingTime" />
        <TextInput label="set_warehouse" source="setWarehouse" />
      </SimpleForm>
    </Create>
  );
};
