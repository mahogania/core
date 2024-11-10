import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ConnectedAppEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="authorization_uri"
          multiline
          source="authorizationUri"
        />
        <TextInput label="client_id" source="clientId" />
        <TextInput label="client_secret" multiline source="clientSecret" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="introspection_uri" source="introspectionUri" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="openid_configuration" source="openidConfiguration" />
        <TextInput label="owner" source="owner" />
        <TextInput label="provider_name" source="providerName" />
        <TextInput label="redirect_uri" source="redirectUri" />
        <TextInput label="revocation_uri" source="revocationUri" />
        <TextInput label="token_uri" source="tokenUri" />
        <TextInput label="userinfo_uri" source="userinfoUri" />
      </SimpleForm>
    </Edit>
  );
};
