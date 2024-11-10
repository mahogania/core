import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConnectedAppList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ConnectedApps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="authorization_uri" source="authorizationUri" />
        <TextField label="client_id" source="clientId" />
        <TextField label="client_secret" source="clientSecret" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="introspection_uri" source="introspectionUri" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="openid_configuration" source="openidConfiguration" />
        <TextField label="owner" source="owner" />
        <TextField label="provider_name" source="providerName" />
        <TextField label="redirect_uri" source="redirectUri" />
        <TextField label="revocation_uri" source="revocationUri" />
        <TextField label="token_uri" source="tokenUri" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userinfo_uri" source="userinfoUri" />{" "}
      </Datagrid>
    </List>
  );
};
