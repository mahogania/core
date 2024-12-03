import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PosInvoiceReferenceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"POSInvoiceReferences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="grandTotal" source="grandTotal" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="isReturn" source="isReturn" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="posInvoice" source="posInvoice" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="returnAgainst" source="returnAgainst" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
