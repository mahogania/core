import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SalesPartnerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="commissionRate" source="commissionRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="introduction" source="introduction" />
        <TextField label="logo" source="logo" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="partnerName" source="partnerName" />
        <TextField label="partnerType" source="partnerType" />
        <TextField label="partnerWebsite" source="partnerWebsite" />
        <TextField label="referralCode" source="referralCode" />
        <TextField label="route" source="route" />
        <TextField label="showInWebsite" source="showInWebsite" />
        <TextField label="territory" source="territory" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
