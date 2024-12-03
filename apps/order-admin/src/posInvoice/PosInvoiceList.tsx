import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PosInvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"POSInvoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="accountForChangeAmount"
          source="accountForChangeAmount"
        />
        <TextField
          label="additionalDiscountPercentage"
          source="additionalDiscountPercentage"
        />
        <TextField label="addressDisplay" source="addressDisplay" />
        <TextField label="againstIncomeAccount" source="againstIncomeAccount" />
        <TextField
          label="allocateAdvancesAutomatically"
          source="allocateAdvancesAutomatically"
        />
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField
          label="amountEligibleForCommission"
          source="amountEligibleForCommission"
        />
        <TextField label="applyDiscountOn" source="applyDiscountOn" />
        <TextField label="autoRepeat" source="autoRepeat" />
        <TextField label="baseChangeAmount" source="baseChangeAmount" />
        <TextField label="baseDiscountAmount" source="baseDiscountAmount" />
        <TextField label="baseGrandTotal" source="baseGrandTotal" />
        <TextField label="baseInWords" source="baseInWords" />
        <TextField label="baseNetTotal" source="baseNetTotal" />
        <TextField label="basePaidAmount" source="basePaidAmount" />
        <TextField label="baseRoundedTotal" source="baseRoundedTotal" />
        <TextField
          label="baseRoundingAdjustment"
          source="baseRoundingAdjustment"
        />
        <TextField label="baseTotal" source="baseTotal" />
        <TextField
          label="baseTotalTaxesAndCharges"
          source="baseTotalTaxesAndCharges"
        />
        <TextField label="baseWriteOffAmount" source="baseWriteOffAmount" />
        <TextField label="campaign" source="campaign" />
        <TextField label="cashBankAccount" source="cashBankAccount" />
        <TextField label="changeAmount" source="changeAmount" />
        <TextField label="commissionRate" source="commissionRate" />
        <TextField label="company" source="company" />
        <TextField label="companyAddress" source="companyAddress" />
        <TextField
          label="companyAddressDisplay"
          source="companyAddressDisplay"
        />
        <TextField label="consolidatedInvoice" source="consolidatedInvoice" />
        <TextField label="contactDisplay" source="contactDisplay" />
        <TextField label="contactEmail" source="contactEmail" />
        <TextField label="contactMobile" source="contactMobile" />
        <TextField label="contactPerson" source="contactPerson" />
        <TextField label="conversionRate" source="conversionRate" />
        <TextField label="costCenter" source="costCenter" />
        <TextField label="couponCode" source="couponCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency" source="currency" />
        <TextField label="customer" source="customer" />
        <TextField label="customerAddress" source="customerAddress" />
        <TextField label="customerGroup" source="customerGroup" />
        <TextField label="customerName" source="customerName" />
        <TextField label="debitTo" source="debitTo" />
        <TextField label="discountAmount" source="discountAmount" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="fromDate" source="fromDate" />
        <TextField label="grandTotal" source="grandTotal" />
        <TextField label="groupSameItems" source="groupSameItems" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ignorePricingRule" source="ignorePricingRule" />
        <TextField label="inWords" source="inWords" />
        <TextField
          label="interCompanyInvoiceReference"
          source="interCompanyInvoiceReference"
        />
        <TextField label="isDiscounted" source="isDiscounted" />
        <TextField label="isOpening" source="isOpening" />
        <TextField label="isPos" source="isPos" />
        <TextField label="isReturn" source="isReturn" />
        <TextField label="language" source="language" />
        <TextField label="letterHead" source="letterHead" />
        <TextField label="loyaltyAmount" source="loyaltyAmount" />
        <TextField label="loyaltyPoints" source="loyaltyPoints" />
        <TextField label="loyaltyProgram" source="loyaltyProgram" />
        <TextField
          label="loyaltyRedemptionAccount"
          source="loyaltyRedemptionAccount"
        />
        <TextField
          label="loyaltyRedemptionCostCenter"
          source="loyaltyRedemptionCostCenter"
        />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="namingSeries" source="namingSeries" />
        <TextField label="netTotal" source="netTotal" />
        <TextField
          label="otherChargesCalculation"
          source="otherChargesCalculation"
        />
        <TextField label="outstandingAmount" source="outstandingAmount" />
        <TextField label="owner" source="owner" />
        <TextField label="paidAmount" source="paidAmount" />
        <TextField label="partyAccountCurrency" source="partyAccountCurrency" />
        <TextField label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <TextField label="plcConversionRate" source="plcConversionRate" />
        <TextField label="poDate" source="poDate" />
        <TextField label="poNo" source="poNo" />
        <TextField label="posProfile" source="posProfile" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="postingTime" source="postingTime" />
        <TextField label="priceListCurrency" source="priceListCurrency" />
        <TextField label="project" source="project" />
        <TextField label="redeemLoyaltyPoints" source="redeemLoyaltyPoints" />
        <TextField label="remarks" source="remarks" />
        <TextField label="returnAgainst" source="returnAgainst" />
        <TextField label="roundedTotal" source="roundedTotal" />
        <TextField label="roundingAdjustment" source="roundingAdjustment" />
        <TextField label="salesPartner" source="salesPartner" />
        <TextField label="scanBarcode" source="scanBarcode" />
        <TextField label="selectPrintHeading" source="selectPrintHeading" />
        <TextField label="sellingPriceList" source="sellingPriceList" />
        <TextField label="setPostingTime" source="setPostingTime" />
        <TextField label="setWarehouse" source="setWarehouse" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField label="shippingAddressName" source="shippingAddressName" />
        <TextField label="shippingRule" source="shippingRule" />
        <TextField label="source" source="source" />
        <TextField label="status" source="status" />
        <TextField label="taxCategory" source="taxCategory" />
        <TextField label="taxId" source="taxId" />
        <TextField label="taxesAndCharges" source="taxesAndCharges" />
        <TextField label="tcName" source="tcName" />
        <TextField label="terms" source="terms" />
        <TextField label="territory" source="territory" />
        <TextField label="title" source="title" />
        <TextField label="toDate" source="toDate" />
        <TextField label="total" source="total" />
        <TextField label="totalAdvance" source="totalAdvance" />
        <TextField label="totalBillingAmount" source="totalBillingAmount" />
        <TextField label="totalCommission" source="totalCommission" />
        <TextField label="totalNetWeight" source="totalNetWeight" />
        <TextField label="totalQty" source="totalQty" />
        <TextField label="totalTaxesAndCharges" source="totalTaxesAndCharges" />
        <TextField
          label="updateBilledAmountInDeliveryNote"
          source="updateBilledAmountInDeliveryNote"
        />
        <TextField
          label="updateBilledAmountInSalesOrder"
          source="updateBilledAmountInSalesOrder"
        />
        <TextField label="updateStock" source="updateStock" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="writeOffAccount" source="writeOffAccount" />
        <TextField label="writeOffAmount" source="writeOffAmount" />
        <TextField label="writeOffCostCenter" source="writeOffCostCenter" />
        <TextField
          label="writeOffOutstandingAmountAutomatically"
          source="writeOffOutstandingAmountAutomatically"
        />{" "}
      </Datagrid>
    </List>
  );
};
