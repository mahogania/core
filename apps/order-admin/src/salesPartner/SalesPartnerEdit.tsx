import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SalesPartnerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="commissionRate" source="commissionRate" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="introduction" multiline source="introduction" />
        <TextInput label="logo" multiline source="logo" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="partnerName" source="partnerName" />
        <TextInput label="partnerType" source="partnerType" />
        <TextInput label="partnerWebsite" source="partnerWebsite" />
        <TextInput label="referralCode" source="referralCode" />
        <TextInput label="route" source="route" />
        <NumberInput step={1} label="showInWebsite" source="showInWebsite" />
        <TextInput label="territory" source="territory" />
      </SimpleForm>
    </Edit>
  );
};
