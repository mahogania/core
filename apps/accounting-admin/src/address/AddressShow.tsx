import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address_line1" source="addressLine1" />
        <TextField label="address_line2" source="addressLine2" />
        <TextField label="address_title" source="addressTitle" />
        <TextField label="address_type" source="addressType" />
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <TextField label="county" source="county" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_id" source="emailId" />
        <TextField label="fax" source="fax" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_primary_address" source="isPrimaryAddress" />
        <TextField label="is_shipping_address" source="isShippingAddress" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="phone" source="phone" />
        <TextField label="pincode" source="pincode" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
