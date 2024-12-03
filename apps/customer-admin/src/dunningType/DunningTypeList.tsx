import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DunningTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DunningTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="company" source="company" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dunning_fee" source="dunningFee" />
        <TextField label="dunning_type" source="dunningType" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="income_account" source="incomeAccount" />
        <TextField label="is_default" source="isDefault" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="rate_of_interest" source="rateOfInterest" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
