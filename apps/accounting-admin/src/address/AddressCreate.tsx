import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address_line1" source="addressLine1" />
        <TextInput label="address_line2" source="addressLine2" />
        <TextInput label="address_title" source="addressTitle" />
        <TextInput label="address_type" source="addressType" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="county" source="county" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_id" source="emailId" type="email" />
        <TextInput label="fax" source="fax" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="is_primary_address"
          source="isPrimaryAddress"
        />
        <NumberInput
          step={1}
          label="is_shipping_address"
          source="isShippingAddress"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="phone" source="phone" />
        <TextInput label="pincode" source="pincode" />
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Create>
  );
};
