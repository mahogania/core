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
import { CallLogController } from "../callLog.controller";
import { CallLogService } from "../callLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  callReceivedBy: "exampleCallReceivedBy",
  callType: "exampleCallType",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  docstatus: 42,
  duration: 42.42,
  employeeUserId: "exampleEmployeeUserId",
  endTime: new Date(),
  fromField: "exampleFromField",
  id: "exampleId",
  idx: 42,
  medium: "exampleMedium",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  originalId: "exampleOriginalId",
  owner: "exampleOwner",
  recordingUrl: "exampleRecordingUrl",
  startTime: new Date(),
  status: "exampleStatus",
  summary: "exampleSummary",
  to: "exampleTo",
  typeOfCall: "exampleTypeOfCall",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  callReceivedBy: "exampleCallReceivedBy",
  callType: "exampleCallType",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  docstatus: 42,
  duration: 42.42,
  employeeUserId: "exampleEmployeeUserId",
  endTime: new Date(),
  fromField: "exampleFromField",
  id: "exampleId",
  idx: 42,
  medium: "exampleMedium",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  originalId: "exampleOriginalId",
  owner: "exampleOwner",
  recordingUrl: "exampleRecordingUrl",
  startTime: new Date(),
  status: "exampleStatus",
  summary: "exampleSummary",
  to: "exampleTo",
  typeOfCall: "exampleTypeOfCall",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    callReceivedBy: "exampleCallReceivedBy",
    callType: "exampleCallType",
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    docstatus: 42,
    duration: 42.42,
    employeeUserId: "exampleEmployeeUserId",
    endTime: new Date(),
    fromField: "exampleFromField",
    id: "exampleId",
    idx: 42,
    medium: "exampleMedium",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    originalId: "exampleOriginalId",
    owner: "exampleOwner",
    recordingUrl: "exampleRecordingUrl",
    startTime: new Date(),
    status: "exampleStatus",
    summary: "exampleSummary",
    to: "exampleTo",
    typeOfCall: "exampleTypeOfCall",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  callReceivedBy: "exampleCallReceivedBy",
  callType: "exampleCallType",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  docstatus: 42,
  duration: 42.42,
  employeeUserId: "exampleEmployeeUserId",
  endTime: new Date(),
  fromField: "exampleFromField",
  id: "exampleId",
  idx: 42,
  medium: "exampleMedium",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  originalId: "exampleOriginalId",
  owner: "exampleOwner",
  recordingUrl: "exampleRecordingUrl",
  startTime: new Date(),
  status: "exampleStatus",
  summary: "exampleSummary",
  to: "exampleTo",
  typeOfCall: "exampleTypeOfCall",
  updatedAt: new Date(),
};

const service = {
  createCallLog() {
    return CREATE_RESULT;
  },
  callLogs: () => FIND_MANY_RESULT,
  callLog: ({ where }: { where: { id: string } }) => {
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

describe("CallLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CallLogService,
          useValue: service,
        },
      ],
      controllers: [CallLogController],
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

  test("POST /callLogs", async () => {
    await request(app.getHttpServer())
      .post("/callLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /callLogs", async () => {
    await request(app.getHttpServer())
      .get("/callLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /callLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/callLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /callLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/callLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /callLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/callLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/callLogs")
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
