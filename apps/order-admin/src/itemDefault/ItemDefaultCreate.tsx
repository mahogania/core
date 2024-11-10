import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemDefaultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="buyingCostCenter" source="buyingCostCenter" />
        <TextInput label="company" source="company" />
        <TextInput
          label="defaultDiscountAccount"
          source="defaultDiscountAccount"
        />
        <TextInput label="defaultPriceList" source="defaultPriceList" />
        <TextInput
          label="defaultProvisionalAccount"
          source="defaultProvisionalAccount"
        />
        <TextInput label="defaultSupplier" source="defaultSupplier" />
        <TextInput label="defaultWarehouse" source="defaultWarehouse" />
        <TextInput
          label="deferredExpenseAccount"
          source="deferredExpenseAccount"
        />
        <TextInput
          label="deferredRevenueAccount"
          source="deferredRevenueAccount"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="expenseAccount" source="expenseAccount" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="incomeAccount" source="incomeAccount" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="sellingCostCenter" source="sellingCostCenter" />
      </SimpleForm>
    </Create>
  );
};
