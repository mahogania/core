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
import { PaymentReconciliationLogController } from "../paymentReconciliationLog.controller";
import { PaymentReconciliationLogService } from "../paymentReconciliationLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allocated: 42,
  createdAt: new Date(),
  docstatus: 42,
  errorLog: "exampleErrorLog",
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  processPr: "exampleProcessPr",
  reconciled: 42,
  reconciledEntries: 42,
  status: "exampleStatus",
  totalAllocations: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  allocated: 42,
  createdAt: new Date(),
  docstatus: 42,
  errorLog: "exampleErrorLog",
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  processPr: "exampleProcessPr",
  reconciled: 42,
  reconciledEntries: 42,
  status: "exampleStatus",
  totalAllocations: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    allocated: 42,
    createdAt: new Date(),
    docstatus: 42,
    errorLog: "exampleErrorLog",
    id: "exampleId",
    idx: 42,
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    processPr: "exampleProcessPr",
    reconciled: 42,
    reconciledEntries: 42,
    status: "exampleStatus",
    totalAllocations: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  allocated: 42,
  createdAt: new Date(),
  docstatus: 42,
  errorLog: "exampleErrorLog",
  id: "exampleId",
  idx: 42,
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  processPr: "exampleProcessPr",
  reconciled: 42,
  reconciledEntries: 42,
  status: "exampleStatus",
  totalAllocations: 42,
  updatedAt: new Date(),
};

const service = {
  createPaymentReconciliationLog() {
    return CREATE_RESULT;
  },
  paymentReconciliationLogs: () => FIND_MANY_RESULT,
  paymentReconciliationLog: ({ where }: { where: { id: string } }) => {
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

describe("PaymentReconciliationLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentReconciliationLogService,
          useValue: service,
        },
      ],
      controllers: [PaymentReconciliationLogController],
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

  test("POST /paymentReconciliationLogs", async () => {
    await request(app.getHttpServer())
      .post("/paymentReconciliationLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /paymentReconciliationLogs", async () => {
    await request(app.getHttpServer())
      .get("/paymentReconciliationLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /paymentReconciliationLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentReconciliationLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentReconciliationLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentReconciliationLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /paymentReconciliationLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentReconciliationLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentReconciliationLogs")
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
