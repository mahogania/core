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
import { PurchaseOrderController } from "../purchaseOrder.controller";
import { PurchaseOrderService } from "../purchaseOrder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
  advancePaid: 42.42,
  amendedFrom: "exampleAmendedFrom",
  applyDiscountOn: "exampleApplyDiscountOn",
  applyTds: 42,
  autoRepeat: "exampleAutoRepeat",
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTaxWithholdingNetTotal: 42.42,
  baseTaxesAndChargesAdded: 42.42,
  baseTaxesAndChargesDeducted: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  billingAddress: "exampleBillingAddress",
  billingAddressDisplay: "exampleBillingAddressDisplay",
  buyingPriceList: "exampleBuyingPriceList",
  company: "exampleCompany",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerContactDisplay: "exampleCustomerContactDisplay",
  customerContactEmail: "exampleCustomerContactEmail",
  customerContactMobile: "exampleCustomerContactMobile",
  customerContactPerson: "exampleCustomerContactPerson",
  customerName: "exampleCustomerName",
  disableRoundedTotal: 42,
  discountAmount: 42.42,
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
  isInternalSupplier: 42,
  isOldSubcontractingFlow: 42,
  isSubcontracted: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  orderConfirmationDate: new Date(),
  orderConfirmationNo: "exampleOrderConfirmationNo",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  perBilled: 42.42,
  perReceived: 42.42,
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  refSq: "exampleRefSq",
  representsCompany: "exampleRepresentsCompany",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  scanBarcode: "exampleScanBarcode",
  scheduleDate: new Date(),
  selectPrintHeading: "exampleSelectPrintHeading",
  setFromWarehouse: "exampleSetFromWarehouse",
  setReserveWarehouse: "exampleSetReserveWarehouse",
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressDisplay: "exampleShippingAddressDisplay",
  shippingRule: "exampleShippingRule",
  status: "exampleStatus",
  supplier: "exampleSupplier",
  supplierAddress: "exampleSupplierAddress",
  supplierName: "exampleSupplierName",
  supplierWarehouse: "exampleSupplierWarehouse",
  taxCategory: "exampleTaxCategory",
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  taxWithholdingNetTotal: 42.42,
  taxesAndCharges: "exampleTaxesAndCharges",
  taxesAndChargesAdded: 42.42,
  taxesAndChargesDeducted: 42.42,
  tcName: "exampleTcName",
  terms: "exampleTerms",
  title: "exampleTitle",
  toDate: new Date(),
  total: 42.42,
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
  applyDiscountOn: "exampleApplyDiscountOn",
  applyTds: 42,
  autoRepeat: "exampleAutoRepeat",
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTaxWithholdingNetTotal: 42.42,
  baseTaxesAndChargesAdded: 42.42,
  baseTaxesAndChargesDeducted: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  billingAddress: "exampleBillingAddress",
  billingAddressDisplay: "exampleBillingAddressDisplay",
  buyingPriceList: "exampleBuyingPriceList",
  company: "exampleCompany",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerContactDisplay: "exampleCustomerContactDisplay",
  customerContactEmail: "exampleCustomerContactEmail",
  customerContactMobile: "exampleCustomerContactMobile",
  customerContactPerson: "exampleCustomerContactPerson",
  customerName: "exampleCustomerName",
  disableRoundedTotal: 42,
  discountAmount: 42.42,
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
  isInternalSupplier: 42,
  isOldSubcontractingFlow: 42,
  isSubcontracted: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  orderConfirmationDate: new Date(),
  orderConfirmationNo: "exampleOrderConfirmationNo",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  perBilled: 42.42,
  perReceived: 42.42,
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  refSq: "exampleRefSq",
  representsCompany: "exampleRepresentsCompany",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  scanBarcode: "exampleScanBarcode",
  scheduleDate: new Date(),
  selectPrintHeading: "exampleSelectPrintHeading",
  setFromWarehouse: "exampleSetFromWarehouse",
  setReserveWarehouse: "exampleSetReserveWarehouse",
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressDisplay: "exampleShippingAddressDisplay",
  shippingRule: "exampleShippingRule",
  status: "exampleStatus",
  supplier: "exampleSupplier",
  supplierAddress: "exampleSupplierAddress",
  supplierName: "exampleSupplierName",
  supplierWarehouse: "exampleSupplierWarehouse",
  taxCategory: "exampleTaxCategory",
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  taxWithholdingNetTotal: 42.42,
  taxesAndCharges: "exampleTaxesAndCharges",
  taxesAndChargesAdded: 42.42,
  taxesAndChargesDeducted: 42.42,
  tcName: "exampleTcName",
  terms: "exampleTerms",
  title: "exampleTitle",
  toDate: new Date(),
  total: 42.42,
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
    applyDiscountOn: "exampleApplyDiscountOn",
    applyTds: 42,
    autoRepeat: "exampleAutoRepeat",
    baseDiscountAmount: 42.42,
    baseGrandTotal: 42.42,
    baseInWords: "exampleBaseInWords",
    baseNetTotal: 42.42,
    baseRoundedTotal: 42.42,
    baseRoundingAdjustment: 42.42,
    baseTaxWithholdingNetTotal: 42.42,
    baseTaxesAndChargesAdded: 42.42,
    baseTaxesAndChargesDeducted: 42.42,
    baseTotal: 42.42,
    baseTotalTaxesAndCharges: 42.42,
    billingAddress: "exampleBillingAddress",
    billingAddressDisplay: "exampleBillingAddressDisplay",
    buyingPriceList: "exampleBuyingPriceList",
    company: "exampleCompany",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    conversionRate: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    customer: "exampleCustomer",
    customerContactDisplay: "exampleCustomerContactDisplay",
    customerContactEmail: "exampleCustomerContactEmail",
    customerContactMobile: "exampleCustomerContactMobile",
    customerContactPerson: "exampleCustomerContactPerson",
    customerName: "exampleCustomerName",
    disableRoundedTotal: 42,
    discountAmount: 42.42,
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
    isInternalSupplier: 42,
    isOldSubcontractingFlow: 42,
    isSubcontracted: 42,
    language: "exampleLanguage",
    letterHead: "exampleLetterHead",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namedPlace: "exampleNamedPlace",
    namingSeries: "exampleNamingSeries",
    netTotal: 42.42,
    orderConfirmationDate: new Date(),
    orderConfirmationNo: "exampleOrderConfirmationNo",
    otherChargesCalculation: "exampleOtherChargesCalculation",
    owner: "exampleOwner",
    partyAccountCurrency: "examplePartyAccountCurrency",
    paymentTermsTemplate: "examplePaymentTermsTemplate",
    perBilled: 42.42,
    perReceived: 42.42,
    plcConversionRate: 42.42,
    priceListCurrency: "examplePriceListCurrency",
    project: "exampleProject",
    refSq: "exampleRefSq",
    representsCompany: "exampleRepresentsCompany",
    roundedTotal: 42.42,
    roundingAdjustment: 42.42,
    scanBarcode: "exampleScanBarcode",
    scheduleDate: new Date(),
    selectPrintHeading: "exampleSelectPrintHeading",
    setFromWarehouse: "exampleSetFromWarehouse",
    setReserveWarehouse: "exampleSetReserveWarehouse",
    setWarehouse: "exampleSetWarehouse",
    shippingAddress: "exampleShippingAddress",
    shippingAddressDisplay: "exampleShippingAddressDisplay",
    shippingRule: "exampleShippingRule",
    status: "exampleStatus",
    supplier: "exampleSupplier",
    supplierAddress: "exampleSupplierAddress",
    supplierName: "exampleSupplierName",
    supplierWarehouse: "exampleSupplierWarehouse",
    taxCategory: "exampleTaxCategory",
    taxWithholdingCategory: "exampleTaxWithholdingCategory",
    taxWithholdingNetTotal: 42.42,
    taxesAndCharges: "exampleTaxesAndCharges",
    taxesAndChargesAdded: 42.42,
    taxesAndChargesDeducted: 42.42,
    tcName: "exampleTcName",
    terms: "exampleTerms",
    title: "exampleTitle",
    toDate: new Date(),
    total: 42.42,
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
  applyDiscountOn: "exampleApplyDiscountOn",
  applyTds: 42,
  autoRepeat: "exampleAutoRepeat",
  baseDiscountAmount: 42.42,
  baseGrandTotal: 42.42,
  baseInWords: "exampleBaseInWords",
  baseNetTotal: 42.42,
  baseRoundedTotal: 42.42,
  baseRoundingAdjustment: 42.42,
  baseTaxWithholdingNetTotal: 42.42,
  baseTaxesAndChargesAdded: 42.42,
  baseTaxesAndChargesDeducted: 42.42,
  baseTotal: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  billingAddress: "exampleBillingAddress",
  billingAddressDisplay: "exampleBillingAddressDisplay",
  buyingPriceList: "exampleBuyingPriceList",
  company: "exampleCompany",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  conversionRate: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  customer: "exampleCustomer",
  customerContactDisplay: "exampleCustomerContactDisplay",
  customerContactEmail: "exampleCustomerContactEmail",
  customerContactMobile: "exampleCustomerContactMobile",
  customerContactPerson: "exampleCustomerContactPerson",
  customerName: "exampleCustomerName",
  disableRoundedTotal: 42,
  discountAmount: 42.42,
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
  isInternalSupplier: 42,
  isOldSubcontractingFlow: 42,
  isSubcontracted: 42,
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  orderConfirmationDate: new Date(),
  orderConfirmationNo: "exampleOrderConfirmationNo",
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  partyAccountCurrency: "examplePartyAccountCurrency",
  paymentTermsTemplate: "examplePaymentTermsTemplate",
  perBilled: 42.42,
  perReceived: 42.42,
  plcConversionRate: 42.42,
  priceListCurrency: "examplePriceListCurrency",
  project: "exampleProject",
  refSq: "exampleRefSq",
  representsCompany: "exampleRepresentsCompany",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  scanBarcode: "exampleScanBarcode",
  scheduleDate: new Date(),
  selectPrintHeading: "exampleSelectPrintHeading",
  setFromWarehouse: "exampleSetFromWarehouse",
  setReserveWarehouse: "exampleSetReserveWarehouse",
  setWarehouse: "exampleSetWarehouse",
  shippingAddress: "exampleShippingAddress",
  shippingAddressDisplay: "exampleShippingAddressDisplay",
  shippingRule: "exampleShippingRule",
  status: "exampleStatus",
  supplier: "exampleSupplier",
  supplierAddress: "exampleSupplierAddress",
  supplierName: "exampleSupplierName",
  supplierWarehouse: "exampleSupplierWarehouse",
  taxCategory: "exampleTaxCategory",
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  taxWithholdingNetTotal: 42.42,
  taxesAndCharges: "exampleTaxesAndCharges",
  taxesAndChargesAdded: 42.42,
  taxesAndChargesDeducted: 42.42,
  tcName: "exampleTcName",
  terms: "exampleTerms",
  title: "exampleTitle",
  toDate: new Date(),
  total: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transactionDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createPurchaseOrder() {
    return CREATE_RESULT;
  },
  purchaseOrders: () => FIND_MANY_RESULT,
  purchaseOrder: ({ where }: { where: { id: string } }) => {
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

describe("PurchaseOrder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PurchaseOrderService,
          useValue: service,
        },
      ],
      controllers: [PurchaseOrderController],
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

  test("POST /purchaseOrders", async () => {
    await request(app.getHttpServer())
      .post("/purchaseOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        orderConfirmationDate:
          CREATE_RESULT.orderConfirmationDate.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /purchaseOrders", async () => {
    await request(app.getHttpServer())
      .get("/purchaseOrders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          orderConfirmationDate:
            FIND_MANY_RESULT[0].orderConfirmationDate.toISOString(),
          scheduleDate: FIND_MANY_RESULT[0].scheduleDate.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /purchaseOrders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseOrders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /purchaseOrders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseOrders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        orderConfirmationDate:
          FIND_ONE_RESULT.orderConfirmationDate.toISOString(),
        scheduleDate: FIND_ONE_RESULT.scheduleDate.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /purchaseOrders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/purchaseOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        orderConfirmationDate:
          CREATE_RESULT.orderConfirmationDate.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/purchaseOrders")
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
