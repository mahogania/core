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
import { EmailQueueController } from "../emailQueue.controller";
import { EmailQueueService } from "../emailQueue.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addUnsubscribeLink: "true",
  attachments: "exampleAttachments",
  communication: "exampleCommunication",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  emailAccount: "exampleEmailAccount",
  errorField: "exampleErrorField",
  exposeRecipients: "exampleExposeRecipients",
  id: "exampleId",
  idx: 42,
  message: "exampleMessage",
  messageId: "exampleMessageId",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  priority: 42,
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  retry: 42,
  sendAfter: new Date(),
  sender: "exampleSender",
  showAsCc: "exampleShowAsCc",
  status: "exampleStatus",
  unsubscribeMethod: "exampleUnsubscribeMethod",
  unsubscribeParam: "exampleUnsubscribeParam",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addUnsubscribeLink: "true",
  attachments: "exampleAttachments",
  communication: "exampleCommunication",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  emailAccount: "exampleEmailAccount",
  errorField: "exampleErrorField",
  exposeRecipients: "exampleExposeRecipients",
  id: "exampleId",
  idx: 42,
  message: "exampleMessage",
  messageId: "exampleMessageId",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  priority: 42,
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  retry: 42,
  sendAfter: new Date(),
  sender: "exampleSender",
  showAsCc: "exampleShowAsCc",
  status: "exampleStatus",
  unsubscribeMethod: "exampleUnsubscribeMethod",
  unsubscribeParam: "exampleUnsubscribeParam",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addUnsubscribeLink: "true",
    attachments: "exampleAttachments",
    communication: "exampleCommunication",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    emailAccount: "exampleEmailAccount",
    errorField: "exampleErrorField",
    exposeRecipients: "exampleExposeRecipients",
    id: "exampleId",
    idx: 42,
    message: "exampleMessage",
    messageId: "exampleMessageId",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    priority: 42,
    referenceDoctype: "exampleReferenceDoctype",
    referenceName: "exampleReferenceName",
    retry: 42,
    sendAfter: new Date(),
    sender: "exampleSender",
    showAsCc: "exampleShowAsCc",
    status: "exampleStatus",
    unsubscribeMethod: "exampleUnsubscribeMethod",
    unsubscribeParam: "exampleUnsubscribeParam",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addUnsubscribeLink: "true",
  attachments: "exampleAttachments",
  communication: "exampleCommunication",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  emailAccount: "exampleEmailAccount",
  errorField: "exampleErrorField",
  exposeRecipients: "exampleExposeRecipients",
  id: "exampleId",
  idx: 42,
  message: "exampleMessage",
  messageId: "exampleMessageId",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  priority: 42,
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  retry: 42,
  sendAfter: new Date(),
  sender: "exampleSender",
  showAsCc: "exampleShowAsCc",
  status: "exampleStatus",
  unsubscribeMethod: "exampleUnsubscribeMethod",
  unsubscribeParam: "exampleUnsubscribeParam",
  updatedAt: new Date(),
};

const service = {
  createEmailQueue() {
    return CREATE_RESULT;
  },
  emailQueues: () => FIND_MANY_RESULT,
  emailQueue: ({ where }: { where: { id: string } }) => {
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

describe("EmailQueue", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmailQueueService,
          useValue: service,
        },
      ],
      controllers: [EmailQueueController],
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

  test("POST /emailQueues", async () => {
    await request(app.getHttpServer())
      .post("/emailQueues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        sendAfter: CREATE_RESULT.sendAfter.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /emailQueues", async () => {
    await request(app.getHttpServer())
      .get("/emailQueues")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          sendAfter: FIND_MANY_RESULT[0].sendAfter.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /emailQueues/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailQueues"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /emailQueues/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailQueues"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        sendAfter: FIND_ONE_RESULT.sendAfter.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /emailQueues existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/emailQueues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        sendAfter: CREATE_RESULT.sendAfter.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/emailQueues")
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
