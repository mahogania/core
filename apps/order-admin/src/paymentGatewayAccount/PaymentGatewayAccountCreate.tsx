import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PaymentGatewayAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Creation" source="creation" />
        <TextInput label="Currency" source="currency" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <NumberInput step={1} label="Idx" source="idx" />
        <NumberInput step={1} label="Is Default" source="isDefault" />
        <TextInput label="Message" multiline source="message" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Payment Account" source="paymentAccount" />
        <TextInput label="Payment Channel" source="paymentChannel" />
        <TextInput label="Payment Gateway" source="paymentGateway" />
      </SimpleForm>
    </Create>
  );
};
