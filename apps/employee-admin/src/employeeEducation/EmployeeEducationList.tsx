import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeEducationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmployeeEducations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="class_per" source="classPer" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="level" source="level" />
        <TextField label="maj_opt_subj" source="majOptSubj" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qualification" source="qualification" />
        <TextField label="school_univ" source="schoolUniv" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year_of_passing" source="yearOfPassing" />{" "}
      </Datagrid>
    </List>
  );
};
