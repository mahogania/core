import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DiscussionTopicList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DiscussionTopics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="owner" source="owner" />
        <TextField label="reference_docname" source="referenceDocname" />
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
