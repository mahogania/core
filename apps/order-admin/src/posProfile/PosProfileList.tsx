import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PosProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"POSProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="accountForChangeAmount"
          source="accountForChangeAmount"
        />
        <TextField label="allowDiscountChange" source="allowDiscountChange" />
        <TextField label="allowRateChange" source="allowRateChange" />
        <TextField label="applyDiscountOn" source="applyDiscountOn" />
        <TextField label="autoAddItemToCart" source="autoAddItemToCart" />
        <TextField label="campaign" source="campaign" />
        <TextField label="company" source="company" />
        <TextField label="companyAddress" source="companyAddress" />
        <TextField label="costCenter" source="costCenter" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="customer" source="customer" />
        <TextField label="disableRoundedTotal" source="disableRoundedTotal" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="expenseAccount" source="expenseAccount" />
        <TextField label="hideImages" source="hideImages" />
        <TextField label="hideUnavailableItems" source="hideUnavailableItems" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ignorePricingRule" source="ignorePricingRule" />
        <TextField label="incomeAccount" source="incomeAccount" />
        <TextField label="letterHead" source="letterHead" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="printFormat" source="printFormat" />
        <TextField label="selectPrintHeading" source="selectPrintHeading" />
        <TextField label="sellingPriceList" source="sellingPriceList" />
        <TextField label="taxCategory" source="taxCategory" />
        <TextField label="taxesAndCharges" source="taxesAndCharges" />
        <TextField label="tcName" source="tcName" />
        <TextField label="updateStock" source="updateStock" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validateStockOnSave" source="validateStockOnSave" />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="writeOffAccount" source="writeOffAccount" />
        <TextField label="writeOffCostCenter" source="writeOffCostCenter" />
        <TextField label="writeOffLimit" source="writeOffLimit" />{" "}
      </Datagrid>
    </List>
  );
};
