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
import { AccountController } from "../account.controller";
import { AccountService } from "../account.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountCurrency: "exampleAccountCurrency",
  accountName: "exampleAccountName",
  accountNumber: "exampleAccountNumber",
  accountType: "exampleAccountType",
  assign: "exampleAssign",
  balanceMustBe: "exampleBalanceMustBe",
  comments: "exampleComments",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  freezeAccount: "exampleFreezeAccount",
  id: "exampleId",
  idx: 42,
  includeInGross: 42,
  isGroup: 42,
  lft: 42,
  likedBy: "exampleLikedBy",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentAccount: "exampleParentAccount",
  reportType: "exampleReportType",
  rgt: 42,
  rootType: "exampleRootType",
  taxRate: 42.42,
  updatedAt: new Date(),
  userTags: "exampleUserTags",
};
const CREATE_RESULT = {
  accountCurrency: "exampleAccountCurrency",
  accountName: "exampleAccountName",
  accountNumber: "exampleAccountNumber",
  accountType: "exampleAccountType",
  assign: "exampleAssign",
  balanceMustBe: "exampleBalanceMustBe",
  comments: "exampleComments",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  freezeAccount: "exampleFreezeAccount",
  id: "exampleId",
  idx: 42,
  includeInGross: 42,
  isGroup: 42,
  lft: 42,
  likedBy: "exampleLikedBy",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentAccount: "exampleParentAccount",
  reportType: "exampleReportType",
  rgt: 42,
  rootType: "exampleRootType",
  taxRate: 42.42,
  updatedAt: new Date(),
  userTags: "exampleUserTags",
};
const FIND_MANY_RESULT = [
  {
    accountCurrency: "exampleAccountCurrency",
    accountName: "exampleAccountName",
    accountNumber: "exampleAccountNumber",
    accountType: "exampleAccountType",
    assign: "exampleAssign",
    balanceMustBe: "exampleBalanceMustBe",
    comments: "exampleComments",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    disabled: 42,
    docstatus: 42,
    freezeAccount: "exampleFreezeAccount",
    id: "exampleId",
    idx: 42,
    includeInGross: 42,
    isGroup: 42,
    lft: 42,
    likedBy: "exampleLikedBy",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    oldParent: "exampleOldParent",
    owner: "exampleOwner",
    parentAccount: "exampleParentAccount",
    reportType: "exampleReportType",
    rgt: 42,
    rootType: "exampleRootType",
    taxRate: 42.42,
    updatedAt: new Date(),
    userTags: "exampleUserTags",
  },
];
const FIND_ONE_RESULT = {
  accountCurrency: "exampleAccountCurrency",
  accountName: "exampleAccountName",
  accountNumber: "exampleAccountNumber",
  accountType: "exampleAccountType",
  assign: "exampleAssign",
  balanceMustBe: "exampleBalanceMustBe",
  comments: "exampleComments",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  freezeAccount: "exampleFreezeAccount",
  id: "exampleId",
  idx: 42,
  includeInGross: 42,
  isGroup: 42,
  lft: 42,
  likedBy: "exampleLikedBy",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentAccount: "exampleParentAccount",
  reportType: "exampleReportType",
  rgt: 42,
  rootType: "exampleRootType",
  taxRate: 42.42,
  updatedAt: new Date(),
  userTags: "exampleUserTags",
};

const service = {
  createAccount() {
    return CREATE_RESULT;
  },
  accounts: () => FIND_MANY_RESULT,
  account: ({ where }: { where: { id: string } }) => {
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

describe("Account", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccountService,
          useValue: service,
        },
      ],
      controllers: [AccountController],
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

  test("POST /accounts", async () => {
    await request(app.getHttpServer())
      .post("/accounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /accounts", async () => {
    await request(app.getHttpServer())
      .get("/accounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /accounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /accounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/accounts")
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