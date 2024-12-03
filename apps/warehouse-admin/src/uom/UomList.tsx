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

export const UomList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"UOMS"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified_by" source="modifiedBy" />
        <BooleanField label="must_be_whole_number" source="mustBeWholeNumber" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="uom_name" source="uomName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
