import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const MaintenanceScheduleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address_display" multiline source="addressDisplay" />
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="company" source="company" />
        <TextInput label="contact_display" multiline source="contactDisplay" />
        <TextInput label="contact_email" source="contactEmail" />
        <TextInput label="contact_mobile" source="contactMobile" />
        <TextInput label="contact_person" source="contactPerson" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customer_address" source="customerAddress" />
        <TextInput label="customer_group" source="customerGroup" />
        <TextInput label="customer_name" source="customerName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="status" source="status" />
        <TextInput label="territory" source="territory" />
        <DateTimeInput label="transaction_date" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
