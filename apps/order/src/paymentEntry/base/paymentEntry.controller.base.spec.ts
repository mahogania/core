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
import { PaymentEntryController } from "../paymentEntry.controller";
import { PaymentEntryService } from "../paymentEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  applyTaxWithholdingAmount: 42,
  autoRepeat: "exampleAutoRepeat",
  bank: "exampleBank",
  bankAccount: "exampleBankAccount",
  bankAccountNo: "exampleBankAccountNo",
  baseInWords: "exampleBaseInWords",
  basePaidAmount: 42.42,
  basePaidAmountAfterTax: 42.42,
  baseReceivedAmount: 42.42,
  baseReceivedAmountAfterTax: 42.42,
  baseTotalAllocatedAmount: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  bookAdvancePaymentsInSeparatePartyAccount: 42,
  clearanceDate: new Date(),
  company: "exampleCompany",
  contactEmail: "exampleContactEmail",
  contactPerson: "exampleContactPerson",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customRemarks: 42,
  differenceAmount: 42.42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  inWords: "exampleInWords",
  isOpening: "exampleIsOpening",
  letterHead: "exampleLetterHead",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  paidAmount: 42.42,
  paidAmountAfterTax: 42.42,
  paidFrom: "examplePaidFrom",
  paidFromAccountBalance: 42.42,
  paidFromAccountCurrency: "examplePaidFromAccountCurrency",
  paidFromAccountType: "examplePaidFromAccountType",
  paidTo: "examplePaidTo",
  paidToAccountBalance: 42.42,
  paidToAccountCurrency: "examplePaidToAccountCurrency",
  paidToAccountType: "examplePaidToAccountType",
  party: "exampleParty",
  partyBalance: 42.42,
  partyBankAccount: "examplePartyBankAccount",
  partyName: "examplePartyName",
  partyType: "examplePartyType",
  paymentOrder: "examplePaymentOrder",
  paymentOrderStatus: "examplePaymentOrderStatus",
  paymentType: "examplePaymentType",
  postingDate: new Date(),
  printHeading: "examplePrintHeading",
  project: "exampleProject",
  purchaseTaxesAndChargesTemplate: "examplePurchaseTaxesAndChargesTemplate",
  receivedAmount: 42.42,
  receivedAmountAfterTax: 42.42,
  reconcileOnAdvancePaymentDate: 42,
  referenceDate: new Date(),
  referenceNo: "exampleReferenceNo",
  remarks: "exampleRemarks",
  salesTaxesAndChargesTemplate: "exampleSalesTaxesAndChargesTemplate",
  sourceExchangeRate: 42.42,
  status: "exampleStatus",
  targetExchangeRate: 42.42,
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  title: "exampleTitle",
  totalAllocatedAmount: 42.42,
  totalTaxesAndCharges: 42.42,
  unallocatedAmount: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  applyTaxWithholdingAmount: 42,
  autoRepeat: "exampleAutoRepeat",
  bank: "exampleBank",
  bankAccount: "exampleBankAccount",
  bankAccountNo: "exampleBankAccountNo",
  baseInWords: "exampleBaseInWords",
  basePaidAmount: 42.42,
  basePaidAmountAfterTax: 42.42,
  baseReceivedAmount: 42.42,
  baseReceivedAmountAfterTax: 42.42,
  baseTotalAllocatedAmount: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  bookAdvancePaymentsInSeparatePartyAccount: 42,
  clearanceDate: new Date(),
  company: "exampleCompany",
  contactEmail: "exampleContactEmail",
  contactPerson: "exampleContactPerson",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customRemarks: 42,
  differenceAmount: 42.42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  inWords: "exampleInWords",
  isOpening: "exampleIsOpening",
  letterHead: "exampleLetterHead",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  paidAmount: 42.42,
  paidAmountAfterTax: 42.42,
  paidFrom: "examplePaidFrom",
  paidFromAccountBalance: 42.42,
  paidFromAccountCurrency: "examplePaidFromAccountCurrency",
  paidFromAccountType: "examplePaidFromAccountType",
  paidTo: "examplePaidTo",
  paidToAccountBalance: 42.42,
  paidToAccountCurrency: "examplePaidToAccountCurrency",
  paidToAccountType: "examplePaidToAccountType",
  party: "exampleParty",
  partyBalance: 42.42,
  partyBankAccount: "examplePartyBankAccount",
  partyName: "examplePartyName",
  partyType: "examplePartyType",
  paymentOrder: "examplePaymentOrder",
  paymentOrderStatus: "examplePaymentOrderStatus",
  paymentType: "examplePaymentType",
  postingDate: new Date(),
  printHeading: "examplePrintHeading",
  project: "exampleProject",
  purchaseTaxesAndChargesTemplate: "examplePurchaseTaxesAndChargesTemplate",
  receivedAmount: 42.42,
  receivedAmountAfterTax: 42.42,
  reconcileOnAdvancePaymentDate: 42,
  referenceDate: new Date(),
  referenceNo: "exampleReferenceNo",
  remarks: "exampleRemarks",
  salesTaxesAndChargesTemplate: "exampleSalesTaxesAndChargesTemplate",
  sourceExchangeRate: 42.42,
  status: "exampleStatus",
  targetExchangeRate: 42.42,
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  title: "exampleTitle",
  totalAllocatedAmount: 42.42,
  totalTaxesAndCharges: 42.42,
  unallocatedAmount: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    applyTaxWithholdingAmount: 42,
    autoRepeat: "exampleAutoRepeat",
    bank: "exampleBank",
    bankAccount: "exampleBankAccount",
    bankAccountNo: "exampleBankAccountNo",
    baseInWords: "exampleBaseInWords",
    basePaidAmount: 42.42,
    basePaidAmountAfterTax: 42.42,
    baseReceivedAmount: 42.42,
    baseReceivedAmountAfterTax: 42.42,
    baseTotalAllocatedAmount: 42.42,
    baseTotalTaxesAndCharges: 42.42,
    bookAdvancePaymentsInSeparatePartyAccount: 42,
    clearanceDate: new Date(),
    company: "exampleCompany",
    contactEmail: "exampleContactEmail",
    contactPerson: "exampleContactPerson",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    customRemarks: 42,
    differenceAmount: 42.42,
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    inWords: "exampleInWords",
    isOpening: "exampleIsOpening",
    letterHead: "exampleLetterHead",
    modeOfPayment: "exampleModeOfPayment",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    paidAmount: 42.42,
    paidAmountAfterTax: 42.42,
    paidFrom: "examplePaidFrom",
    paidFromAccountBalance: 42.42,
    paidFromAccountCurrency: "examplePaidFromAccountCurrency",
    paidFromAccountType: "examplePaidFromAccountType",
    paidTo: "examplePaidTo",
    paidToAccountBalance: 42.42,
    paidToAccountCurrency: "examplePaidToAccountCurrency",
    paidToAccountType: "examplePaidToAccountType",
    party: "exampleParty",
    partyBalance: 42.42,
    partyBankAccount: "examplePartyBankAccount",
    partyName: "examplePartyName",
    partyType: "examplePartyType",
    paymentOrder: "examplePaymentOrder",
    paymentOrderStatus: "examplePaymentOrderStatus",
    paymentType: "examplePaymentType",
    postingDate: new Date(),
    printHeading: "examplePrintHeading",
    project: "exampleProject",
    purchaseTaxesAndChargesTemplate: "examplePurchaseTaxesAndChargesTemplate",
    receivedAmount: 42.42,
    receivedAmountAfterTax: 42.42,
    reconcileOnAdvancePaymentDate: 42,
    referenceDate: new Date(),
    referenceNo: "exampleReferenceNo",
    remarks: "exampleRemarks",
    salesTaxesAndChargesTemplate: "exampleSalesTaxesAndChargesTemplate",
    sourceExchangeRate: 42.42,
    status: "exampleStatus",
    targetExchangeRate: 42.42,
    taxWithholdingCategory: "exampleTaxWithholdingCategory",
    title: "exampleTitle",
    totalAllocatedAmount: 42.42,
    totalTaxesAndCharges: 42.42,
    unallocatedAmount: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  applyTaxWithholdingAmount: 42,
  autoRepeat: "exampleAutoRepeat",
  bank: "exampleBank",
  bankAccount: "exampleBankAccount",
  bankAccountNo: "exampleBankAccountNo",
  baseInWords: "exampleBaseInWords",
  basePaidAmount: 42.42,
  basePaidAmountAfterTax: 42.42,
  baseReceivedAmount: 42.42,
  baseReceivedAmountAfterTax: 42.42,
  baseTotalAllocatedAmount: 42.42,
  baseTotalTaxesAndCharges: 42.42,
  bookAdvancePaymentsInSeparatePartyAccount: 42,
  clearanceDate: new Date(),
  company: "exampleCompany",
  contactEmail: "exampleContactEmail",
  contactPerson: "exampleContactPerson",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customRemarks: 42,
  differenceAmount: 42.42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  inWords: "exampleInWords",
  isOpening: "exampleIsOpening",
  letterHead: "exampleLetterHead",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  paidAmount: 42.42,
  paidAmountAfterTax: 42.42,
  paidFrom: "examplePaidFrom",
  paidFromAccountBalance: 42.42,
  paidFromAccountCurrency: "examplePaidFromAccountCurrency",
  paidFromAccountType: "examplePaidFromAccountType",
  paidTo: "examplePaidTo",
  paidToAccountBalance: 42.42,
  paidToAccountCurrency: "examplePaidToAccountCurrency",
  paidToAccountType: "examplePaidToAccountType",
  party: "exampleParty",
  partyBalance: 42.42,
  partyBankAccount: "examplePartyBankAccount",
  partyName: "examplePartyName",
  partyType: "examplePartyType",
  paymentOrder: "examplePaymentOrder",
  paymentOrderStatus: "examplePaymentOrderStatus",
  paymentType: "examplePaymentType",
  postingDate: new Date(),
  printHeading: "examplePrintHeading",
  project: "exampleProject",
  purchaseTaxesAndChargesTemplate: "examplePurchaseTaxesAndChargesTemplate",
  receivedAmount: 42.42,
  receivedAmountAfterTax: 42.42,
  reconcileOnAdvancePaymentDate: 42,
  referenceDate: new Date(),
  referenceNo: "exampleReferenceNo",
  remarks: "exampleRemarks",
  salesTaxesAndChargesTemplate: "exampleSalesTaxesAndChargesTemplate",
  sourceExchangeRate: 42.42,
  status: "exampleStatus",
  targetExchangeRate: 42.42,
  taxWithholdingCategory: "exampleTaxWithholdingCategory",
  title: "exampleTitle",
  totalAllocatedAmount: 42.42,
  totalTaxesAndCharges: 42.42,
  unallocatedAmount: 42.42,
  updatedAt: new Date(),
};

const service = {
  createPaymentEntry() {
    return CREATE_RESULT;
  },
  paymentEntries: () => FIND_MANY_RESULT,
  paymentEntry: ({ where }: { where: { id: string } }) => {
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

describe("PaymentEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentEntryService,
          useValue: service,
        },
      ],
      controllers: [PaymentEntryController],
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

  test("POST /paymentEntries", async () => {
    await request(app.getHttpServer())
      .post("/paymentEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        referenceDate: CREATE_RESULT.referenceDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /paymentEntries", async () => {
    await request(app.getHttpServer())
      .get("/paymentEntries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          clearanceDate: FIND_MANY_RESULT[0].clearanceDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          referenceDate: FIND_MANY_RESULT[0].referenceDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /paymentEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        clearanceDate: FIND_ONE_RESULT.clearanceDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        referenceDate: FIND_ONE_RESULT.referenceDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /paymentEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        referenceDate: CREATE_RESULT.referenceDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentEntries")
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
