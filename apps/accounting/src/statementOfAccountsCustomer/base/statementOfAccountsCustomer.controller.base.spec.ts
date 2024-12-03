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
import { StatementOfAccountsCustomerController } from "../statementOfAccountsCustomer.controller";
import { StatementOfAccountsCustomerService } from "../statementOfAccountsCustomer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  billingEmail: "exampleBillingEmail",
  createdAt: new Date(),
  customer: "exampleCustomer",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  primaryEmail: "examplePrimaryEmail",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  billingEmail: "exampleBillingEmail",
  createdAt: new Date(),
  customer: "exampleCustomer",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  primaryEmail: "examplePrimaryEmail",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    billingEmail: "exampleBillingEmail",
    createdAt: new Date(),
    customer: "exampleCustomer",
    customerName: "exampleCustomerName",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    primaryEmail: "examplePrimaryEmail",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  billingEmail: "exampleBillingEmail",
  createdAt: new Date(),
  customer: "exampleCustomer",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  primaryEmail: "examplePrimaryEmail",
  updatedAt: new Date(),
};

const service = {
  createStatementOfAccountsCustomer() {
    return CREATE_RESULT;
  },
  statementOfAccountsCustomers: () => FIND_MANY_RESULT,
  statementOfAccountsCustomer: ({ where }: { where: { id: string } }) => {
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

describe("StatementOfAccountsCustomer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StatementOfAccountsCustomerService,
          useValue: service,
        },
      ],
      controllers: [StatementOfAccountsCustomerController],
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

  test("POST /statementOfAccountsCustomers", async () => {
    await request(app.getHttpServer())
      .post("/statementOfAccountsCustomers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /statementOfAccountsCustomers", async () => {
    await request(app.getHttpServer())
      .get("/statementOfAccountsCustomers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /statementOfAccountsCustomers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statementOfAccountsCustomers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /statementOfAccountsCustomers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statementOfAccountsCustomers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /statementOfAccountsCustomers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/statementOfAccountsCustomers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/statementOfAccountsCustomers")
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
