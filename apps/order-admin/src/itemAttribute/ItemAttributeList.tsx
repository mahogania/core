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

export const ItemAttributeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemAttributes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="attributeName" source="attributeName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fromRange" source="fromRange" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="increment" source="increment" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <BooleanField label="numericValues" source="numericValues" />
        <TextField label="owner" source="owner" />
        <TextField label="toRange" source="toRange" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
