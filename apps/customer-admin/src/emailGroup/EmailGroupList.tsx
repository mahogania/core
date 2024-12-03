import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField
          label="add_query_parameters"
          source="addQueryParameters"
        />
        <TextField
          label="confirmation_email_template"
          source="confirmationEmailTemplate"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="title" source="title" />
        <TextField label="total_subscribers" source="totalSubscribers" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="welcome_email_template"
          source="welcomeEmailTemplate"
        />
        <TextField label="welcome_url" source="welcomeUrl" />{" "}
      </Datagrid>
    </List>
  );
};
