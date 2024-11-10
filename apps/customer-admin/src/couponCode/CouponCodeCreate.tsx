import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CouponCodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="coupon_code" source="couponCode" />
        <TextInput label="coupon_name" source="couponName" />
        <TextInput label="coupon_type" source="couponType" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="maximum_use" source="maximumUse" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="pricing_rule" source="pricingRule" />
        <NumberInput step={1} label="used" source="used" />
        <DateTimeInput label="valid_from" source="validFrom" />
        <DateTimeInput label="valid_upto" source="validUpto" />
      </SimpleForm>
    </Create>
  );
};
