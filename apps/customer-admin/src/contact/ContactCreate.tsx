import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="company_name" source="companyName" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="department" source="department" />
        <TextInput label="designation" source="designation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_id" source="emailId" type="email" />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="full_name" source="fullName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="google_contacts" source="googleContacts" />
        <TextInput label="google_contacts_id" source="googleContactsId" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <BooleanInput label="is_primary_contact" source="isPrimaryContact" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="middle_name" source="middleName" />
        <TextInput label="mobile_no" source="mobileNo" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="phone" source="phone" />
        <BooleanInput
          label="pulled_from_google_contacts"
          source="pulledFromGoogleContacts"
        />
        <TextInput label="salutation" source="salutation" />
        <TextInput label="status" source="status" />
        <BooleanInput
          label="sync_with_google_contacts"
          source="syncWithGoogleContacts"
        />
        <BooleanInput label="unsubscribed" source="unsubscribed" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
