import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DunningShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address_display" source="addressDisplay" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="base_dunning_amount" source="baseDunningAmount" />
        <TextField label="body_text" source="bodyText" />
        <TextField label="closing_text" source="closingText" />
        <TextField label="company" source="company" />
        <TextField label="company_address" source="companyAddress" />
        <TextField
          label="company_address_display"
          source="companyAddressDisplay"
        />
        <TextField label="contact_display" source="contactDisplay" />
        <TextField label="contact_email" source="contactEmail" />
        <TextField label="contact_mobile" source="contactMobile" />
        <TextField label="contact_person" source="contactPerson" />
        <TextField label="conversion_rate" source="conversionRate" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="customer" source="customer" />
        <TextField label="customer_address" source="customerAddress" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dunning_amount" source="dunningAmount" />
        <TextField label="dunning_fee" source="dunningFee" />
        <TextField label="dunning_type" source="dunningType" />
        <TextField label="grand_total" source="grandTotal" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="income_account" source="incomeAccount" />
        <TextField label="language" source="language" />
        <TextField label="letter_head" source="letterHead" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="posting_time" source="postingTime" />
        <TextField label="rate_of_interest" source="rateOfInterest" />
        <TextField label="spacer" source="spacer" />
        <TextField label="status" source="status" />
        <TextField label="total_interest" source="totalInterest" />
        <TextField label="total_outstanding" source="totalOutstanding" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
