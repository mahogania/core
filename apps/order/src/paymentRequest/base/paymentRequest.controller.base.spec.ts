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
import { PaymentRequestController } from "../paymentRequest.controller";
import { PaymentRequestService } from "../paymentRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  account: "exampleAccount",
  amendedFrom: "exampleAmendedFrom",
  bank: "exampleBank",
  bankAccount: "exampleBankAccount",
  bankAccountNo: "exampleBankAccountNo",
  branchCode: "exampleBranchCode",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  docstatus: 42,
  emailTo: "exampleEmailTo",
  grandTotal: 42.42,
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  isASubscription: 42,
  makeSalesInvoice: 42,
  message: "exampleMessage",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  muteEmail: 42,
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  paymentAccount: "examplePaymentAccount",
  paymentChannel: "examplePaymentChannel",
  paymentGateway: "examplePaymentGateway",
  paymentGatewayAccount: "examplePaymentGatewayAccount",
  paymentOrder: "examplePaymentOrder",
  paymentRequestType: "examplePaymentRequestType",
  paymentUrl: "examplePaymentUrl",
  printFormat: "examplePrintFormat",
  project: "exampleProject",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  status: "exampleStatus",
  subject: "exampleSubject",
  swiftNumber: "exampleSwiftNumber",
  transactionDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  account: "exampleAccount",
  amendedFrom: "exampleAmendedFrom",
  bank: "exampleBank",
  bankAccount: "exampleBankAccount",
  bankAccountNo: "exampleBankAccountNo",
  branchCode: "exampleBranchCode",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  docstatus: 42,
  emailTo: "exampleEmailTo",
  grandTotal: 42.42,
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  isASubscription: 42,
  makeSalesInvoice: 42,
  message: "exampleMessage",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  muteEmail: 42,
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  paymentAccount: "examplePaymentAccount",
  paymentChannel: "examplePaymentChannel",
  paymentGateway: "examplePaymentGateway",
  paymentGatewayAccount: "examplePaymentGatewayAccount",
  paymentOrder: "examplePaymentOrder",
  paymentRequestType: "examplePaymentRequestType",
  paymentUrl: "examplePaymentUrl",
  printFormat: "examplePrintFormat",
  project: "exampleProject",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  status: "exampleStatus",
  subject: "exampleSubject",
  swiftNumber: "exampleSwiftNumber",
  transactionDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    account: "exampleAccount",
    amendedFrom: "exampleAmendedFrom",
    bank: "exampleBank",
    bankAccount: "exampleBankAccount",
    bankAccountNo: "exampleBankAccountNo",
    branchCode: "exampleBranchCode",
    company: "exampleCompany",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    docstatus: 42,
    emailTo: "exampleEmailTo",
    grandTotal: 42.42,
    iban: "exampleIban",
    id: "exampleId",
    idx: 42,
    isASubscription: 42,
    makeSalesInvoice: 42,
    message: "exampleMessage",
    modeOfPayment: "exampleModeOfPayment",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    muteEmail: 42,
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    party: "exampleParty",
    partyType: "examplePartyType",
    paymentAccount: "examplePaymentAccount",
    paymentChannel: "examplePaymentChannel",
    paymentGateway: "examplePaymentGateway",
    paymentGatewayAccount: "examplePaymentGatewayAccount",
    paymentOrder: "examplePaymentOrder",
    paymentRequestType: "examplePaymentRequestType",
    paymentUrl: "examplePaymentUrl",
    printFormat: "examplePrintFormat",
    project: "exampleProject",
    referenceDoctype: "exampleReferenceDoctype",
    referenceName: "exampleReferenceName",
    status: "exampleStatus",
    subject: "exampleSubject",
    swiftNumber: "exampleSwiftNumber",
    transactionDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  account: "exampleAccount",
  amendedFrom: "exampleAmendedFrom",
  bank: "exampleBank",
  bankAccount: "exampleBankAccount",
  bankAccountNo: "exampleBankAccountNo",
  branchCode: "exampleBranchCode",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  docstatus: 42,
  emailTo: "exampleEmailTo",
  grandTotal: 42.42,
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  isASubscription: 42,
  makeSalesInvoice: 42,
  message: "exampleMessage",
  modeOfPayment: "exampleModeOfPayment",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  muteEmail: 42,
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  paymentAccount: "examplePaymentAccount",
  paymentChannel: "examplePaymentChannel",
  paymentGateway: "examplePaymentGateway",
  paymentGatewayAccount: "examplePaymentGatewayAccount",
  paymentOrder: "examplePaymentOrder",
  paymentRequestType: "examplePaymentRequestType",
  paymentUrl: "examplePaymentUrl",
  printFormat: "examplePrintFormat",
  project: "exampleProject",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  status: "exampleStatus",
  subject: "exampleSubject",
  swiftNumber: "exampleSwiftNumber",
  transactionDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createPaymentRequest() {
    return CREATE_RESULT;
  },
  paymentRequests: () => FIND_MANY_RESULT,
  paymentRequest: ({ where }: { where: { id: string } }) => {
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

describe("PaymentRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentRequestService,
          useValue: service,
        },
      ],
      controllers: [PaymentRequestController],
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

  test("POST /paymentRequests", async () => {
    await request(app.getHttpServer())
      .post("/paymentRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /paymentRequests", async () => {
    await request(app.getHttpServer())
      .get("/paymentRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /paymentRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /paymentRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentRequests")
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
