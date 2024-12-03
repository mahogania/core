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
import { QuotationController } from "../quotation.controller";
import { QuotationService } from "../quotation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  applyDiscountOn: "exampleApplyDiscountOn",
  autoRepeat: "exampleAutoRepeat",
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  campaign: "exampleCampaign",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  couponCode: "exampleCouponCode",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  discountAmount: 42.42,
  docstatus: 42,
  enqDet: "exampleEnqDet",
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  opportunity: "exampleOpportunity",
  orderLostReason: "exampleOrderLostReason",
  orderType: "exampleOrderType",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyName: "examplePartyName",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  quotationTo: "exampleQuotationTo",
  referralSalesPartner: "exampleReferralSalesPartner",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  source: "exampleSource",
  status: "exampleStatus",
  supplierQuotation: "exampleSupplierQuotation",
  taxCategory: "exampleTaxCategory",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  terms: "exampleTerms",
  territory: "exampleTerritory",
  title: "exampleTitle",
  total: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
  validTill: new Date(),
};
const CREATE_RESULT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  applyDiscountOn: "exampleApplyDiscountOn",
  autoRepeat: "exampleAutoRepeat",
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  campaign: "exampleCampaign",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  couponCode: "exampleCouponCode",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  discountAmount: 42.42,
  docstatus: 42,
  enqDet: "exampleEnqDet",
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  opportunity: "exampleOpportunity",
  orderLostReason: "exampleOrderLostReason",
  orderType: "exampleOrderType",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyName: "examplePartyName",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  quotationTo: "exampleQuotationTo",
  referralSalesPartner: "exampleReferralSalesPartner",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  source: "exampleSource",
  status: "exampleStatus",
  supplierQuotation: "exampleSupplierQuotation",
  taxCategory: "exampleTaxCategory",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  terms: "exampleTerms",
  territory: "exampleTerritory",
  title: "exampleTitle",
  total: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
  validTill: new Date(),
};
const FIND_MANY_RESULT = [
  {
    additionalDiscountPercentage: 42.42,
    addressDisplay: "exampleAddressDisplay",
    amendedFrom: "exampleAmendedFrom",
    applyDiscountOn: "exampleApplyDiscountOn",
    autoRepeat: "exampleAutoRepeat",
    baseDiscountAmount: 42.42,
    baseGrandTotal: 42.42,
    baseInWords: "exampleBaseInWords",
    baseNetTotal: 42.42,
    baseRoundedTotal: 42.42,
    baseRoundingAdjustment: 42.42,
    baseTotal: 42.42,
    baseTotalTaxesAndCharges: 42.42,
    campaign: "exampleCampaign",
    company: "exampleCompany",
    companyAddress: "exampleCompanyAddress",
    companyAddressDisplay: "exampleCompanyAddressDisplay",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    conversionRate: 42.42,
    couponCode: "exampleCouponCode",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    customerAddress: "exampleCustomerAddress",
    customerGroup: "exampleCustomerGroup",
    customerName: "exampleCustomerName",
    discountAmount: 42.42,
    docstatus: 42,
    enqDet: "exampleEnqDet",
    grandTotal: 42.42,
    groupSameItems: 42,
    id: "exampleId",
    idx: 42,
    ignorePricingRule: 42,
    inWords: "exampleInWords",
    incoterm: "exampleIncoterm",
    language: "exampleLanguage",
    letterHead: "exampleLetterHead",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namedPlace: "exampleNamedPlace",
    namingSeries: "exampleNamingSeries",
    netTotal: 42.42,
    opportunity: "exampleOpportunity",
    orderLostReason: "exampleOrderLostReason",
    orderType: "exampleOrderType",
    otherChargesCalculation: "exampleOtherChargesCalculation",
    owner: "exampleOwner",
    partyName: "examplePartyName",
    paymentTermsTemplate: "examplePaymentTermsTemplate",
    plcConversionRate: 42.42,
    priceListCurrency: "examplePriceListCurrency",
    quotationTo: "exampleQuotationTo",
    referralSalesPartner: "exampleReferralSalesPartner",
    roundedTotal: 42.42,
    roundingAdjustment: 42.42,
    scanBarcode: "exampleScanBarcode",
    selectPrintHeading: "exampleSelectPrintHeading",
    sellingPriceList: "exampleSellingPriceList",
    shippingAddress: "exampleShippingAddress",
    shippingAddressName: "exampleShippingAddressName",
    shippingRule: "exampleShippingRule",
    source: "exampleSource",
    status: "exampleStatus",
    supplierQuotation: "exampleSupplierQuotation",
    taxCategory: "exampleTaxCategory",
    taxesAndCharges: "exampleTaxesAndCharges",
    tcName: "exampleTcName",
    terms: "exampleTerms",
    territory: "exampleTerritory",
    title: "exampleTitle",
    total: 42.42,
    totalNetWeight: 42.42,
    totalQty: 42.42,
    totalTaxesAndCharges: 42.42,
    transactionDate: new Date(),
    updatedAt: new Date(),
    validTill: new Date(),
  },
];
const FIND_ONE_RESULT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  applyDiscountOn: "exampleApplyDiscountOn",
  autoRepeat: "exampleAutoRepeat",
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  campaign: "exampleCampaign",
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  couponCode: "exampleCouponCode",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  discountAmount: 42.42,
  docstatus: 42,
  enqDet: "exampleEnqDet",
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  opportunity: "exampleOpportunity",
  orderLostReason: "exampleOrderLostReason",
  orderType: "exampleOrderType",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyName: "examplePartyName",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  quotationTo: "exampleQuotationTo",
  referralSalesPartner: "exampleReferralSalesPartner",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  source: "exampleSource",
  status: "exampleStatus",
  supplierQuotation: "exampleSupplierQuotation",
  taxCategory: "exampleTaxCategory",
  taxesAndCharges: "exampleTaxesAndCharges",
  tcName: "exampleTcName",
  terms: "exampleTerms",
  territory: "exampleTerritory",
  title: "exampleTitle",
  total: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
  validTill: new Date(),
};

const service = {
  createQuotation() {
    return CREATE_RESULT;
  },
  quotations: () => FIND_MANY_RESULT,
  quotation: ({ where }: { where: { id: string } }) => {
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

describe("Quotation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QuotationService,
          useValue: service,
        },
      ],
      controllers: [QuotationController],
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

  test("POST /quotations", async () => {
    await request(app.getHttpServer())
      .post("/quotations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validTill: CREATE_RESULT.validTill.toISOString(),
      });
  });

  test("GET /quotations", async () => {
    await request(app.getHttpServer())
      .get("/quotations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          validTill: FIND_MANY_RESULT[0].validTill.toISOString(),
        },
      ]);
  });

  test("GET /quotations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/quotations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /quotations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/quotations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        validTill: FIND_ONE_RESULT.validTill.toISOString(),
      });
  });

  test("POST /quotations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/quotations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validTill: CREATE_RESULT.validTill.toISOString(),
      })
      .then(function () {
        agent
          .post("/quotations")
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
