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
import { ActivityLogController } from "../activityLog.controller";
import { ActivityLogService } from "../activityLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  communicationDate: new Date(),
  content: "exampleContent",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  fullName: "exampleFullName",
  id: "exampleId",
  idx: 42,
  ipAddress: "exampleIpAddress",
  linkDoctype: "exampleLinkDoctype",
  linkName: "exampleLinkName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operation: "exampleOperation",
  owner: "exampleOwner",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  referenceOwner: "exampleReferenceOwner",
  status: "exampleStatus",
  subject: "exampleSubject",
  timelineDoctype: "exampleTimelineDoctype",
  timelineName: "exampleTimelineName",
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  communicationDate: new Date(),
  content: "exampleContent",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  fullName: "exampleFullName",
  id: "exampleId",
  idx: 42,
  ipAddress: "exampleIpAddress",
  linkDoctype: "exampleLinkDoctype",
  linkName: "exampleLinkName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operation: "exampleOperation",
  owner: "exampleOwner",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  referenceOwner: "exampleReferenceOwner",
  status: "exampleStatus",
  subject: "exampleSubject",
  timelineDoctype: "exampleTimelineDoctype",
  timelineName: "exampleTimelineName",
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    communicationDate: new Date(),
    content: "exampleContent",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    fullName: "exampleFullName",
    id: "exampleId",
    idx: 42,
    ipAddress: "exampleIpAddress",
    linkDoctype: "exampleLinkDoctype",
    linkName: "exampleLinkName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    operation: "exampleOperation",
    owner: "exampleOwner",
    referenceDoctype: "exampleReferenceDoctype",
    referenceName: "exampleReferenceName",
    referenceOwner: "exampleReferenceOwner",
    status: "exampleStatus",
    subject: "exampleSubject",
    timelineDoctype: "exampleTimelineDoctype",
    timelineName: "exampleTimelineName",
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  communicationDate: new Date(),
  content: "exampleContent",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  fullName: "exampleFullName",
  id: "exampleId",
  idx: 42,
  ipAddress: "exampleIpAddress",
  linkDoctype: "exampleLinkDoctype",
  linkName: "exampleLinkName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operation: "exampleOperation",
  owner: "exampleOwner",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  referenceOwner: "exampleReferenceOwner",
  status: "exampleStatus",
  subject: "exampleSubject",
  timelineDoctype: "exampleTimelineDoctype",
  timelineName: "exampleTimelineName",
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createActivityLog() {
    return CREATE_RESULT;
  },
  activityLogs: () => FIND_MANY_RESULT,
  activityLog: ({ where }: { where: { id: string } }) => {
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

describe("ActivityLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ActivityLogService,
          useValue: service,
        },
      ],
      controllers: [ActivityLogController],
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

  test("POST /activityLogs", async () => {
    await request(app.getHttpServer())
      .post("/activityLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        communicationDate: CREATE_RESULT.communicationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /activityLogs", async () => {
    await request(app.getHttpServer())
      .get("/activityLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          communicationDate:
            FIND_MANY_RESULT[0].communicationDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /activityLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/activityLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /activityLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/activityLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        communicationDate: FIND_ONE_RESULT.communicationDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /activityLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/activityLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        communicationDate: CREATE_RESULT.communicationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/activityLogs")
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
