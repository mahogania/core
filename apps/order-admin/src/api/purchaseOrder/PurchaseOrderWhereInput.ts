import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PurchaseOrderWhereInput = {
  additionalDiscountPercentage?: FloatNullableFilter;
  addressDisplay?: StringNullableFilter;
  advancePaid?: FloatNullableFilter;
  amendedFrom?: StringNullableFilter;
  applyDiscountOn?: StringNullableFilter;
  applyTds?: IntNullableFilter;
  autoRepeat?: StringNullableFilter;
  baseDiscountAmount?: FloatNullableFilter;
  baseGrandTotal?: FloatNullableFilter;
  baseInWords?: StringNullableFilter;
  baseNetTotal?: FloatNullableFilter;
  baseRoundedTotal?: FloatNullableFilter;
  baseRoundingAdjustment?: FloatNullableFilter;
  baseTaxWithholdingNetTotal?: FloatNullableFilter;
  baseTaxesAndChargesAdded?: FloatNullableFilter;
  baseTaxesAndChargesDeducted?: FloatNullableFilter;
  baseTotal?: FloatNullableFilter;
  baseTotalTaxesAndCharges?: FloatNullableFilter;
  billingAddress?: StringNullableFilter;
  billingAddressDisplay?: StringNullableFilter;
  buyingPriceList?: StringNullableFilter;
  company?: StringNullableFilter;
  contactDisplay?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactMobile?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  conversionRate?: FloatNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  currency?: StringNullableFilter;
  customer?: StringNullableFilter;
  customerContactDisplay?: StringNullableFilter;
  customerContactEmail?: StringNullableFilter;
  customerContactMobile?: StringNullableFilter;
  customerContactPerson?: StringNullableFilter;
  customerName?: StringNullableFilter;
  disableRoundedTotal?: IntNullableFilter;
  discountAmount?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  fromDate?: DateTimeNullableFilter;
  grandTotal?: FloatNullableFilter;
  groupSameItems?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  ignorePricingRule?: IntNullableFilter;
  inWords?: StringNullableFilter;
  incoterm?: StringNullableFilter;
  interCompanyOrderReference?: StringNullableFilter;
  isInternalSupplier?: IntNullableFilter;
  isOldSubcontractingFlow?: IntNullableFilter;
  isSubcontracted?: IntNullableFilter;
  language?: StringNullableFilter;
  letterHead?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namedPlace?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  netTotal?: FloatNullableFilter;
  orderConfirmationDate?: DateTimeNullableFilter;
  orderConfirmationNo?: StringNullableFilter;
  otherChargesCalculation?: StringNullableFilter;
  owner?: StringNullableFilter;
  partyAccountCurrency?: StringNullableFilter;
  paymentTermsTemplate?: StringNullableFilter;
  perBilled?: FloatNullableFilter;
  perReceived?: FloatNullableFilter;
  plcConversionRate?: FloatNullableFilter;
  priceListCurrency?: StringNullableFilter;
  project?: StringNullableFilter;
  refSq?: StringNullableFilter;
  representsCompany?: StringNullableFilter;
  roundedTotal?: FloatNullableFilter;
  roundingAdjustment?: FloatNullableFilter;
  scanBarcode?: StringNullableFilter;
  scheduleDate?: DateTimeNullableFilter;
  selectPrintHeading?: StringNullableFilter;
  setFromWarehouse?: StringNullableFilter;
  setReserveWarehouse?: StringNullableFilter;
  setWarehouse?: StringNullableFilter;
  shippingAddress?: StringNullableFilter;
  shippingAddressDisplay?: StringNullableFilter;
  shippingRule?: StringNullableFilter;
  status?: StringNullableFilter;
  supplier?: StringNullableFilter;
  supplierAddress?: StringNullableFilter;
  supplierName?: StringNullableFilter;
  supplierWarehouse?: StringNullableFilter;
  taxCategory?: StringNullableFilter;
  taxWithholdingCategory?: StringNullableFilter;
  taxWithholdingNetTotal?: FloatNullableFilter;
  taxesAndCharges?: StringNullableFilter;
  taxesAndChargesAdded?: FloatNullableFilter;
  taxesAndChargesDeducted?: FloatNullableFilter;
  tcName?: StringNullableFilter;
  terms?: StringNullableFilter;
  title?: StringNullableFilter;
  toDate?: DateTimeNullableFilter;
  total?: FloatNullableFilter;
  totalNetWeight?: FloatNullableFilter;
  totalQty?: FloatNullableFilter;
  totalTaxesAndCharges?: FloatNullableFilter;
  transactionDate?: DateTimeNullableFilter;
};