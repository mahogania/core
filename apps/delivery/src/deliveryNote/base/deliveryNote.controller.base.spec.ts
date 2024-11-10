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
import { DeliveryNoteController } from "../deliveryNote.controller";
import { DeliveryNoteService } from "../deliveryNote.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
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
  campaign: "exampleCampaign",
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
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
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  disableRoundedTotal: "true",
  discountAmount: 42.42,
  dispatchAddress: "exampleDispatchAddress",
  dispatchAddressName: "exampleDispatchAddressName",
  docstatus: 42,
  driver: "exampleDriver",
  driverName: "exampleDriverName",
  excisePage: "exampleExcisePage",
  grandTotal: 42.42,
  groupSameItems: "true",
  id: "exampleId",
  idx: 42,
  ignorePricingRule: "true",
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  installationStatus: "exampleInstallationStatus",
  instructions: "exampleInstructions",
  interCompanyReference: "exampleInterCompanyReference",
  isInternalCustomer: "true",
  isReturn: "true",
  issueCreditNote: "true",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  lrDate: new Date(),
  lrNo: "exampleLrNo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  perBilled: 42.42,
  perInstalled: 42.42,
  perReturned: 42.42,
  pickList: "examplePickList",
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  postingDate: new Date(),
  postingTime: new Date(),
  priceListCurrency: "examplePriceListCurrency",
  printWithoutAmount: "true",
  project: "exampleProject",
  representsCompany: "exampleRepresentsCompany",
  returnAgainst: "exampleReturnAgainst",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setPostingTime: "true",
  setTargetWarehouse: "exampleSetTargetWarehouse",
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
  total: 42.42,
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transporter: "exampleTransporter",
  transporterName: "exampleTransporterName",
  updatedAt: new Date(),
  vehicleNo: "exampleVehicleNo",
};
const CREATE_RESULT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
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
  campaign: "exampleCampaign",
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
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
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  disableRoundedTotal: "true",
  discountAmount: 42.42,
  dispatchAddress: "exampleDispatchAddress",
  dispatchAddressName: "exampleDispatchAddressName",
  docstatus: 42,
  driver: "exampleDriver",
  driverName: "exampleDriverName",
  excisePage: "exampleExcisePage",
  grandTotal: 42.42,
  groupSameItems: "true",
  id: "exampleId",
  idx: 42,
  ignorePricingRule: "true",
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  installationStatus: "exampleInstallationStatus",
  instructions: "exampleInstructions",
  interCompanyReference: "exampleInterCompanyReference",
  isInternalCustomer: "true",
  isReturn: "true",
  issueCreditNote: "true",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  lrDate: new Date(),
  lrNo: "exampleLrNo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  perBilled: 42.42,
  perInstalled: 42.42,
  perReturned: 42.42,
  pickList: "examplePickList",
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  postingDate: new Date(),
  postingTime: new Date(),
  priceListCurrency: "examplePriceListCurrency",
  printWithoutAmount: "true",
  project: "exampleProject",
  representsCompany: "exampleRepresentsCompany",
  returnAgainst: "exampleReturnAgainst",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setPostingTime: "true",
  setTargetWarehouse: "exampleSetTargetWarehouse",
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
  total: 42.42,
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transporter: "exampleTransporter",
  transporterName: "exampleTransporterName",
  updatedAt: new Date(),
  vehicleNo: "exampleVehicleNo",
};
const FIND_MANY_RESULT = [
  {
    additionalDiscountPercentage: 42.42,
    addressDisplay: "exampleAddressDisplay",
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
    campaign: "exampleCampaign",
    commissionRate: 42.42,
    company: "exampleCompany",
    companyAddress: "exampleCompanyAddress",
    companyAddressDisplay: "exampleCompanyAddressDisplay",
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
    customerAddress: "exampleCustomerAddress",
    customerGroup: "exampleCustomerGroup",
    customerName: "exampleCustomerName",
    disableRoundedTotal: "true",
    discountAmount: 42.42,
    dispatchAddress: "exampleDispatchAddress",
    dispatchAddressName: "exampleDispatchAddressName",
    docstatus: 42,
    driver: "exampleDriver",
    driverName: "exampleDriverName",
    excisePage: "exampleExcisePage",
    grandTotal: 42.42,
    groupSameItems: "true",
    id: "exampleId",
    idx: 42,
    ignorePricingRule: "true",
    inWords: "exampleInWords",
    incoterm: "exampleIncoterm",
    installationStatus: "exampleInstallationStatus",
    instructions: "exampleInstructions",
    interCompanyReference: "exampleInterCompanyReference",
    isInternalCustomer: "true",
    isReturn: "true",
    issueCreditNote: "true",
    language: "exampleLanguage",
    letterHead: "exampleLetterHead",
    lrDate: new Date(),
    lrNo: "exampleLrNo",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namedPlace: "exampleNamedPlace",
    namingSeries: "exampleNamingSeries",
    netTotal: 42.42,
    otherChargesCalculation: "exampleOtherChargesCalculation",
    owner: "exampleOwner",
    perBilled: 42.42,
    perInstalled: 42.42,
    perReturned: 42.42,
    pickList: "examplePickList",
    plcConversionRate: 42.42,
    poDate: new Date(),
    poNo: "examplePoNo",
    postingDate: new Date(),
    postingTime: new Date(),
    priceListCurrency: "examplePriceListCurrency",
    printWithoutAmount: "true",
    project: "exampleProject",
    representsCompany: "exampleRepresentsCompany",
    returnAgainst: "exampleReturnAgainst",
    roundedTotal: 42.42,
    roundingAdjustment: 42.42,
    salesPartner: "exampleSalesPartner",
    scanBarcode: "exampleScanBarcode",
    selectPrintHeading: "exampleSelectPrintHeading",
    sellingPriceList: "exampleSellingPriceList",
    setPostingTime: "true",
    setTargetWarehouse: "exampleSetTargetWarehouse",
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
    total: 42.42,
    totalCommission: 42.42,
    totalNetWeight: 42.42,
    totalQty: 42.42,
    totalTaxesAndCharges: 42.42,
    transporter: "exampleTransporter",
    transporterName: "exampleTransporterName",
    updatedAt: new Date(),
    vehicleNo: "exampleVehicleNo",
  },
];
const FIND_ONE_RESULT = {
  additionalDiscountPercentage: 42.42,
  addressDisplay: "exampleAddressDisplay",
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
  campaign: "exampleCampaign",
  commissionRate: 42.42,
  company: "exampleCompany",
  companyAddress: "exampleCompanyAddress",
  companyAddressDisplay: "exampleCompanyAddressDisplay",
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
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  disableRoundedTotal: "true",
  discountAmount: 42.42,
  dispatchAddress: "exampleDispatchAddress",
  dispatchAddressName: "exampleDispatchAddressName",
  docstatus: 42,
  driver: "exampleDriver",
  driverName: "exampleDriverName",
  excisePage: "exampleExcisePage",
  grandTotal: 42.42,
  groupSameItems: "true",
  id: "exampleId",
  idx: 42,
  ignorePricingRule: "true",
  inWords: "exampleInWords",
  incoterm: "exampleIncoterm",
  installationStatus: "exampleInstallationStatus",
  instructions: "exampleInstructions",
  interCompanyReference: "exampleInterCompanyReference",
  isInternalCustomer: "true",
  isReturn: "true",
  issueCreditNote: "true",
  language: "exampleLanguage",
  letterHead: "exampleLetterHead",
  lrDate: new Date(),
  lrNo: "exampleLrNo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namedPlace: "exampleNamedPlace",
  namingSeries: "exampleNamingSeries",
  netTotal: 42.42,
  otherChargesCalculation: "exampleOtherChargesCalculation",
  owner: "exampleOwner",
  perBilled: 42.42,
  perInstalled: 42.42,
  perReturned: 42.42,
  pickList: "examplePickList",
  plcConversionRate: 42.42,
  poDate: new Date(),
  poNo: "examplePoNo",
  postingDate: new Date(),
  postingTime: new Date(),
  priceListCurrency: "examplePriceListCurrency",
  printWithoutAmount: "true",
  project: "exampleProject",
  representsCompany: "exampleRepresentsCompany",
  returnAgainst: "exampleReturnAgainst",
  roundedTotal: 42.42,
  roundingAdjustment: 42.42,
  salesPartner: "exampleSalesPartner",
  scanBarcode: "exampleScanBarcode",
  selectPrintHeading: "exampleSelectPrintHeading",
  sellingPriceList: "exampleSellingPriceList",
  setPostingTime: "true",
  setTargetWarehouse: "exampleSetTargetWarehouse",
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
  total: 42.42,
  totalCommission: 42.42,
  totalNetWeight: 42.42,
  totalQty: 42.42,
  totalTaxesAndCharges: 42.42,
  transporter: "exampleTransporter",
  transporterName: "exampleTransporterName",
  updatedAt: new Date(),
  vehicleNo: "exampleVehicleNo",
};

const service = {
  createDeliveryNote() {
    return CREATE_RESULT;
  },
  deliveryNotes: () => FIND_MANY_RESULT,
  deliveryNote: ({ where }: { where: { id: string } }) => {
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

describe("DeliveryNote", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliveryNoteService,
          useValue: service,
        },
      ],
      controllers: [DeliveryNoteController],
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

  test("POST /deliveryNotes", async () => {
    await request(app.getHttpServer())
      .post("/deliveryNotes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        lrDate: CREATE_RESULT.lrDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        poDate: CREATE_RESULT.poDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /deliveryNotes", async () => {
    await request(app.getHttpServer())
      .get("/deliveryNotes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          lrDate: FIND_MANY_RESULT[0].lrDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          poDate: FIND_MANY_RESULT[0].poDate.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          postingTime: FIND_MANY_RESULT[0].postingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /deliveryNotes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryNotes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliveryNotes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryNotes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        lrDate: FIND_ONE_RESULT.lrDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        poDate: FIND_ONE_RESULT.poDate.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        postingTime: FIND_ONE_RESULT.postingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /deliveryNotes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deliveryNotes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        lrDate: CREATE_RESULT.lrDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        poDate: CREATE_RESULT.poDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/deliveryNotes")
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
