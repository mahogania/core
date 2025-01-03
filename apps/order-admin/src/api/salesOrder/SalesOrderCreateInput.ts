export type SalesOrderCreateInput = {
  additionalDiscountPercentage?: number | null;
  addressDisplay?: string | null;
  advancePaid?: number | null;
  amendedFrom?: string | null;
  amountEligibleForCommission?: number | null;
  applyDiscountOn?: string | null;
  autoRepeat?: string | null;
  baseDiscountAmount?: number | null;
  baseGrandTotal?: number | null;
  baseInWords?: string | null;
  baseNetTotal?: number | null;
  baseRoundedTotal?: number | null;
  baseRoundingAdjustment?: number | null;
  baseTotal?: number | null;
  baseTotalTaxesAndCharges?: number | null;
  billingStatus?: string | null;
  campaign?: string | null;
  commissionRate?: number | null;
  company?: string | null;
  companyAddress?: string | null;
  companyAddressDisplay?: string | null;
  contactDisplay?: string | null;
  contactEmail?: string | null;
  contactMobile?: string | null;
  contactPerson?: string | null;
  contactPhone?: string | null;
  conversionRate?: number | null;
  costCenter?: string | null;
  couponCode?: string | null;
  creation?: Date | null;
  currency?: string | null;
  customer?: string | null;
  customerAddress?: string | null;
  customerGroup?: string | null;
  customerName?: string | null;
  deliveryDate?: Date | null;
  deliveryStatus?: string | null;
  disableRoundedTotal?: number | null;
  discountAmount?: number | null;
  dispatchAddress?: string | null;
  dispatchAddressName?: string | null;
  docstatus?: number | null;
  fromDate?: Date | null;
  grandTotal?: number | null;
  groupSameItems?: number | null;
  idx?: number | null;
  ignorePricingRule?: number | null;
  inWords?: string | null;
  incoterm?: string | null;
  interCompanyOrderReference?: string | null;
  isInternalCustomer?: number | null;
  language?: string | null;
  letterHead?: string | null;
  loyaltyAmount?: number | null;
  loyaltyPoints?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namedPlace?: string | null;
  namingSeries?: string | null;
  netTotal?: number | null;
  orderType?: string | null;
  otherChargesCalculation?: string | null;
  owner?: string | null;
  partyAccountCurrency?: string | null;
  paymentTermsTemplate?: string | null;
  perBilled?: number | null;
  perDelivered?: number | null;
  perPicked?: number | null;
  plcConversionRate?: number | null;
  poDate?: Date | null;
  poNo?: string | null;
  priceListCurrency?: string | null;
  project?: string | null;
  representsCompany?: string | null;
  reserveStock?: number | null;
  roundedTotal?: number | null;
  roundingAdjustment?: number | null;
  salesPartner?: string | null;
  scanBarcode?: string | null;
  selectPrintHeading?: string | null;
  sellingPriceList?: string | null;
  setWarehouse?: string | null;
  shippingAddress?: string | null;
  shippingAddressName?: string | null;
  shippingRule?: string | null;
  skipDeliveryNote?: number | null;
  source?: string | null;
  status?: string | null;
  taxCategory?: string | null;
  taxId?: string | null;
  taxesAndCharges?: string | null;
  tcName?: string | null;
  terms?: string | null;
  territory?: string | null;
  title?: string | null;
  toDate?: Date | null;
  total?: number | null;
  totalCommission?: number | null;
  totalNetWeight?: number | null;
  totalQty?: number | null;
  totalTaxesAndCharges?: number | null;
  transactionDate?: Date | null;
};
