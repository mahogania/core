import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemPriceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemPrices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="batchNo" source="batchNo" />
        <TextField label="brand" source="brand" />
        <BooleanField label="buying" source="buying" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="customer" source="customer" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="itemCode" source="itemCode" />
        <TextField label="itemDescription" source="itemDescription" />
        <TextField label="itemName" source="itemName" />
        <TextField label="leadTimeDays" source="leadTimeDays" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="note" source="note" />
        <TextField label="owner" source="owner" />
        <TextField label="packingUnit" source="packingUnit" />
        <TextField label="priceList" source="priceList" />
        <TextField label="priceListRate" source="priceListRate" />
        <TextField label="reference" source="reference" />
        <BooleanField label="selling" source="selling" />
        <TextField label="supplier" source="supplier" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validFrom" source="validFrom" />
        <TextField label="validUpto" source="validUpto" />{" "}
      </Datagrid>
    </List>
  );
};
