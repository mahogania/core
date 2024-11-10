import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DeliveryStopList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DeliveryStops"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <BooleanField label="visited" source="visited" />{" "}
      </Datagrid>
    </List>
  );
};
