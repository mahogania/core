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
import { BomUpdateLogController } from "../bomUpdateLog.controller";
import { BomUpdateLogService } from "../bomUpdateLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  createdAt: new Date(),
  creation: new Date(),
  currentBom: "exampleCurrentBom",
  currentLevel: 42,
  docstatus: 42,
  errorLog: "exampleErrorLog",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  newBom: "exampleNewBom",
  owner: "exampleOwner",
  processedBoms: "exampleProcessedBoms",
  status: "exampleStatus",
  updateType: "exampleUpdateType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  createdAt: new Date(),
  creation: new Date(),
  currentBom: "exampleCurrentBom",
  currentLevel: 42,
  docstatus: 42,
  errorLog: "exampleErrorLog",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  newBom: "exampleNewBom",
  owner: "exampleOwner",
  processedBoms: "exampleProcessedBoms",
  status: "exampleStatus",
  updateType: "exampleUpdateType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    createdAt: new Date(),
    creation: new Date(),
    currentBom: "exampleCurrentBom",
    currentLevel: 42,
    docstatus: 42,
    errorLog: "exampleErrorLog",
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    newBom: "exampleNewBom",
    owner: "exampleOwner",
    processedBoms: "exampleProcessedBoms",
    status: "exampleStatus",
    updateType: "exampleUpdateType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  createdAt: new Date(),
  creation: new Date(),
  currentBom: "exampleCurrentBom",
  currentLevel: 42,
  docstatus: 42,
  errorLog: "exampleErrorLog",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  newBom: "exampleNewBom",
  owner: "exampleOwner",
  processedBoms: "exampleProcessedBoms",
  status: "exampleStatus",
  updateType: "exampleUpdateType",
  updatedAt: new Date(),
};

const service = {
  createBomUpdateLog() {
    return CREATE_RESULT;
  },
  bomUpdateLogs: () => FIND_MANY_RESULT,
  bomUpdateLog: ({ where }: { where: { id: string } }) => {
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

describe("BomUpdateLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BomUpdateLogService,
          useValue: service,
        },
      ],
      controllers: [BomUpdateLogController],
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

  test("POST /bomUpdateLogs", async () => {
    await request(app.getHttpServer())
      .post("/bomUpdateLogs")
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

  test("GET /bomUpdateLogs", async () => {
    await request(app.getHttpServer())
      .get("/bomUpdateLogs")
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

  test("GET /bomUpdateLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomUpdateLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bomUpdateLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomUpdateLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bomUpdateLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bomUpdateLogs")
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
          .post("/bomUpdateLogs")
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
