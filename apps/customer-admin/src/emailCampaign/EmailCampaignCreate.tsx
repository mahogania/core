import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EmailCampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="campaign_name" source="campaignName" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_campaign_for" source="emailCampaignFor" />
        <DateTimeInput label="end_date" source="endDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="start_date" source="startDate" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
