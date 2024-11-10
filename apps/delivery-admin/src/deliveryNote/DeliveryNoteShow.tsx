import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DeliveryNoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="additional_discount_percentage"
          source="additionalDiscountPercentage"
        />
        <TextField label="address_display" source="addressDisplay" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField
          label="amount_eligible_for_commission"
          source="amountEligibleForCommission"
        />
        <TextField label="apply_discount_on" source="applyDiscountOn" />
        <TextField label="auto_repeat" source="autoRepeat" />
        <TextField label="base_discount_amount" source="baseDiscountAmount" />
        <TextField label="base_grand_total" source="baseGrandTotal" />
        <TextField label="base_in_words" source="baseInWords" />
        <TextField label="base_net_total" source="baseNetTotal" />
        <TextField label="base_rounded_total" source="baseRoundedTotal" />
        <TextField
          label="base_rounding_adjustment"
          source="baseRoundingAdjustment"
        />
        <TextField label="base_total" source="baseTotal" />
        <TextField
          label="base_total_taxes_and_charges"
          source="baseTotalTaxesAndCharges"
        />
        <TextField label="campaign" source="campaign" />
        <TextField label="commission_rate" source="commissionRate" />
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
        <TextField label="customer_group" source="customerGroup" />
        <TextField label="customer_name" source="customerName" />
        <BooleanField
          label="disable_rounded_total"
          source="disableRoundedTotal"
        />
        <TextField label="discount_amount" source="discountAmount" />
        <TextField label="dispatch_address" source="dispatchAddress" />
        <TextField label="dispatch_address_name" source="dispatchAddressName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="driver" source="driver" />
        <TextField label="driver_name" source="driverName" />
        <TextField label="excise_page" source="excisePage" />
        <TextField label="grand_total" source="grandTotal" />
        <BooleanField label="group_same_items" source="groupSameItems" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="ignore_pricing_rule" source="ignorePricingRule" />
        <TextField label="in_words" source="inWords" />
        <TextField label="incoterm" source="incoterm" />
        <TextField label="installation_status" source="installationStatus" />
        <TextField label="instructions" source="instructions" />
        <TextField
          label="inter_company_reference"
          source="interCompanyReference"
        />
        <BooleanField
          label="is_internal_customer"
          source="isInternalCustomer"
        />
        <BooleanField label="is_return" source="isReturn" />
        <BooleanField label="issue_credit_note" source="issueCreditNote" />
        <TextField label="language" source="language" />
        <TextField label="letter_head" source="letterHead" />
        <TextField label="lr_date" source="lrDate" />
        <TextField label="lr_no" source="lrNo" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="named_place" source="namedPlace" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="net_total" source="netTotal" />
        <TextField
          label="other_charges_calculation"
          source="otherChargesCalculation"
        />
        <TextField label="owner" source="owner" />
        <TextField label="per_billed" source="perBilled" />
        <TextField label="per_installed" source="perInstalled" />
        <TextField label="per_returned" source="perReturned" />
        <TextField label="pick_list" source="pickList" />
        <TextField label="plc_conversion_rate" source="plcConversionRate" />
        <TextField label="po_date" source="poDate" />
        <TextField label="po_no" source="poNo" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="posting_time" source="postingTime" />
        <TextField label="price_list_currency" source="priceListCurrency" />
        <BooleanField
          label="print_without_amount"
          source="printWithoutAmount"
        />
        <TextField label="project" source="project" />
        <TextField label="represents_company" source="representsCompany" />
        <TextField label="return_against" source="returnAgainst" />
        <TextField label="rounded_total" source="roundedTotal" />
        <TextField label="rounding_adjustment" source="roundingAdjustment" />
        <TextField label="sales_partner" source="salesPartner" />
        <TextField label="scan_barcode" source="scanBarcode" />
        <TextField label="select_print_heading" source="selectPrintHeading" />
        <TextField label="selling_price_list" source="sellingPriceList" />
        <BooleanField label="set_posting_time" source="setPostingTime" />
        <TextField label="set_target_warehouse" source="setTargetWarehouse" />
        <TextField label="set_warehouse" source="setWarehouse" />
        <TextField label="shipping_address" source="shippingAddress" />
        <TextField label="shipping_address_name" source="shippingAddressName" />
        <TextField label="shipping_rule" source="shippingRule" />
        <TextField label="source" source="source" />
        <TextField label="status" source="status" />
        <TextField label="tax_category" source="taxCategory" />
        <TextField label="tax_id" source="taxId" />
        <TextField label="taxes_and_charges" source="taxesAndCharges" />
        <TextField label="tc_name" source="tcName" />
        <TextField label="terms" source="terms" />
        <TextField label="territory" source="territory" />
        <TextField label="title" source="title" />
        <TextField label="total" source="total" />
        <TextField label="total_commission" source="totalCommission" />
        <TextField label="total_net_weight" source="totalNetWeight" />
        <TextField label="total_qty" source="totalQty" />
        <TextField
          label="total_taxes_and_charges"
          source="totalTaxesAndCharges"
        />
        <TextField label="transporter" source="transporter" />
        <TextField label="transporter_name" source="transporterName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vehicle_no" source="vehicleNo" />
      </SimpleShowLayout>
    </Show>
  );
};
