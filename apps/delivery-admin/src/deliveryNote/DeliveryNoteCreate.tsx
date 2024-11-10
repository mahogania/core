import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const DeliveryNoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="additional_discount_percentage"
          source="additionalDiscountPercentage"
        />
        <TextInput label="address_display" multiline source="addressDisplay" />
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput
          label="amount_eligible_for_commission"
          source="amountEligibleForCommission"
        />
        <TextInput label="apply_discount_on" source="applyDiscountOn" />
        <TextInput label="auto_repeat" source="autoRepeat" />
        <NumberInput label="base_discount_amount" source="baseDiscountAmount" />
        <NumberInput label="base_grand_total" source="baseGrandTotal" />
        <TextInput label="base_in_words" source="baseInWords" />
        <NumberInput label="base_net_total" source="baseNetTotal" />
        <NumberInput label="base_rounded_total" source="baseRoundedTotal" />
        <NumberInput
          label="base_rounding_adjustment"
          source="baseRoundingAdjustment"
        />
        <NumberInput label="base_total" source="baseTotal" />
        <NumberInput
          label="base_total_taxes_and_charges"
          source="baseTotalTaxesAndCharges"
        />
        <TextInput label="campaign" source="campaign" />
        <NumberInput label="commission_rate" source="commissionRate" />
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
        <TextInput label="customer_group" source="customerGroup" />
        <TextInput label="customer_name" source="customerName" />
        <BooleanInput
          label="disable_rounded_total"
          source="disableRoundedTotal"
        />
        <NumberInput label="discount_amount" source="discountAmount" />
        <TextInput
          label="dispatch_address"
          multiline
          source="dispatchAddress"
        />
        <TextInput label="dispatch_address_name" source="dispatchAddressName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="driver" source="driver" />
        <TextInput label="driver_name" source="driverName" />
        <TextInput label="excise_page" source="excisePage" />
        <NumberInput label="grand_total" source="grandTotal" />
        <BooleanInput label="group_same_items" source="groupSameItems" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput label="ignore_pricing_rule" source="ignorePricingRule" />
        <TextInput label="in_words" source="inWords" />
        <TextInput label="incoterm" source="incoterm" />
        <TextInput label="installation_status" source="installationStatus" />
        <TextInput label="instructions" multiline source="instructions" />
        <TextInput
          label="inter_company_reference"
          source="interCompanyReference"
        />
        <BooleanInput
          label="is_internal_customer"
          source="isInternalCustomer"
        />
        <BooleanInput label="is_return" source="isReturn" />
        <BooleanInput label="issue_credit_note" source="issueCreditNote" />
        <TextInput label="language" source="language" />
        <TextInput label="letter_head" source="letterHead" />
        <DateTimeInput label="lr_date" source="lrDate" />
        <TextInput label="lr_no" source="lrNo" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="named_place" source="namedPlace" />
        <TextInput label="naming_series" source="namingSeries" />
        <NumberInput label="net_total" source="netTotal" />
        <TextInput
          label="other_charges_calculation"
          multiline
          source="otherChargesCalculation"
        />
        <TextInput label="owner" source="owner" />
        <NumberInput label="per_billed" source="perBilled" />
        <NumberInput label="per_installed" source="perInstalled" />
        <NumberInput label="per_returned" source="perReturned" />
        <TextInput label="pick_list" source="pickList" />
        <NumberInput label="plc_conversion_rate" source="plcConversionRate" />
        <DateTimeInput label="po_date" source="poDate" />
        <TextInput label="po_no" multiline source="poNo" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <DateTimeInput label="posting_time" source="postingTime" />
        <TextInput label="price_list_currency" source="priceListCurrency" />
        <BooleanInput
          label="print_without_amount"
          source="printWithoutAmount"
        />
        <TextInput label="project" source="project" />
        <TextInput label="represents_company" source="representsCompany" />
        <TextInput label="return_against" source="returnAgainst" />
        <NumberInput label="rounded_total" source="roundedTotal" />
        <NumberInput label="rounding_adjustment" source="roundingAdjustment" />
        <TextInput label="sales_partner" source="salesPartner" />
        <TextInput label="scan_barcode" source="scanBarcode" />
        <TextInput label="select_print_heading" source="selectPrintHeading" />
        <TextInput label="selling_price_list" source="sellingPriceList" />
        <BooleanInput label="set_posting_time" source="setPostingTime" />
        <TextInput label="set_target_warehouse" source="setTargetWarehouse" />
        <TextInput label="set_warehouse" source="setWarehouse" />
        <TextInput
          label="shipping_address"
          multiline
          source="shippingAddress"
        />
        <TextInput label="shipping_address_name" source="shippingAddressName" />
        <TextInput label="shipping_rule" source="shippingRule" />
        <TextInput label="source" source="source" />
        <TextInput label="status" source="status" />
        <TextInput label="tax_category" source="taxCategory" />
        <TextInput label="tax_id" source="taxId" />
        <TextInput label="taxes_and_charges" source="taxesAndCharges" />
        <TextInput label="tc_name" source="tcName" />
        <TextInput label="terms" multiline source="terms" />
        <TextInput label="territory" source="territory" />
        <TextInput label="title" source="title" />
        <NumberInput label="total" source="total" />
        <NumberInput label="total_commission" source="totalCommission" />
        <NumberInput label="total_net_weight" source="totalNetWeight" />
        <NumberInput label="total_qty" source="totalQty" />
        <NumberInput
          label="total_taxes_and_charges"
          source="totalTaxesAndCharges"
        />
        <TextInput label="transporter" source="transporter" />
        <TextInput label="transporter_name" source="transporterName" />
        <TextInput label="vehicle_no" source="vehicleNo" />
      </SimpleForm>
    </Create>
  );
};
