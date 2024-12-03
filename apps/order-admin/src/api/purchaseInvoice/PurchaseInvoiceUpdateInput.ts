export type PurchaseInvoiceUpdateInput = {
  additionalDiscountPercentage?: number | null;
  addressDisplay?: string | null;
  againstExpenseAccount?: string | null;
  allocateAdvancesAutomatically?: number | null;
  amendedFrom?: string | null;
  applyDiscountOn?: string | null;
  applyTds?: number | null;
  autoRepeat?: string | null;
  baseDiscountAmount?: number | null;
  baseGrandTotal?: number | null;
  baseInWords?: string | null;
  baseNetTotal?: number | null;
  basePaidAmount?: number | null;
  baseRoundedTotal?: number | null;
  baseRoundingAdjustment?: number | null;
  baseTaxWithholdingNetTotal?: number | null;
  baseTaxesAndChargesAdded?: number | null;
  baseTaxesAndChargesDeducted?: number | null;
  baseTotal?: number | null;
  baseTotalTaxesAndCharges?: number | null;
  baseWriteOffAmount?: number | null;
  billDate?: Date | null;
  billNo?: string | null;
  billingAddress?: string | null;
  billingAddressDisplay?: string | null;
  buyingPriceList?: string | null;
  cashBankAccount?: string | null;
  clearanceDate?: Date | null;
  company?: string | null;
  contactDisplay?: string | null;
  contactEmail?: string | null;
  contactMobile?: string | null;
  contactPerson?: string | null;
  conversionRate?: number | null;
  costCenter?: string | null;
  creation?: Date | null;
  creditTo?: string | null;
  currency?: string | null;
  disableRoundedTotal?: number | null;
  discountAmount?: number | null;
  docstatus?: number | null;
  dueDate?: Date | null;
  fromDate?: Date | null;
  grandTotal?: number | null;
  groupSameItems?: number | null;
  holdComment?: string | null;
  idx?: number | null;
  ignoreDefaultPaymentTermsTemplate?: number | null;
  ignorePricingRule?: number | null;
  inWords?: string | null;
  incoterm?: string | null;
  interCompanyInvoiceReference?: string | null;
  isInternalSupplier?: number | null;
  isOldSubcontractingFlow?: number | null;
  isOpening?: string | null;
  isPaid?: number | null;
  isReturn?: number | null;
  isSubcontracted?: number | null;
  language?: string | null;
  letterHead?: string | null;
  modeOfPayment?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namedPlace?: string | null;
  namingSeries?: string | null;
  netTotal?: number | null;
  onHold?: number | null;
  onlyIncludeAllocatedPayments?: number | null;
  otherChargesCalculation?: string | null;
  outstandingAmount?: number | null;
  owner?: string | null;
  paidAmount?: number | null;
  partyAccountCurrency?: string | null;
  paymentTermsTemplate?: string | null;
  perReceived?: number | null;
  plcConversionRate?: number | null;
  postingDate?: Date | null;
  postingTime?: string | null;
  priceListCurrency?: string | null;
  project?: string | null;
  rejectedWarehouse?: string | null;
  releaseDate?: Date | null;
  remarks?: string | null;
  representsCompany?: string | null;
  returnAgainst?: string | null;
  roundedTotal?: number | null;
  roundingAdjustment?: number | null;
  scanBarcode?: string | null;
  selectPrintHeading?: string | null;
  setFromWarehouse?: string | null;
  setPostingTime?: number | null;
  setWarehouse?: string | null;
  shippingAddress?: string | null;
  shippingAddressDisplay?: string | null;
  shippingRule?: string | null;
  status?: string | null;
  subscription?: string | null;
  supplier?: string | null;
  supplierAddress?: string | null;
  supplierGroup?: string | null;
  supplierName?: string | null;
  supplierWarehouse?: string | null;
  taxCategory?: string | null;
  taxId?: string | null;
  taxWithholdingCategory?: string | null;
  taxWithholdingNetTotal?: number | null;
  taxesAndCharges?: string | null;
  taxesAndChargesAdded?: number | null;
  taxesAndChargesDeducted?: number | null;
  tcName?: string | null;
  terms?: string | null;
  title?: string | null;
  toDate?: Date | null;
  total?: number | null;
  totalAdvance?: number | null;
  totalNetWeight?: number | null;
  totalQty?: number | null;
  totalTaxesAndCharges?: number | null;
  unrealizedProfitLossAccount?: string | null;
  updateBilledAmountInPurchaseOrder?: number | null;
  updateBilledAmountInPurchaseReceipt?: number | null;
  updateOutstandingForSelf?: number | null;
  updateStock?: number | null;
  useCompanyRoundoffCostCenter?: number | null;
  useTransactionDateExchangeRate?: number | null;
  writeOffAccount?: string | null;
  writeOffAmount?: number | null;
  writeOffCostCenter?: string | null;
};
