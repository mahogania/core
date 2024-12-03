import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="address" source="address" />
        <TextField label="company_name" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="department" source="department" />
        <TextField label="designation" source="designation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_id" source="emailId" />
        <TextField label="first_name" source="firstName" />
        <TextField label="full_name" source="fullName" />
        <TextField label="gender" source="gender" />
        <TextField label="google_contacts" source="googleContacts" />
        <TextField label="google_contacts_id" source="googleContactsId" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <BooleanField label="is_primary_contact" source="isPrimaryContact" />
        <TextField label="last_name" source="lastName" />
        <TextField label="middle_name" source="middleName" />
        <TextField label="mobile_no" source="mobileNo" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="phone" source="phone" />
        <BooleanField
          label="pulled_from_google_contacts"
          source="pulledFromGoogleContacts"
        />
        <TextField label="salutation" source="salutation" />
        <TextField label="status" source="status" />
        <BooleanField
          label="sync_with_google_contacts"
          source="syncWithGoogleContacts"
        />
        <BooleanField label="unsubscribed" source="unsubscribed" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />{" "}
      </Datagrid>
    </List>
  );
};
