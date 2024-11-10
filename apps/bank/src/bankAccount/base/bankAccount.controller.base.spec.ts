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
import { BankAccountController } from "../bankAccount.controller";
import { BankAccountService } from "../bankAccount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  account: "exampleAccount",
  accountName: "exampleAccountName",
  accountSubtype: "exampleAccountSubtype",
  accountType: "exampleAccountType",
  bank: "exampleBank",
  bankAccountNo: "exampleBankAccountNo",
  branchCode: "exampleBranchCode",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  integrationId: "exampleIntegrationId",
  isCompanyAccount: 42,
  isDefault: 42,
  lastIntegrationDate: new Date(),
  mask: "exampleMask",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  account: "exampleAccount",
  accountName: "exampleAccountName",
  accountSubtype: "exampleAccountSubtype",
  accountType: "exampleAccountType",
  bank: "exampleBank",
  bankAccountNo: "exampleBankAccountNo",
  branchCode: "exampleBranchCode",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  integrationId: "exampleIntegrationId",
  isCompanyAccount: 42,
  isDefault: 42,
  lastIntegrationDate: new Date(),
  mask: "exampleMask",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    account: "exampleAccount",
    accountName: "exampleAccountName",
    accountSubtype: "exampleAccountSubtype",
    accountType: "exampleAccountType",
    bank: "exampleBank",
    bankAccountNo: "exampleBankAccountNo",
    branchCode: "exampleBranchCode",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    disabled: 42,
    docstatus: 42,
    iban: "exampleIban",
    id: "exampleId",
    idx: 42,
    integrationId: "exampleIntegrationId",
    isCompanyAccount: 42,
    isDefault: 42,
    lastIntegrationDate: new Date(),
    mask: "exampleMask",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    party: "exampleParty",
    partyType: "examplePartyType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  account: "exampleAccount",
  accountName: "exampleAccountName",
  accountSubtype: "exampleAccountSubtype",
  accountType: "exampleAccountType",
  bank: "exampleBank",
  bankAccountNo: "exampleBankAccountNo",
  branchCode: "exampleBranchCode",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  integrationId: "exampleIntegrationId",
  isCompanyAccount: 42,
  isDefault: 42,
  lastIntegrationDate: new Date(),
  mask: "exampleMask",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  party: "exampleParty",
  partyType: "examplePartyType",
  updatedAt: new Date(),
};

const service = {
  createBankAccount() {
    return CREATE_RESULT;
  },
  bankAccounts: () => FIND_MANY_RESULT,
  bankAccount: ({ where }: { where: { id: string } }) => {
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

describe("BankAccount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BankAccountService,
          useValue: service,
        },
      ],
      controllers: [BankAccountController],
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

  test("POST /bankAccounts", async () => {
    await request(app.getHttpServer())
      .post("/bankAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        lastIntegrationDate: CREATE_RESULT.lastIntegrationDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bankAccounts", async () => {
    await request(app.getHttpServer())
      .get("/bankAccounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          lastIntegrationDate:
            FIND_MANY_RESULT[0].lastIntegrationDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bankAccounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankAccounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bankAccounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankAccounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        lastIntegrationDate: FIND_ONE_RESULT.lastIntegrationDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bankAccounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bankAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        lastIntegrationDate: CREATE_RESULT.lastIntegrationDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bankAccounts")
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
