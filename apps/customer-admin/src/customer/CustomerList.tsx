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

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="account_manager" source="accountManager" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer_details" source="customerDetails" />
        <TextField label="customer_group" source="customerGroup" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="customer_pos_id" source="customerPosId" />
        <TextField
          label="customer_primary_address"
          source="customerPrimaryAddress"
        />
        <TextField
          label="customer_primary_contact"
          source="customerPrimaryContact"
        />
        <TextField label="customer_type" source="customerType" />
        <TextField label="default_bank_account" source="defaultBankAccount" />
        <TextField
          label="default_commission_rate"
          source="defaultCommissionRate"
        />
        <TextField label="default_currency" source="defaultCurrency" />
        <TextField label="default_price_list" source="defaultPriceList" />
        <TextField label="default_sales_partner" source="defaultSalesPartner" />
        <BooleanField label="disabled" source="disabled" />
        <BooleanField label="dn_required" source="dnRequired" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_id" source="emailId" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="industry" source="industry" />
        <BooleanField label="is_frozen" source="isFrozen" />
        <BooleanField
          label="is_internal_customer"
          source="isInternalCustomer"
        />
        <TextField label="language" source="language" />
        <TextField label="lead_name" source="leadName" />
        <TextField label="loyalty_program" source="loyaltyProgram" />
        <TextField label="loyalty_program_tier" source="loyaltyProgramTier" />
        <TextField label="market_segment" source="marketSegment" />
        <TextField label="mobile_no" source="mobileNo" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="opportunity_name" source="opportunityName" />
        <TextField label="owner" source="owner" />
        <TextField label="payment_terms" source="paymentTerms" />
        <TextField label="primary_address" source="primaryAddress" />
        <TextField label="prospect_name" source="prospectName" />
        <TextField label="represents_company" source="representsCompany" />
        <TextField label="salutation" source="salutation" />
        <BooleanField label="so_required" source="soRequired" />
        <TextField label="tax_category" source="taxCategory" />
        <TextField label="tax_id" source="taxId" />
        <TextField
          label="tax_withholding_category"
          source="taxWithholdingCategory"
        />
        <TextField label="territory" source="territory" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />{" "}
      </Datagrid>
    </List>
  );
};
