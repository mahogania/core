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
import { BankTransactionController } from "../bankTransaction.controller";
import { BankTransactionService } from "../bankTransaction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allocatedAmount: 42.42,
  amendedFrom: "exampleAmendedFrom",
  bankAccount: "exampleBankAccount",
  bankPartyAccountNumber: "exampleBankPartyAccountNumber",
  bankPartyIban: "exampleBankPartyIban",
  bankPartyName: "exampleBankPartyName",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  date: new Date(),
  deposit: 42.42,
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  referenceNumber: "exampleReferenceNumber",
  status: "exampleStatus",
  transactionId: "exampleTransactionId",
  transactionType: "exampleTransactionType",
  unallocatedAmount: 42.42,
  updatedAt: new Date(),
  withdrawal: 42.42,
};
const CREATE_RESULT = {
  allocatedAmount: 42.42,
  amendedFrom: "exampleAmendedFrom",
  bankAccount: "exampleBankAccount",
  bankPartyAccountNumber: "exampleBankPartyAccountNumber",
  bankPartyIban: "exampleBankPartyIban",
  bankPartyName: "exampleBankPartyName",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  date: new Date(),
  deposit: 42.42,
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  referenceNumber: "exampleReferenceNumber",
  status: "exampleStatus",
  transactionId: "exampleTransactionId",
  transactionType: "exampleTransactionType",
  unallocatedAmount: 42.42,
  updatedAt: new Date(),
  withdrawal: 42.42,
};
const FIND_MANY_RESULT = [
  {
    allocatedAmount: 42.42,
    amendedFrom: "exampleAmendedFrom",
    bankAccount: "exampleBankAccount",
    bankPartyAccountNumber: "exampleBankPartyAccountNumber",
    bankPartyIban: "exampleBankPartyIban",
    bankPartyName: "exampleBankPartyName",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    currency: "exampleCurrency",
    date: new Date(),
    deposit: 42.42,
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    party: "exampleParty",
    partyType: "examplePartyType",
    referenceNumber: "exampleReferenceNumber",
    status: "exampleStatus",
    transactionId: "exampleTransactionId",
    transactionType: "exampleTransactionType",
    unallocatedAmount: 42.42,
    updatedAt: new Date(),
    withdrawal: 42.42,
  },
];
const FIND_ONE_RESULT = {
  allocatedAmount: 42.42,
  amendedFrom: "exampleAmendedFrom",
  bankAccount: "exampleBankAccount",
  bankPartyAccountNumber: "exampleBankPartyAccountNumber",
  bankPartyIban: "exampleBankPartyIban",
  bankPartyName: "exampleBankPartyName",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  currency: "exampleCurrency",
  date: new Date(),
  deposit: 42.42,
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  referenceNumber: "exampleReferenceNumber",
  status: "exampleStatus",
  transactionId: "exampleTransactionId",
  transactionType: "exampleTransactionType",
  unallocatedAmount: 42.42,
  updatedAt: new Date(),
  withdrawal: 42.42,
};

const service = {
  createBankTransaction() {
    return CREATE_RESULT;
  },
  bankTransactions: () => FIND_MANY_RESULT,
  bankTransaction: ({ where }: { where: { id: string } }) => {
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

describe("BankTransaction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BankTransactionService,
          useValue: service,
        },
      ],
      controllers: [BankTransactionController],
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

  test("POST /bankTransactions", async () => {
    await request(app.getHttpServer())
      .post("/bankTransactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bankTransactions", async () => {
    await request(app.getHttpServer())
      .get("/bankTransactions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bankTransactions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankTransactions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bankTransactions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankTransactions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bankTransactions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bankTransactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bankTransactions")
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
