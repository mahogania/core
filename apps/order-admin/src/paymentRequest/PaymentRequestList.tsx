import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Payment Requests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Account" source="account" />
        <TextField label="Amended From" source="amendedFrom" />
        <TextField label="Bank" source="bank" />
        <TextField label="Bank Account" source="bankAccount" />
        <TextField label="Bank Account No" source="bankAccountNo" />
        <TextField label="Branch Code" source="branchCode" />
        <TextField label="Company" source="company" />
        <TextField label="Cost Center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Currency" source="currency" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="Email To" source="emailTo" />
        <TextField label="Grand Total" source="grandTotal" />
        <TextField label="IBAN" source="iban" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Is A Subscription" source="isASubscription" />
        <TextField label="Make Sales Invoice" source="makeSalesInvoice" />
        <TextField label="Message" source="message" />
        <TextField label="Mode of Payment" source="modeOfPayment" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Mute Email" source="muteEmail" />
        <TextField label="Name" source="name" />
        <TextField label="Naming Series" source="namingSeries" />
        <TextField label="Owner" source="owner" />
        <TextField label="Party" source="party" />
        <TextField label="Party Type" source="partyType" />
        <TextField label="Payment Account" source="paymentAccount" />
        <TextField label="Payment Channel" source="paymentChannel" />
        <TextField label="Payment Gateway" source="paymentGateway" />
        <TextField
          label="Payment Gateway Account"
          source="paymentGatewayAccount"
        />
        <TextField label="Payment Order" source="paymentOrder" />
        <TextField label="Payment Request Type" source="paymentRequestType" />
        <TextField label="Payment Url" source="paymentUrl" />
        <TextField label="Print Format" source="printFormat" />
        <TextField label="Project" source="project" />
        <TextField label="Reference Doctype" source="referenceDoctype" />
        <TextField label="Reference Name" source="referenceName" />
        <TextField label="Status" source="status" />
        <TextField label="Subject" source="subject" />
        <TextField label="Swift Number" source="swiftNumber" />
        <TextField label="Transaction Date" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
