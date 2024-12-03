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
import { BulkTransactionLogDetailController } from "../bulkTransactionLogDetail.controller";
import { BulkTransactionLogDetailService } from "../bulkTransactionLogDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  creation: new Date(),
  date: new Date(),
  docstatus: 42,
  errorDescription: "exampleErrorDescription",
  fromDoctype: "exampleFromDoctype",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  retried: 42,
  time: new Date(),
  toDoctype: "exampleToDoctype",
  transactionName: "exampleTransactionName",
  transactionStatus: "exampleTransactionStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  date: new Date(),
  docstatus: 42,
  errorDescription: "exampleErrorDescription",
  fromDoctype: "exampleFromDoctype",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  retried: 42,
  time: new Date(),
  toDoctype: "exampleToDoctype",
  transactionName: "exampleTransactionName",
  transactionStatus: "exampleTransactionStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    creation: new Date(),
    date: new Date(),
    docstatus: 42,
    errorDescription: "exampleErrorDescription",
    fromDoctype: "exampleFromDoctype",
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    retried: 42,
    time: new Date(),
    toDoctype: "exampleToDoctype",
    transactionName: "exampleTransactionName",
    transactionStatus: "exampleTransactionStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  date: new Date(),
  docstatus: 42,
  errorDescription: "exampleErrorDescription",
  fromDoctype: "exampleFromDoctype",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  retried: 42,
  time: new Date(),
  toDoctype: "exampleToDoctype",
  transactionName: "exampleTransactionName",
  transactionStatus: "exampleTransactionStatus",
  updatedAt: new Date(),
};

const service = {
  createBulkTransactionLogDetail() {
    return CREATE_RESULT;
  },
  bulkTransactionLogDetails: () => FIND_MANY_RESULT,
  bulkTransactionLogDetail: ({ where }: { where: { id: string } }) => {
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

describe("BulkTransactionLogDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BulkTransactionLogDetailService,
          useValue: service,
        },
      ],
      controllers: [BulkTransactionLogDetailController],
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

  test("POST /bulkTransactionLogDetails", async () => {
    await request(app.getHttpServer())
      .post("/bulkTransactionLogDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bulkTransactionLogDetails", async () => {
    await request(app.getHttpServer())
      .get("/bulkTransactionLogDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bulkTransactionLogDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bulkTransactionLogDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bulkTransactionLogDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bulkTransactionLogDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bulkTransactionLogDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bulkTransactionLogDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bulkTransactionLogDetails")
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
