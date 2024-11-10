import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DeliveryStopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="customer_address" source="customerAddress" />
        <TextField label="customer_contact" source="customerContact" />
        <TextField label="delivery_note" source="deliveryNote" />
        <TextField label="details" source="details" />
        <TextField label="distance" source="distance" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_sent_to" source="emailSentTo" />
        <TextField label="estimated_arrival" source="estimatedArrival" />
        <TextField label="grand_total" source="grandTotal" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="lat" source="lat" />
        <TextField label="lng" source="lng" />
        <BooleanField label="locked" source="locked" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="visited" source="visited" />
      </SimpleShowLayout>
    </Show>
  );
};
