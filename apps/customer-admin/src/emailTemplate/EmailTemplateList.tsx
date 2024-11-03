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

export const EmailTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="response" source="response" />
        <TextField label="response_html" source="responseHtml" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="use_html" source="useHtml" />{" "}
      </Datagrid>
    </List>
  );
};
