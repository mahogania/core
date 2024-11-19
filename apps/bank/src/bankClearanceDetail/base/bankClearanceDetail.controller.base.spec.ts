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
import { BankClearanceDetailController } from "../bankClearanceDetail.controller";
import { BankClearanceDetailService } from "../bankClearanceDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  againstAccount: "exampleAgainstAccount",
  amount: "exampleAmount",
  chequeDate: new Date(),
  chequeNumber: "exampleChequeNumber",
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
  postingDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  againstAccount: "exampleAgainstAccount",
  amount: "exampleAmount",
  chequeDate: new Date(),
  chequeNumber: "exampleChequeNumber",
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
  postingDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    againstAccount: "exampleAgainstAccount",
    amount: "exampleAmount",
    chequeDate: new Date(),
    chequeNumber: "exampleChequeNumber",
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
    postingDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  againstAccount: "exampleAgainstAccount",
  amount: "exampleAmount",
  chequeDate: new Date(),
  chequeNumber: "exampleChequeNumber",
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
  postingDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createBankClearanceDetail() {
    return CREATE_RESULT;
  },
  bankClearanceDetails: () => FIND_MANY_RESULT,
  bankClearanceDetail: ({ where }: { where: { id: string } }) => {
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

describe("BankClearanceDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BankClearanceDetailService,
          useValue: service,
        },
      ],
      controllers: [BankClearanceDetailController],
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

  test("POST /bankClearanceDetails", async () => {
    await request(app.getHttpServer())
      .post("/bankClearanceDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        chequeDate: CREATE_RESULT.chequeDate.toISOString(),
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bankClearanceDetails", async () => {
    await request(app.getHttpServer())
      .get("/bankClearanceDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          chequeDate: FIND_MANY_RESULT[0].chequeDate.toISOString(),
          clearanceDate: FIND_MANY_RESULT[0].clearanceDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bankClearanceDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankClearanceDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bankClearanceDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bankClearanceDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        chequeDate: FIND_ONE_RESULT.chequeDate.toISOString(),
        clearanceDate: FIND_ONE_RESULT.clearanceDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bankClearanceDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bankClearanceDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        chequeDate: CREATE_RESULT.chequeDate.toISOString(),
        clearanceDate: CREATE_RESULT.clearanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bankClearanceDetails")
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
