import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PosInvoiceController } from "../posInvoice.controller";
import { PosInvoiceService } from "../posInvoice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountForChangeAmount: "exampleAccountForChangeAmount",
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  againstIncomeAccount: "exampleAgainstIncomeAccount",
  allocateAdvancesAutomatically: 42,
  amendedFrom: "exampleAmendedFrom",
  amountEligibleForCommission: 42.42,
  applyDiscountOn: "exampleApplyDiscountOn",
  autoRepeat: "exampleAutoRepeat",
  baseChangeAmount: 42.42,
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  basePaidAmount: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  baseWriteOffAmount: 42.42,
  campaign: "exampleCampaign",
  cashBankAccount: "exampleCashBankAccount",
  changeAmount: 42.42,
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  consolidatedInvoice: "exampleConsolidatedInvoice",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  couponCode: "exampleCouponCode",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  debitTo: "exampleDebitTo",
  discountAmount: 42.42,
  docStatus: 42,
  dueDate: new Date(),
  fromDate: new Date(),
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  interCompanyInvoiceReference: "exampleInterCompanyInvoiceReference",
  isDiscounted: 42,
  isOpening: "exampleIsOpening",
  isPos: 42,
  isReturn: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  loyaltyAmount: 42.42,
  loyaltyPoints: 42,
  loyaltyProgram: "exampleLoyaltyProgram",
  loyaltyRedemptionAccount: "exampleLoyaltyRedemptionAccount",
  loyaltyRedemptionCostCenter: "exampleLoyaltyRedemptionCostCenter",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  otherChargesCalculation: "exampleOtherChargesCalculation",
  outstandingAmount: 42.42,
  owner: "exampleOwner",
  paidAmount: 42.42,
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  posProfile: "examplePosProfile",
  postingDate: new Date(),
  postingTime: new Date(),
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  redeemLoyaltyPoints: 42,
  remarks: "exampleRemarks",
  returnAgainst: "exampleReturnAgainst",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setPostingTime: 42,
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  source: "exampleSource",
  status: "exampleStatus",
  taxCategory: "exampleTaxCategory",
  taxId: "exampleTaxId",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  terms: "exampleTerms",
  territory: "exampleTerritory",
  title: "exampleTitle",
  toDate: new Date(),
  total: 42.42,
  totalAdvance: 42.42,
  totalBillingAmount: 42.42,
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  updateBilledAmountInDeliveryNote: 42,
  updateBilledAmountInSalesOrder: 42,
  updateStock: 42,
  updatedAt: new Date(),
  writeOffAccount: "exampleWriteOffAccount",
  writeOffAmount: 42.42,
  writeOffCostCenter: "exampleWriteOffCostCenter",
  writeOffOutstandingAmountAutomatically: 42,
};
const CREATE_RESULT = {
  accountForChangeAmount: "exampleAccountForChangeAmount",
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  againstIncomeAccount: "exampleAgainstIncomeAccount",
  allocateAdvancesAutomatically: 42,
  amendedFrom: "exampleAmendedFrom",
  amountEligibleForCommission: 42.42,
  applyDiscountOn: "exampleApplyDiscountOn",
  autoRepeat: "exampleAutoRepeat",
  baseChangeAmount: 42.42,
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  basePaidAmount: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  baseWriteOffAmount: 42.42,
  campaign: "exampleCampaign",
  cashBankAccount: "exampleCashBankAccount",
  changeAmount: 42.42,
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  consolidatedInvoice: "exampleConsolidatedInvoice",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  couponCode: "exampleCouponCode",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  debitTo: "exampleDebitTo",
  discountAmount: 42.42,
  docStatus: 42,
  dueDate: new Date(),
  fromDate: new Date(),
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  interCompanyInvoiceReference: "exampleInterCompanyInvoiceReference",
  isDiscounted: 42,
  isOpening: "exampleIsOpening",
  isPos: 42,
  isReturn: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  loyaltyAmount: 42.42,
  loyaltyPoints: 42,
  loyaltyProgram: "exampleLoyaltyProgram",
  loyaltyRedemptionAccount: "exampleLoyaltyRedemptionAccount",
  loyaltyRedemptionCostCenter: "exampleLoyaltyRedemptionCostCenter",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  otherChargesCalculation: "exampleOtherChargesCalculation",
  outstandingAmount: 42.42,
  owner: "exampleOwner",
  paidAmount: 42.42,
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  posProfile: "examplePosProfile",
  postingDate: new Date(),
  postingTime: new Date(),
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  redeemLoyaltyPoints: 42,
  remarks: "exampleRemarks",
  returnAgainst: "exampleReturnAgainst",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setPostingTime: 42,
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  source: "exampleSource",
  status: "exampleStatus",
  taxCategory: "exampleTaxCategory",
  taxId: "exampleTaxId",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  terms: "exampleTerms",
  territory: "exampleTerritory",
  title: "exampleTitle",
  toDate: new Date(),
  total: 42.42,
  totalAdvance: 42.42,
  totalBillingAmount: 42.42,
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  updateBilledAmountInDeliveryNote: 42,
  updateBilledAmountInSalesOrder: 42,
  updateStock: 42,
  updatedAt: new Date(),
  writeOffAccount: "exampleWriteOffAccount",
  writeOffAmount: 42.42,
  writeOffCostCenter: "exampleWriteOffCostCenter",
  writeOffOutstandingAmountAutomatically: 42,
};
const FIND_MANY_RESULT = [
  {
    accountForChangeAmount: "exampleAccountForChangeAmount",
    additionalDiscountPercentage: 42.42,
    addressDisplay: "exampleAddressDisplay",
    againstIncomeAccount: "exampleAgainstIncomeAccount",
    allocateAdvancesAutomatically: 42,
    amendedFrom: "exampleAmendedFrom",
    amountEligibleForCommission: 42.42,
    applyDiscountOn: "exampleApplyDiscountOn",
    autoRepeat: "exampleAutoRepeat",
    baseChangeAmount: 42.42,
    baseDiscountAmount: 42.42,
    baseGrandTotal: 42.42,
    baseInWords: "exampleBaseInWords",
    baseNetTotal: 42.42,
    basePaidAmount: 42.42,
    baseRoundedTotal: 42.42,
    baseRoundingAdjustment: 42.42,
    baseTotal: 42.42,
    baseTotalTaxesAndCharges: 42.42,
    baseWriteOffAmount: 42.42,
    campaign: "exampleCampaign",
    cashBankAccount: "exampleCashBankAccount",
    changeAmount: 42.42,
    commissionRate: 42.42,
    company: "exampleCompany",
    companyAddress: "exampleCompanyAddress",
    companyAddressDisplay: "exampleCompanyAddressDisplay",
    consolidatedInvoice: "exampleConsolidatedInvoice",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    conversionRate: 42.42,
    costCenter: "exampleCostCenter",
    couponCode: "exampleCouponCode",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    customer: "exampleCustomer",
    customerAddress: "exampleCustomerAddress",
    customerGroup: "exampleCustomerGroup",
    customerName: "exampleCustomerName",
    debitTo: "exampleDebitTo",
    discountAmount: 42.42,
    docStatus: 42,
    dueDate: new Date(),
    fromDate: new Date(),
    grandTotal: 42.42,
    groupSameItems: 42,
    id: "exampleId",
    idx: 42,
    ignorePricingRule: 42,
    inWords: "exampleInWords",
    interCompanyInvoiceReference: "exampleInterCompanyInvoiceReference",
    isDiscounted: 42,
    isOpening: "exampleIsOpening",
    isPos: 42,
    isReturn: 42,
    language: "exampleLanguage",
    letterHead: "exampleLetterHead",
    loyaltyAmount: 42.42,
    loyaltyPoints: 42,
    loyaltyProgram: "exampleLoyaltyProgram",
    loyaltyRedemptionAccount: "exampleLoyaltyRedemptionAccount",
    loyaltyRedemptionCostCenter: "exampleLoyaltyRedemptionCostCenter",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    netTotal: 42.42,
    otherChargesCalculation: "exampleOtherChargesCalculation",
    outstandingAmount: 42.42,
    owner: "exampleOwner",
    paidAmount: 42.42,
    partyAccountCurrency: "examplePartyAccountCurrency",
    paymentTermsTemplate: "examplePaymentTermsTemplate",
    plcConversionRate: 42.42,
    poDate: new Date(),
    poNo: "examplePoNo",
    posProfile: "examplePosProfile",
    postingDate: new Date(),
    postingTime: new Date(),
    priceListCurrency: "examplePriceListCurrency",
    project: "exampleProject",
    redeemLoyaltyPoints: 42,
    remarks: "exampleRemarks",
    returnAgainst: "exampleReturnAgainst",
    roundedTotal: 42.42,
    roundingAdjustment: 42.42,
    salesPartner: "exampleSalesPartner",
    scanBarcode: "exampleScanBarcode",
    selectPrintHeading: "exampleSelectPrintHeading",
    sellingPriceList: "exampleSellingPriceList",
    setPostingTime: 42,
    setWarehouse: "exampleSetWarehouse",
    shippingAddress: "exampleShippingAddress",
    shippingAddressName: "exampleShippingAddressName",
    shippingRule: "exampleShippingRule",
    source: "exampleSource",
    status: "exampleStatus",
    taxCategory: "exampleTaxCategory",
    taxId: "exampleTaxId",
    taxesAndCharges: "exampleTaxesAndCharges",
    tcName: "exampleTcName",
    terms: "exampleTerms",
    territory: "exampleTerritory",
    title: "exampleTitle",
    toDate: new Date(),
    total: 42.42,
    totalAdvance: 42.42,
    totalBillingAmount: 42.42,
    totalCommission: 42.42,
    totalNetWeight: 42.42,
    totalQty: 42.42,
    totalTaxesAndCharges: 42.42,
    updateBilledAmountInDeliveryNote: 42,
    updateBilledAmountInSalesOrder: 42,
    updateStock: 42,
    updatedAt: new Date(),
    writeOffAccount: "exampleWriteOffAccount",
    writeOffAmount: 42.42,
    writeOffCostCenter: "exampleWriteOffCostCenter",
    writeOffOutstandingAmountAutomatically: 42,
  },
];
const FIND_ONE_RESULT = {
  accountForChangeAmount: "exampleAccountForChangeAmount",
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  againstIncomeAccount: "exampleAgainstIncomeAccount",
  allocateAdvancesAutomatically: 42,
  amendedFrom: "exampleAmendedFrom",
  amountEligibleForCommission: 42.42,
  applyDiscountOn: "exampleApplyDiscountOn",
  autoRepeat: "exampleAutoRepeat",
  baseChangeAmount: 42.42,
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  basePaidAmount: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  baseWriteOffAmount: 42.42,
  campaign: "exampleCampaign",
  cashBankAccount: "exampleCashBankAccount",
  changeAmount: 42.42,
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  consolidatedInvoice: "exampleConsolidatedInvoice",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  couponCode: "exampleCouponCode",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  debitTo: "exampleDebitTo",
  discountAmount: 42.42,
  docStatus: 42,
  dueDate: new Date(),
  fromDate: new Date(),
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  interCompanyInvoiceReference: "exampleInterCompanyInvoiceReference",
  isDiscounted: 42,
  isOpening: "exampleIsOpening",
  isPos: 42,
  isReturn: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  loyaltyAmount: 42.42,
  loyaltyPoints: 42,
  loyaltyProgram: "exampleLoyaltyProgram",
  loyaltyRedemptionAccount: "exampleLoyaltyRedemptionAccount",
  loyaltyRedemptionCostCenter: "exampleLoyaltyRedemptionCostCenter",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  otherChargesCalculation: "exampleOtherChargesCalculation",
  outstandingAmount: 42.42,
  owner: "exampleOwner",
  paidAmount: 42.42,
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  posProfile: "examplePosProfile",
  postingDate: new Date(),
  postingTime: new Date(),
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  redeemLoyaltyPoints: 42,
  remarks: "exampleRemarks",
  returnAgainst: "exampleReturnAgainst",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setPostingTime: 42,
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  source: "exampleSource",
  status: "exampleStatus",
  taxCategory: "exampleTaxCategory",
  taxId: "exampleTaxId",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  terms: "exampleTerms",
  territory: "exampleTerritory",
  title: "exampleTitle",
  toDate: new Date(),
  total: 42.42,
  totalAdvance: 42.42,
  totalBillingAmount: 42.42,
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  updateBilledAmountInDeliveryNote: 42,
  updateBilledAmountInSalesOrder: 42,
  updateStock: 42,
  updatedAt: new Date(),
  writeOffAccount: "exampleWriteOffAccount",
  writeOffAmount: 42.42,
  writeOffCostCenter: "exampleWriteOffCostCenter",
  writeOffOutstandingAmountAutomatically: 42,
};

const service = {
  createPosInvoice() {
    return CREATE_RESULT;
  },
  posInvoices: () => FIND_MANY_RESULT,
  posInvoice: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("PosInvoice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PosInvoiceService,
          useValue: service,
        },
      ],
      controllers: [PosInvoiceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /posInvoices", async () => {
    await request(app.getHttpServer())
      .post("/posInvoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        poDate: CREATE_RESULT.poDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /posInvoices", async () => {
    await request(app.getHttpServer())
      .get("/posInvoices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          poDate: FIND_MANY_RESULT[0].poDate.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          postingTime: FIND_MANY_RESULT[0].postingTime.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /posInvoices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posInvoices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /posInvoices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posInvoices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        poDate: FIND_ONE_RESULT.poDate.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        postingTime: FIND_ONE_RESULT.postingTime.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /posInvoices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/posInvoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        poDate: CREATE_RESULT.poDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/posInvoices")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
