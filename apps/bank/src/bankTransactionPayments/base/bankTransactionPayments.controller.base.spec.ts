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
import { BankTransactionPaymentsController } from "../bankTransactionPayments.controller";
import { BankTransactionPaymentsService } from "../bankTransactionPayments.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allocatedAmount: 42.42,
  clearanceDate: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  paymentDocument: "examplePaymentDocument",
  paymentEntry: "examplePaymentEntry",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  allocatedAmount: 42.42,
  clearanceDate: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  paymentDocument: "examplePaymentDocument",
  paymentEntry: "examplePaymentEntry",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    allocatedAmount: 42.42,
    clearanceDate: new Date(),
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    paymentDocument: "examplePaymentDocument",
    paymentEntry: "examplePaymentEntry",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  allocatedAmount: 42.42,
  clearanceDate: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  paymentDocument: "examplePaymentDocument",
  paymentEntry: "examplePaymentEntry",
  updatedAt: new Date(),
};

const service = {
  createBankTransactionPayments() {
    return CREATE_RESULT;
  },
  bankTransactionPaymentsItems: () => FIND_MANY_RESULT,
  bankTransactionPayments: ({ where }: { where: { id: string } }) => {
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

describe("BankTransactionPayments", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BankTransactionPaymentsService,
          useValue: service,
        },
      ],
      controllers: [BankTransactionPaymentsController],
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

  test("POST /bankTransactionPayments", async () => {
    await request(app.getHttpServer())
      .post("/bankTransactionPayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bankTransactionPayments", async () => {
    await request(app.getHttpServer())
      .get("/bankTransactionPayments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          clearanceDate: FIND_MANY_RESULT[0].clearanceDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bankTransactionPayments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankTransactionPayments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bankTransactionPayments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankTransactionPayments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        clearanceDate: FIND_ONE_RESULT.clearanceDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bankTransactionPayments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bankTransactionPayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bankTransactionPayments")
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
