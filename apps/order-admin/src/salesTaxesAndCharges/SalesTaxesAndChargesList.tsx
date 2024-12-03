import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalesTaxesAndChargesList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SalesTaxesAndChargesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="accountCurrency" source="accountCurrency" />
        <TextField label="accountHead" source="accountHead" />
        <TextField label="baseTaxAmount" source="baseTaxAmount" />
        <TextField
          label="baseTaxAmountAfterDiscountAmount"
          source="baseTaxAmountAfterDiscountAmount"
        />
        <TextField label="baseTotal" source="baseTotal" />
        <TextField label="chargeType" source="chargeType" />
        <TextField label="costCenter" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dontRecomputeTax" source="dontRecomputeTax" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="includedInPaidAmount" source="includedInPaidAmount" />
        <TextField label="includedInPrintRate" source="includedInPrintRate" />
        <TextField label="itemWiseTaxDetail" source="itemWiseTaxDetail" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="rate" source="rate" />
        <TextField label="rowId" source="rowId" />
        <TextField label="taxAmount" source="taxAmount" />
        <TextField
          label="taxAmountAfterDiscountAmount"
          source="taxAmountAfterDiscountAmount"
        />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
