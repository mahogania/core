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
import { EmailAccountController } from "../emailAccount.controller";
import { EmailAccountService } from "../emailAccount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addSignature: "true",
  alwaysUseAccountEmailIdAsSender: "true",
  alwaysUseAccountNameAsSenderName: "true",
  appendEmailsToSentFolder: "true",
  appendTo: "exampleAppendTo",
  asciiEncodePassword: "true",
  attachmentLimit: 42,
  authMethod: "exampleAuthMethod",
  autoReplyMessage: "exampleAutoReplyMessage",
  awaitingPassword: "true",
  brandLogo: "exampleBrandLogo",
  connectedApp: "exampleConnectedApp",
  connectedUser: "exampleConnectedUser",
  createContact: "true",
  createdAt: new Date(),
  creation: new Date(),
  defaultIncoming: "true",
  defaultOutgoing: "true",
  docstatus: 42,
  domain: "exampleDomain",
  emailAccountName: "exampleEmailAccountName",
  emailId: "exampleEmailId",
  emailServer: "exampleEmailServer",
  emailSyncOption: "exampleEmailSyncOption",
  enableAutoReply: "true",
  enableAutomaticLinking: "true",
  enableIncoming: "true",
  enableOutgoing: "true",
  footer: "exampleFooter",
  id: "exampleId",
  idx: 42,
  incomingPort: "exampleIncomingPort",
  initialSyncCount: "exampleInitialSyncCount",
  loginId: "exampleLoginId",
  loginIdIsDifferent: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noFailed: 42,
  noSmtpAuthentication: "true",
  notifyIfUnreplied: "true",
  owner: "exampleOwner",
  password: "examplePassword",
  sendNotificationTo: "exampleSendNotificationTo",
  sendUnsubscribeMessage: "true",
  service: "exampleService",
  signature: "exampleSignature",
  smtpPort: "exampleSmtpPort",
  smtpServer: "exampleSmtpServer",
  trackEmailStatus: "true",
  uidnext: 42,
  uidvalidity: "exampleUidvalidity",
  unrepliedForMins: 42,
  updatedAt: new Date(),
  useImap: "true",
  useSsl: "true",
  useSslForOutgoing: "true",
  useStarttls: "true",
  useTls: "true",
};
const CREATE_RESULT = {
  addSignature: "true",
  alwaysUseAccountEmailIdAsSender: "true",
  alwaysUseAccountNameAsSenderName: "true",
  appendEmailsToSentFolder: "true",
  appendTo: "exampleAppendTo",
  asciiEncodePassword: "true",
  attachmentLimit: 42,
  authMethod: "exampleAuthMethod",
  autoReplyMessage: "exampleAutoReplyMessage",
  awaitingPassword: "true",
  brandLogo: "exampleBrandLogo",
  connectedApp: "exampleConnectedApp",
  connectedUser: "exampleConnectedUser",
  createContact: "true",
  createdAt: new Date(),
  creation: new Date(),
  defaultIncoming: "true",
  defaultOutgoing: "true",
  docstatus: 42,
  domain: "exampleDomain",
  emailAccountName: "exampleEmailAccountName",
  emailId: "exampleEmailId",
  emailServer: "exampleEmailServer",
  emailSyncOption: "exampleEmailSyncOption",
  enableAutoReply: "true",
  enableAutomaticLinking: "true",
  enableIncoming: "true",
  enableOutgoing: "true",
  footer: "exampleFooter",
  id: "exampleId",
  idx: 42,
  incomingPort: "exampleIncomingPort",
  initialSyncCount: "exampleInitialSyncCount",
  loginId: "exampleLoginId",
  loginIdIsDifferent: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noFailed: 42,
  noSmtpAuthentication: "true",
  notifyIfUnreplied: "true",
  owner: "exampleOwner",
  password: "examplePassword",
  sendNotificationTo: "exampleSendNotificationTo",
  sendUnsubscribeMessage: "true",
  service: "exampleService",
  signature: "exampleSignature",
  smtpPort: "exampleSmtpPort",
  smtpServer: "exampleSmtpServer",
  trackEmailStatus: "true",
  uidnext: 42,
  uidvalidity: "exampleUidvalidity",
  unrepliedForMins: 42,
  updatedAt: new Date(),
  useImap: "true",
  useSsl: "true",
  useSslForOutgoing: "true",
  useStarttls: "true",
  useTls: "true",
};
const FIND_MANY_RESULT = [
  {
    addSignature: "true",
    alwaysUseAccountEmailIdAsSender: "true",
    alwaysUseAccountNameAsSenderName: "true",
    appendEmailsToSentFolder: "true",
    appendTo: "exampleAppendTo",
    asciiEncodePassword: "true",
    attachmentLimit: 42,
    authMethod: "exampleAuthMethod",
    autoReplyMessage: "exampleAutoReplyMessage",
    awaitingPassword: "true",
    brandLogo: "exampleBrandLogo",
    connectedApp: "exampleConnectedApp",
    connectedUser: "exampleConnectedUser",
    createContact: "true",
    createdAt: new Date(),
    creation: new Date(),
    defaultIncoming: "true",
    defaultOutgoing: "true",
    docstatus: 42,
    domain: "exampleDomain",
    emailAccountName: "exampleEmailAccountName",
    emailId: "exampleEmailId",
    emailServer: "exampleEmailServer",
    emailSyncOption: "exampleEmailSyncOption",
    enableAutoReply: "true",
    enableAutomaticLinking: "true",
    enableIncoming: "true",
    enableOutgoing: "true",
    footer: "exampleFooter",
    id: "exampleId",
    idx: 42,
    incomingPort: "exampleIncomingPort",
    initialSyncCount: "exampleInitialSyncCount",
    loginId: "exampleLoginId",
    loginIdIsDifferent: "true",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    noFailed: 42,
    noSmtpAuthentication: "true",
    notifyIfUnreplied: "true",
    owner: "exampleOwner",
    password: "examplePassword",
    sendNotificationTo: "exampleSendNotificationTo",
    sendUnsubscribeMessage: "true",
    service: "exampleService",
    signature: "exampleSignature",
    smtpPort: "exampleSmtpPort",
    smtpServer: "exampleSmtpServer",
    trackEmailStatus: "true",
    uidnext: 42,
    uidvalidity: "exampleUidvalidity",
    unrepliedForMins: 42,
    updatedAt: new Date(),
    useImap: "true",
    useSsl: "true",
    useSslForOutgoing: "true",
    useStarttls: "true",
    useTls: "true",
  },
];
const FIND_ONE_RESULT = {
  addSignature: "true",
  alwaysUseAccountEmailIdAsSender: "true",
  alwaysUseAccountNameAsSenderName: "true",
  appendEmailsToSentFolder: "true",
  appendTo: "exampleAppendTo",
  asciiEncodePassword: "true",
  attachmentLimit: 42,
  authMethod: "exampleAuthMethod",
  autoReplyMessage: "exampleAutoReplyMessage",
  awaitingPassword: "true",
  brandLogo: "exampleBrandLogo",
  connectedApp: "exampleConnectedApp",
  connectedUser: "exampleConnectedUser",
  createContact: "true",
  createdAt: new Date(),
  creation: new Date(),
  defaultIncoming: "true",
  defaultOutgoing: "true",
  docstatus: 42,
  domain: "exampleDomain",
  emailAccountName: "exampleEmailAccountName",
  emailId: "exampleEmailId",
  emailServer: "exampleEmailServer",
  emailSyncOption: "exampleEmailSyncOption",
  enableAutoReply: "true",
  enableAutomaticLinking: "true",
  enableIncoming: "true",
  enableOutgoing: "true",
  footer: "exampleFooter",
  id: "exampleId",
  idx: 42,
  incomingPort: "exampleIncomingPort",
  initialSyncCount: "exampleInitialSyncCount",
  loginId: "exampleLoginId",
  loginIdIsDifferent: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noFailed: 42,
  noSmtpAuthentication: "true",
  notifyIfUnreplied: "true",
  owner: "exampleOwner",
  password: "examplePassword",
  sendNotificationTo: "exampleSendNotificationTo",
  sendUnsubscribeMessage: "true",
  service: "exampleService",
  signature: "exampleSignature",
  smtpPort: "exampleSmtpPort",
  smtpServer: "exampleSmtpServer",
  trackEmailStatus: "true",
  uidnext: 42,
  uidvalidity: "exampleUidvalidity",
  unrepliedForMins: 42,
  updatedAt: new Date(),
  useImap: "true",
  useSsl: "true",
  useSslForOutgoing: "true",
  useStarttls: "true",
  useTls: "true",
};

const service = {
  createEmailAccount() {
    return CREATE_RESULT;
  },
  emailAccounts: () => FIND_MANY_RESULT,
  emailAccount: ({ where }: { where: { id: string } }) => {
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

describe("EmailAccount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmailAccountService,
          useValue: service,
        },
      ],
      controllers: [EmailAccountController],
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

  test("POST /emailAccounts", async () => {
    await request(app.getHttpServer())
      .post("/emailAccounts")
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

  test("GET /emailAccounts", async () => {
    await request(app.getHttpServer())
      .get("/emailAccounts")
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

  test("GET /emailAccounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailAccounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /emailAccounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailAccounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /emailAccounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/emailAccounts")
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
          .post("/emailAccounts")
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
