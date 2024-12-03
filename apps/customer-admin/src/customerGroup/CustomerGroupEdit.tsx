import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const CustomerGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer_group_name" source="customerGroupName" />
        <TextInput label="default_price_list" source="defaultPriceList" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput label="is_group" source="isGroup" />
        <NumberInput step={1} label="lft" source="lft" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="old_parent" source="oldParent" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_customer_group" source="parentCustomerGroup" />
        <TextInput label="payment_terms" source="paymentTerms" />
        <NumberInput step={1} label="rgt" source="rgt" />
      </SimpleForm>
    </Edit>
  );
};
