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
import { LedgerHealthController } from "../ledgerHealth.controller";
import { LedgerHealthService } from "../ledgerHealth.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  checkedOn: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  debitCreditMismatch: 42,
  docstatus: 42,
  generalAndPaymentLedgerMismatch: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: 42,
  owner: "exampleOwner",
  updatedAt: new Date(),
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
};
const CREATE_RESULT = {
  checkedOn: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  debitCreditMismatch: 42,
  docstatus: 42,
  generalAndPaymentLedgerMismatch: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: 42,
  owner: "exampleOwner",
  updatedAt: new Date(),
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
};
const FIND_MANY_RESULT = [
  {
    checkedOn: new Date(),
    createdAt: new Date(),
    creation: new Date(),
    debitCreditMismatch: 42,
    docstatus: 42,
    generalAndPaymentLedgerMismatch: 42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: 42,
    owner: "exampleOwner",
    updatedAt: new Date(),
    voucherNo: "exampleVoucherNo",
    voucherType: "exampleVoucherType",
  },
];
const FIND_ONE_RESULT = {
  checkedOn: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  debitCreditMismatch: 42,
  docstatus: 42,
  generalAndPaymentLedgerMismatch: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: 42,
  owner: "exampleOwner",
  updatedAt: new Date(),
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
};

const service = {
  createLedgerHealth() {
    return CREATE_RESULT;
  },
  ledgerHealths: () => FIND_MANY_RESULT,
  ledgerHealth: ({ where }: { where: { id: string } }) => {
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

describe("LedgerHealth", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LedgerHealthService,
          useValue: service,
        },
      ],
      controllers: [LedgerHealthController],
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

  test("POST /ledgerHealths", async () => {
    await request(app.getHttpServer())
      .post("/ledgerHealths")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkedOn: CREATE_RESULT.checkedOn.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /ledgerHealths", async () => {
    await request(app.getHttpServer())
      .get("/ledgerHealths")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          checkedOn: FIND_MANY_RESULT[0].checkedOn.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /ledgerHealths/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ledgerHealths"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ledgerHealths/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ledgerHealths"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        checkedOn: FIND_ONE_RESULT.checkedOn.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /ledgerHealths existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ledgerHealths")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkedOn: CREATE_RESULT.checkedOn.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/ledgerHealths")
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
