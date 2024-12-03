import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentGatewayAccountList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Payment Gateway Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Currency" source="currency" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Is Default" source="isDefault" />
        <TextField label="Message" source="message" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <TextField label="Payment Account" source="paymentAccount" />
        <TextField label="Payment Channel" source="paymentChannel" />
        <TextField label="Payment Gateway" source="paymentGateway" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
