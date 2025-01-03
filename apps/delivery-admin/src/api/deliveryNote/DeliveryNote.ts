export type DeliveryNote = {
  additionalDiscountPercentage: number | null;
  addressDisplay: string | null;
  amendedFrom: string | null;
  amountEligibleForCommission: number | null;
  applyDiscountOn: string | null;
  autoRepeat: string | null;
  baseDiscountAmount: number | null;
  baseGrandTotal: number | null;
  baseInWords: string | null;
  baseNetTotal: number | null;
  baseRoundedTotal: number | null;
  baseRoundingAdjustment: number | null;
  baseTotal: number | null;
  baseTotalTaxesAndCharges: number | null;
  campaign: string | null;
  commissionRate: number | null;
  company: string | null;
  companyAddress: string | null;
  companyAddressDisplay: string | null;
  contactDisplay: string | null;
  contactEmail: string | null;
  contactMobile: string | null;
  contactPerson: string | null;
  conversionRate: number | null;
  costCenter: string | null;
  createdAt: Date;
  creation: Date | null;
  currency: string | null;
  customer: string | null;
  customerAddress: string | null;
  customerGroup: string | null;
  customerName: string | null;
  disableRoundedTotal: boolean | null;
  discountAmount: number | null;
  dispatchAddress: string | null;
  dispatchAddressName: string | null;
  docstatus: number | null;
  driver: string | null;
  driverName: string | null;
  excisePage: string | null;
  grandTotal: number | null;
  groupSameItems: boolean | null;
  id: string;
  idx: number | null;
  ignorePricingRule: boolean | null;
  inWords: string | null;
  incoterm: string | null;
  installationStatus: string | null;
  instructions: string | null;
  interCompanyReference: string | null;
  isInternalCustomer: boolean | null;
  isReturn: boolean | null;
  issueCreditNote: boolean | null;
  language: string | null;
  letterHead: string | null;
  lrDate: Date | null;
  lrNo: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  namedPlace: string | null;
  namingSeries: string | null;
  netTotal: number | null;
  otherChargesCalculation: string | null;
  owner: string | null;
  perBilled: number | null;
  perInstalled: number | null;
  perReturned: number | null;
  pickList: string | null;
  plcConversionRate: number | null;
  poDate: Date | null;
  poNo: string | null;
  postingDate: Date | null;
  postingTime: Date | null;
  priceListCurrency: string | null;
  printWithoutAmount: boolean | null;
  project: string | null;
  representsCompany: string | null;
  returnAgainst: string | null;
  roundedTotal: number | null;
  roundingAdjustment: number | null;
  salesPartner: string | null;
  scanBarcode: string | null;
  selectPrintHeading: string | null;
  sellingPriceList: string | null;
  setPostingTime: boolean | null;
  setTargetWarehouse: string | null;
  setWarehouse: string | null;
  shippingAddress: string | null;
  shippingAddressName: string | null;
  shippingRule: string | null;
  source: string | null;
  status: string | null;
  taxCategory: string | null;
  taxId: string | null;
  taxesAndCharges: string | null;
  tcName: string | null;
  terms: string | null;
  territory: string | null;
  title: string | null;
  total: number | null;
  totalCommission: number | null;
  totalNetWeight: number | null;
  totalQty: number | null;
  totalTaxesAndCharges: number | null;
  transporter: string | null;
  transporterName: string | null;
  updatedAt: Date;
  vehicleNo: string | null;
};
