import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account_manager" source="accountManager" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput
          label="customer_details"
          multiline
          source="customerDetails"
        />
        <TextInput label="customer_group" source="customerGroup" />
        <TextInput label="customer_name" source="customerName" />
        <TextInput label="customer_pos_id" source="customerPosId" />
        <TextInput
          label="customer_primary_address"
          source="customerPrimaryAddress"
        />
        <TextInput
          label="customer_primary_contact"
          source="customerPrimaryContact"
        />
        <TextInput label="customer_type" source="customerType" />
        <TextInput label="default_bank_account" source="defaultBankAccount" />
        <NumberInput
          label="default_commission_rate"
          source="defaultCommissionRate"
        />
        <TextInput label="default_currency" source="defaultCurrency" />
        <TextInput label="default_price_list" source="defaultPriceList" />
        <TextInput label="default_sales_partner" source="defaultSalesPartner" />
        <BooleanInput label="disabled" source="disabled" />
        <BooleanInput label="dn_required" source="dnRequired" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_id" source="emailId" type="email" />
        <TextInput label="gender" source="gender" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <TextInput label="industry" source="industry" />
        <BooleanInput label="is_frozen" source="isFrozen" />
        <BooleanInput
          label="is_internal_customer"
          source="isInternalCustomer"
        />
        <TextInput label="language" source="language" />
        <TextInput label="lead_name" source="leadName" />
        <TextInput label="loyalty_program" source="loyaltyProgram" />
        <TextInput label="loyalty_program_tier" source="loyaltyProgramTier" />
        <TextInput label="market_segment" source="marketSegment" />
        <TextInput label="mobile_no" source="mobileNo" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="opportunity_name" source="opportunityName" />
        <TextInput label="owner" source="owner" />
        <TextInput label="payment_terms" source="paymentTerms" />
        <TextInput label="primary_address" multiline source="primaryAddress" />
        <TextInput label="prospect_name" source="prospectName" />
        <TextInput label="represents_company" source="representsCompany" />
        <TextInput label="salutation" source="salutation" />
        <BooleanInput label="so_required" source="soRequired" />
        <TextInput label="tax_category" source="taxCategory" />
        <TextInput label="tax_id" source="taxId" />
        <TextInput
          label="tax_withholding_category"
          source="taxWithholdingCategory"
        />
        <TextInput label="territory" source="territory" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
