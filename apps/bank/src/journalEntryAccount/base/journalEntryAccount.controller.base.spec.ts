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
import { JournalEntryAccountController } from "../journalEntryAccount.controller";
import { JournalEntryAccountService } from "../journalEntryAccount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  account: "exampleAccount",
  accountCurrency: "exampleAccountCurrency",
  accountType: "exampleAccountType",
  againstAccount: "exampleAgainstAccount",
  bankAccount: "exampleBankAccount",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  credit: 42.42,
  creditInAccountCurrency: 42.42,
  debit: 42.42,
  debitInAccountCurrency: 42.42,
  docstatus: 42,
  exchangeRate: 42.42,
  id: "exampleId",
  idx: 42,
  isAdvance: "exampleIsAdvance",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  party: "exampleParty",
  partyType: "examplePartyType",
  project: "exampleProject",
  referenceDetailNo: "exampleReferenceDetailNo",
  referenceDueDate: new Date(),
  referenceName: "exampleReferenceName",
  referenceType: "exampleReferenceType",
  updatedAt: new Date(),
  userRemark: "exampleUserRemark",
};
const CREATE_RESULT = {
  account: "exampleAccount",
  accountCurrency: "exampleAccountCurrency",
  accountType: "exampleAccountType",
  againstAccount: "exampleAgainstAccount",
  bankAccount: "exampleBankAccount",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  credit: 42.42,
  creditInAccountCurrency: 42.42,
  debit: 42.42,
  debitInAccountCurrency: 42.42,
  docstatus: 42,
  exchangeRate: 42.42,
  id: "exampleId",
  idx: 42,
  isAdvance: "exampleIsAdvance",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  party: "exampleParty",
  partyType: "examplePartyType",
  project: "exampleProject",
  referenceDetailNo: "exampleReferenceDetailNo",
  referenceDueDate: new Date(),
  referenceName: "exampleReferenceName",
  referenceType: "exampleReferenceType",
  updatedAt: new Date(),
  userRemark: "exampleUserRemark",
};
const FIND_MANY_RESULT = [
  {
    account: "exampleAccount",
    accountCurrency: "exampleAccountCurrency",
    accountType: "exampleAccountType",
    againstAccount: "exampleAgainstAccount",
    bankAccount: "exampleBankAccount",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    credit: 42.42,
    creditInAccountCurrency: 42.42,
    debit: 42.42,
    debitInAccountCurrency: 42.42,
    docstatus: 42,
    exchangeRate: 42.42,
    id: "exampleId",
    idx: 42,
    isAdvance: "exampleIsAdvance",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    party: "exampleParty",
    partyType: "examplePartyType",
    project: "exampleProject",
    referenceDetailNo: "exampleReferenceDetailNo",
    referenceDueDate: new Date(),
    referenceName: "exampleReferenceName",
    referenceType: "exampleReferenceType",
    updatedAt: new Date(),
    userRemark: "exampleUserRemark",
  },
];
const FIND_ONE_RESULT = {
  account: "exampleAccount",
  accountCurrency: "exampleAccountCurrency",
  accountType: "exampleAccountType",
  againstAccount: "exampleAgainstAccount",
  bankAccount: "exampleBankAccount",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  credit: 42.42,
  creditInAccountCurrency: 42.42,
  debit: 42.42,
  debitInAccountCurrency: 42.42,
  docstatus: 42,
  exchangeRate: 42.42,
  id: "exampleId",
  idx: 42,
  isAdvance: "exampleIsAdvance",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  party: "exampleParty",
  partyType: "examplePartyType",
  project: "exampleProject",
  referenceDetailNo: "exampleReferenceDetailNo",
  referenceDueDate: new Date(),
  referenceName: "exampleReferenceName",
  referenceType: "exampleReferenceType",
  updatedAt: new Date(),
  userRemark: "exampleUserRemark",
};

const service = {
  createJournalEntryAccount() {
    return CREATE_RESULT;
  },
  journalEntryAccounts: () => FIND_MANY_RESULT,
  journalEntryAccount: ({ where }: { where: { id: string } }) => {
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

describe("JournalEntryAccount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JournalEntryAccountService,
          useValue: service,
        },
      ],
      controllers: [JournalEntryAccountController],
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

  test("POST /journalEntryAccounts", async () => {
    await request(app.getHttpServer())
      .post("/journalEntryAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        referenceDueDate: CREATE_RESULT.referenceDueDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /journalEntryAccounts", async () => {
    await request(app.getHttpServer())
      .get("/journalEntryAccounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          referenceDueDate: FIND_MANY_RESULT[0].referenceDueDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /journalEntryAccounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/journalEntryAccounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /journalEntryAccounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/journalEntryAccounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        referenceDueDate: FIND_ONE_RESULT.referenceDueDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /journalEntryAccounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/journalEntryAccounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        referenceDueDate: CREATE_RESULT.referenceDueDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/journalEntryAccounts")
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
