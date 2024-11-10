import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CouponCodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CouponCodes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="coupon_code" source="couponCode" />
        <TextField label="coupon_name" source="couponName" />
        <TextField label="coupon_type" source="couponType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="maximum_use" source="maximumUse" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="pricing_rule" source="pricingRule" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="used" source="used" />
        <TextField label="valid_from" source="validFrom" />
        <TextField label="valid_upto" source="validUpto" />{" "}
      </Datagrid>
    </List>
  );
};
