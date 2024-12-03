import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ClosingStockBalanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="from_date" source="fromDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="include_uom" source="includeUom" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="to_date" source="toDate" />
        <TextInput label="warehouse" source="warehouse" />
        <TextInput label="warehouse_type" source="warehouseType" />
      </SimpleForm>
    </Create>
  );
};
