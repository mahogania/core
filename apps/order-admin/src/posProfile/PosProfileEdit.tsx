import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PosProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="accountForChangeAmount"
          source="accountForChangeAmount"
        />
        <NumberInput
          step={1}
          label="allowDiscountChange"
          source="allowDiscountChange"
        />
        <NumberInput
          step={1}
          label="allowRateChange"
          source="allowRateChange"
        />
        <TextInput label="applyDiscountOn" source="applyDiscountOn" />
        <NumberInput
          step={1}
          label="autoAddItemToCart"
          source="autoAddItemToCart"
        />
        <TextInput label="campaign" source="campaign" />
        <TextInput label="company" source="company" />
        <TextInput label="companyAddress" source="companyAddress" />
        <TextInput label="costCenter" source="costCenter" />
        <TextInput label="country" source="country" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customer" source="customer" />
        <NumberInput
          step={1}
          label="disableRoundedTotal"
          source="disableRoundedTotal"
        />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <TextInput label="expenseAccount" source="expenseAccount" />
        <NumberInput step={1} label="hideImages" source="hideImages" />
        <NumberInput
          step={1}
          label="hideUnavailableItems"
          source="hideUnavailableItems"
        />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignorePricingRule"
          source="ignorePricingRule"
        />
        <TextInput label="incomeAccount" source="incomeAccount" />
        <TextInput label="letterHead" source="letterHead" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="printFormat" source="printFormat" />
        <TextInput label="selectPrintHeading" source="selectPrintHeading" />
        <TextInput label="sellingPriceList" source="sellingPriceList" />
        <TextInput label="taxCategory" source="taxCategory" />
        <TextInput label="taxesAndCharges" source="taxesAndCharges" />
        <TextInput label="tcName" source="tcName" />
        <NumberInput step={1} label="updateStock" source="updateStock" />
        <NumberInput
          step={1}
          label="validateStockOnSave"
          source="validateStockOnSave"
        />
        <TextInput label="warehouse" source="warehouse" />
        <TextInput label="writeOffAccount" source="writeOffAccount" />
        <TextInput label="writeOffCostCenter" source="writeOffCostCenter" />
        <NumberInput label="writeOffLimit" source="writeOffLimit" />
      </SimpleForm>
    </Edit>
  );
};
