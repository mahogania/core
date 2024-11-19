import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PaymentRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account" source="account" />
        <TextInput label="Amended From" source="amendedFrom" />
        <TextInput label="Bank" source="bank" />
        <TextInput label="Bank Account" source="bankAccount" />
        <TextInput label="Bank Account No" source="bankAccountNo" />
        <TextInput label="Branch Code" source="branchCode" />
        <TextInput label="Company" source="company" />
        <TextInput label="Cost Center" source="costCenter" />
        <DateTimeInput label="Creation" source="creation" />
        <TextInput label="Currency" source="currency" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <TextInput label="Email To" source="emailTo" type="email" />
        <NumberInput label="Grand Total" source="grandTotal" />
        <TextInput label="IBAN" source="iban" />
        <NumberInput step={1} label="Idx" source="idx" />
        <NumberInput
          step={1}
          label="Is A Subscription"
          source="isASubscription"
        />
        <NumberInput
          step={1}
          label="Make Sales Invoice"
          source="makeSalesInvoice"
        />
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Mode of Payment" source="modeOfPayment" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <NumberInput step={1} label="Mute Email" source="muteEmail" />
        <TextInput label="Name" source="name" />
        <TextInput label="Naming Series" source="namingSeries" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Party" source="party" />
        <TextInput label="Party Type" source="partyType" />
        <TextInput label="Payment Account" source="paymentAccount" />
        <TextInput label="Payment Channel" source="paymentChannel" />
        <TextInput label="Payment Gateway" source="paymentGateway" />
        <TextInput
          label="Payment Gateway Account"
          source="paymentGatewayAccount"
        />
        <TextInput label="Payment Order" source="paymentOrder" />
        <TextInput label="Payment Request Type" source="paymentRequestType" />
        <TextInput label="Payment Url" source="paymentUrl" />
        <TextInput label="Print Format" source="printFormat" />
        <TextInput label="Project" source="project" />
        <TextInput label="Reference Doctype" source="referenceDoctype" />
        <TextInput label="Reference Name" source="referenceName" />
        <TextInput label="Status" source="status" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Swift Number" source="swiftNumber" />
        <DateTimeInput label="Transaction Date" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
