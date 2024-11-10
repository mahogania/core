import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ItemDefaultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="buyingCostCenter" source="buyingCostCenter" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="defaultDiscountAccount"
          source="defaultDiscountAccount"
        />
        <TextField label="defaultPriceList" source="defaultPriceList" />
        <TextField
          label="defaultProvisionalAccount"
          source="defaultProvisionalAccount"
        />
        <TextField label="defaultSupplier" source="defaultSupplier" />
        <TextField label="defaultWarehouse" source="defaultWarehouse" />
        <TextField
          label="deferredExpenseAccount"
          source="deferredExpenseAccount"
        />
        <TextField
          label="deferredRevenueAccount"
          source="deferredRevenueAccount"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expenseAccount" source="expenseAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incomeAccount" source="incomeAccount" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="sellingCostCenter" source="sellingCostCenter" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
