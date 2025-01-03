import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentOrderReferenceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Payment Order References"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Account" source="account" />
        <TextField label="Amount" source="amount" />
        <TextField label="Bank Account" source="bankAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Mode of Payment" source="modeOfPayment" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <TextField label="Parent" source="parent" />
        <TextField label="Parentfield" source="parentfield" />
        <TextField label="Parenttype" source="parenttype" />
        <TextField label="Payment Reference" source="paymentReference" />
        <TextField label="Payment Request" source="paymentRequest" />
        <TextField label="Reference Doctype" source="referenceDoctype" />
        <TextField label="Reference Name" source="referenceName" />
        <TextField label="Supplier" source="supplier" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
