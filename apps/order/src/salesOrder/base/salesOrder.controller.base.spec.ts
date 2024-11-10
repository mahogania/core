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
import { SalesOrderController } from "../salesOrder.controller";
import { SalesOrderService } from "../salesOrder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  advancePaid: 42.42,
  amendedFrom: "exampleAmendedFrom",
  amountEligibleForCommission: 42.42,
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
  billingStatus: "exampleBillingStatus",
  campaign: "exampleCampaign",
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  contactPhone: "exampleContactPhone",
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
  deliveryDate: new Date(),
  deliveryStatus: "exampleDeliveryStatus",
  disableRoundedTotal: 42,
  discountAmount: 42.42,
  dispatchAddress: "exampleDispatchAddress",
  dispatchAddressName: "exampleDispatchAddressName",
  docstatus: 42,
  fromDate: new Date(),
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  interCompanyOrderReference: "exampleInterCompanyOrderReference",
  isInternalCustomer: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  loyaltyAmount: 42.42,
  loyaltyPoints: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  orderType: "exampleOrderType",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  perBilled: 42.42,
  perDelivered: 42.42,
  perPicked: 42.42,
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  representsCompany: "exampleRepresentsCompany",
  reserveStock: 42,
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  skipDeliveryNote: 42,
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
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  advancePaid: 42.42,
  amendedFrom: "exampleAmendedFrom",
  amountEligibleForCommission: 42.42,
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
  billingStatus: "exampleBillingStatus",
  campaign: "exampleCampaign",
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  contactPhone: "exampleContactPhone",
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
  deliveryDate: new Date(),
  deliveryStatus: "exampleDeliveryStatus",
  disableRoundedTotal: 42,
  discountAmount: 42.42,
  dispatchAddress: "exampleDispatchAddress",
  dispatchAddressName: "exampleDispatchAddressName",
  docstatus: 42,
  fromDate: new Date(),
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  interCompanyOrderReference: "exampleInterCompanyOrderReference",
  isInternalCustomer: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  loyaltyAmount: 42.42,
  loyaltyPoints: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  orderType: "exampleOrderType",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  perBilled: 42.42,
  perDelivered: 42.42,
  perPicked: 42.42,
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  representsCompany: "exampleRepresentsCompany",
  reserveStock: 42,
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  skipDeliveryNote: 42,
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
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    additionalDiscountPercentage: 42.42,
    addressDisplay: "exampleAddressDisplay",
    advancePaid: 42.42,
    amendedFrom: "exampleAmendedFrom",
    amountEligibleForCommission: 42.42,
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
    billingStatus: "exampleBillingStatus",
    campaign: "exampleCampaign",
    commissionRate: 42.42,
    company: "exampleCompany",
    companyAddress: "exampleCompanyAddress",
    companyAddressDisplay: "exampleCompanyAddressDisplay",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    contactPhone: "exampleContactPhone",
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
    deliveryDate: new Date(),
    deliveryStatus: "exampleDeliveryStatus",
    disableRoundedTotal: 42,
    discountAmount: 42.42,
    dispatchAddress: "exampleDispatchAddress",
    dispatchAddressName: "exampleDispatchAddressName",
    docstatus: 42,
    fromDate: new Date(),
    grandTotal: 42.42,
    groupSameItems: 42,
    id: "exampleId",
    idx: 42,
    ignorePricingRule: 42,
    inWords: "exampleInWords",
    incoterm: "exampleIncoterm",
    interCompanyOrderReference: "exampleInterCompanyOrderReference",
    isInternalCustomer: 42,
    language: "exampleLanguage",
    letterHead: "exampleLetterHead",
    loyaltyAmount: 42.42,
    loyaltyPoints: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namedPlace: "exampleNamedPlace",
    namingSeries: "exampleNamingSeries",
    netTotal: 42.42,
    orderType: "exampleOrderType",
    otherChargesCalculation: "exampleOtherChargesCalculation",
    owner: "exampleOwner",
    partyAccountCurrency: "examplePartyAccountCurrency",
    paymentTermsTemplate: "examplePaymentTermsTemplate",
    perBilled: 42.42,
    perDelivered: 42.42,
    perPicked: 42.42,
    plcConversionRate: 42.42,
    poDate: new Date(),
    poNo: "examplePoNo",
    priceListCurrency: "examplePriceListCurrency",
    project: "exampleProject",
    representsCompany: "exampleRepresentsCompany",
    reserveStock: 42,
    roundedTotal: 42.42,
    roundingAdjustment: 42.42,
    salesPartner: "exampleSalesPartner",
    scanBarcode: "exampleScanBarcode",
    selectPrintHeading: "exampleSelectPrintHeading",
    sellingPriceList: "exampleSellingPriceList",
    setWarehouse: "exampleSetWarehouse",
    shippingAddress: "exampleShippingAddress",
    shippingAddressName: "exampleShippingAddressName",
    shippingRule: "exampleShippingRule",
    skipDeliveryNote: 42,
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
    totalCommission: 42.42,
    totalNetWeight: 42.42,
    totalQty: 42.42,
    totalTaxesAndCharges: 42.42,
    transactionDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  advancePaid: 42.42,
  amendedFrom: "exampleAmendedFrom",
  amountEligibleForCommission: 42.42,
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
  billingStatus: "exampleBillingStatus",
  campaign: "exampleCampaign",
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  contactPhone: "exampleContactPhone",
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
  deliveryDate: new Date(),
  deliveryStatus: "exampleDeliveryStatus",
  disableRoundedTotal: 42,
  discountAmount: 42.42,
  dispatchAddress: "exampleDispatchAddress",
  dispatchAddressName: "exampleDispatchAddressName",
  docstatus: 42,
  fromDate: new Date(),
  grandTotal: 42.42,
  groupSameItems: 42,
  id: "exampleId",
  idx: 42,
  ignorePricingRule: 42,
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  interCompanyOrderReference: "exampleInterCompanyOrderReference",
  isInternalCustomer: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  loyaltyAmount: 42.42,
  loyaltyPoints: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  orderType: "exampleOrderType",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  perBilled: 42.42,
  perDelivered: 42.42,
  perPicked: 42.42,
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  representsCompany: "exampleRepresentsCompany",
  reserveStock: 42,
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressName: "exampleShippingAddressName",
  shippingRule: "exampleShippingRule",
  skipDeliveryNote: 42,
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
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createSalesOrder() {
    return CREATE_RESULT;
  },
  salesOrders: () => FIND_MANY_RESULT,
  salesOrder: ({ where }: { where: { id: string } }) => {
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

describe("SalesOrder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SalesOrderService,
          useValue: service,
        },
      ],
      controllers: [SalesOrderController],
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

  test("POST /salesOrders", async () => {
    await request(app.getHttpServer())
      .post("/salesOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        deliveryDate: CREATE_RESULT.deliveryDate.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        poDate: CREATE_RESULT.poDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /salesOrders", async () => {
    await request(app.getHttpServer())
      .get("/salesOrders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          deliveryDate: FIND_MANY_RESULT[0].deliveryDate.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          poDate: FIND_MANY_RESULT[0].poDate.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /salesOrders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salesOrders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /salesOrders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salesOrders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        deliveryDate: FIND_ONE_RESULT.deliveryDate.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        poDate: FIND_ONE_RESULT.poDate.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /salesOrders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/salesOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        deliveryDate: CREATE_RESULT.deliveryDate.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        poDate: CREATE_RESULT.poDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/salesOrders")
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
