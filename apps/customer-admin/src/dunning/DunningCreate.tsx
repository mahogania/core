import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DunningCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address_display" multiline source="addressDisplay" />
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput label="base_dunning_amount" source="baseDunningAmount" />
        <TextInput label="body_text" multiline source="bodyText" />
        <TextInput label="closing_text" multiline source="closingText" />
        <TextInput label="company" source="company" />
        <TextInput label="company_address" source="companyAddress" />
        <TextInput
          label="company_address_display"
          multiline
          source="companyAddressDisplay"
        />
        <TextInput label="contact_display" multiline source="contactDisplay" />
        <TextInput label="contact_email" source="contactEmail" />
        <TextInput label="contact_mobile" multiline source="contactMobile" />
        <TextInput label="contact_person" source="contactPerson" />
        <NumberInput label="conversion_rate" source="conversionRate" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customer_address" source="customerAddress" />
        <TextInput label="customer_name" source="customerName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="dunning_amount" source="dunningAmount" />
        <NumberInput label="dunning_fee" source="dunningFee" />
        <TextInput label="dunning_type" source="dunningType" />
        <NumberInput label="grand_total" source="grandTotal" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="income_account" source="incomeAccount" />
        <TextInput label="language" source="language" />
        <TextInput label="letter_head" source="letterHead" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <DateTimeInput label="posting_time" source="postingTime" />
        <NumberInput label="rate_of_interest" source="rateOfInterest" />
        <TextInput label="spacer" source="spacer" />
        <TextInput label="status" source="status" />
        <NumberInput label="total_interest" source="totalInterest" />
        <NumberInput label="total_outstanding" source="totalOutstanding" />
      </SimpleForm>
    </Create>
  );
};
