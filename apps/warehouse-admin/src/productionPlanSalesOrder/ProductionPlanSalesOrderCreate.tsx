import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductionPlanSalesOrderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="grand_total" source="grandTotal" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="sales_order" source="salesOrder" />
        <DateTimeInput label="sales_order_date" source="salesOrderDate" />
      </SimpleForm>
    </Create>
  );
};
