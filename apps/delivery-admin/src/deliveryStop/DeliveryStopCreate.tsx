import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const DeliveryStopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="contact" source="contact" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <TextInput
          label="customer_address"
          multiline
          source="customerAddress"
        />
        <TextInput
          label="customer_contact"
          multiline
          source="customerContact"
        />
        <TextInput label="delivery_note" source="deliveryNote" />
        <TextInput label="details" multiline source="details" />
        <NumberInput label="distance" source="distance" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_sent_to" source="emailSentTo" />
        <DateTimeInput label="estimated_arrival" source="estimatedArrival" />
        <NumberInput label="grand_total" source="grandTotal" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lng" source="lng" />
        <BooleanInput label="locked" source="locked" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="uom" source="uom" />
        <BooleanInput label="visited" source="visited" />
      </SimpleForm>
    </Create>
  );
};
