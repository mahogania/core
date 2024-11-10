import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CustomerGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer_group_name" source="customerGroupName" />
        <TextField label="default_price_list" source="defaultPriceList" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="is_group" source="isGroup" />
        <TextField label="lft" source="lft" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="old_parent" source="oldParent" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_customer_group" source="parentCustomerGroup" />
        <TextField label="payment_terms" source="paymentTerms" />
        <TextField label="rgt" source="rgt" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};