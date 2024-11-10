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
import { CommunicationController } from "../communication.controller";
import { CommunicationService } from "../communication.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bcc: "exampleBcc",
  cc: "exampleCc",
  commentType: "exampleCommentType",
  communicationDate: new Date(),
  communicationMedium: "exampleCommunicationMedium",
  communicationType: "exampleCommunicationType",
  content: "exampleContent",
  createdAt: new Date(),
  creation: new Date(),
  deliveryStatus: "exampleDeliveryStatus",
  docstatus: 42,
  emailAccount: "exampleEmailAccount",
  emailStatus: "exampleEmailStatus",
  emailTemplate: "exampleEmailTemplate",
  feedbackRequest: "exampleFeedbackRequest",
  hasAttachment: 42,
  id: "exampleId",
  idx: 42,
  imapFolder: "exampleImapFolder",
  inReplyTo: "exampleInReplyTo",
  messageId: "exampleMessageId",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  phoneNo: "examplePhoneNo",
  rating: 42,
  readByRecipient: 42,
  readByRecipientOn: new Date(),
  readReceipt: 42,
  recipients: "exampleRecipients",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  referenceOwner: "exampleReferenceOwner",
  seen: 42,
  sendAfter: new Date(),
  sender: "exampleSender",
  senderFullName: "exampleSenderFullName",
  sentOrReceived: "exampleSentOrReceived",
  status: "exampleStatus",
  subject: "exampleSubject",
  textContent: "exampleTextContent",
  uid: 42,
  unreadNotificationSent: 42,
  updatedAt: new Date(),
  user: "exampleUser",
  userTags: "exampleUserTags",
};
const CREATE_RESULT = {
  bcc: "exampleBcc",
  cc: "exampleCc",
  commentType: "exampleCommentType",
  communicationDate: new Date(),
  communicationMedium: "exampleCommunicationMedium",
  communicationType: "exampleCommunicationType",
  content: "exampleContent",
  createdAt: new Date(),
  creation: new Date(),
  deliveryStatus: "exampleDeliveryStatus",
  docstatus: 42,
  emailAccount: "exampleEmailAccount",
  emailStatus: "exampleEmailStatus",
  emailTemplate: "exampleEmailTemplate",
  feedbackRequest: "exampleFeedbackRequest",
  hasAttachment: 42,
  id: "exampleId",
  idx: 42,
  imapFolder: "exampleImapFolder",
  inReplyTo: "exampleInReplyTo",
  messageId: "exampleMessageId",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  phoneNo: "examplePhoneNo",
  rating: 42,
  readByRecipient: 42,
  readByRecipientOn: new Date(),
  readReceipt: 42,
  recipients: "exampleRecipients",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  referenceOwner: "exampleReferenceOwner",
  seen: 42,
  sendAfter: new Date(),
  sender: "exampleSender",
  senderFullName: "exampleSenderFullName",
  sentOrReceived: "exampleSentOrReceived",
  status: "exampleStatus",
  subject: "exampleSubject",
  textContent: "exampleTextContent",
  uid: 42,
  unreadNotificationSent: 42,
  updatedAt: new Date(),
  user: "exampleUser",
  userTags: "exampleUserTags",
};
const FIND_MANY_RESULT = [
  {
    bcc: "exampleBcc",
    cc: "exampleCc",
    commentType: "exampleCommentType",
    communicationDate: new Date(),
    communicationMedium: "exampleCommunicationMedium",
    communicationType: "exampleCommunicationType",
    content: "exampleContent",
    createdAt: new Date(),
    creation: new Date(),
    deliveryStatus: "exampleDeliveryStatus",
    docstatus: 42,
    emailAccount: "exampleEmailAccount",
    emailStatus: "exampleEmailStatus",
    emailTemplate: "exampleEmailTemplate",
    feedbackRequest: "exampleFeedbackRequest",
    hasAttachment: 42,
    id: "exampleId",
    idx: 42,
    imapFolder: "exampleImapFolder",
    inReplyTo: "exampleInReplyTo",
    messageId: "exampleMessageId",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    owner: "exampleOwner",
    phoneNo: "examplePhoneNo",
    rating: 42,
    readByRecipient: 42,
    readByRecipientOn: new Date(),
    readReceipt: 42,
    recipients: "exampleRecipients",
    referenceDoctype: "exampleReferenceDoctype",
    referenceName: "exampleReferenceName",
    referenceOwner: "exampleReferenceOwner",
    seen: 42,
    sendAfter: new Date(),
    sender: "exampleSender",
    senderFullName: "exampleSenderFullName",
    sentOrReceived: "exampleSentOrReceived",
    status: "exampleStatus",
    subject: "exampleSubject",
    textContent: "exampleTextContent",
    uid: 42,
    unreadNotificationSent: 42,
    updatedAt: new Date(),
    user: "exampleUser",
    userTags: "exampleUserTags",
  },
];
const FIND_ONE_RESULT = {
  bcc: "exampleBcc",
  cc: "exampleCc",
  commentType: "exampleCommentType",
  communicationDate: new Date(),
  communicationMedium: "exampleCommunicationMedium",
  communicationType: "exampleCommunicationType",
  content: "exampleContent",
  createdAt: new Date(),
  creation: new Date(),
  deliveryStatus: "exampleDeliveryStatus",
  docstatus: 42,
  emailAccount: "exampleEmailAccount",
  emailStatus: "exampleEmailStatus",
  emailTemplate: "exampleEmailTemplate",
  feedbackRequest: "exampleFeedbackRequest",
  hasAttachment: 42,
  id: "exampleId",
  idx: 42,
  imapFolder: "exampleImapFolder",
  inReplyTo: "exampleInReplyTo",
  messageId: "exampleMessageId",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  phoneNo: "examplePhoneNo",
  rating: 42,
  readByRecipient: 42,
  readByRecipientOn: new Date(),
  readReceipt: 42,
  recipients: "exampleRecipients",
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  referenceOwner: "exampleReferenceOwner",
  seen: 42,
  sendAfter: new Date(),
  sender: "exampleSender",
  senderFullName: "exampleSenderFullName",
  sentOrReceived: "exampleSentOrReceived",
  status: "exampleStatus",
  subject: "exampleSubject",
  textContent: "exampleTextContent",
  uid: 42,
  unreadNotificationSent: 42,
  updatedAt: new Date(),
  user: "exampleUser",
  userTags: "exampleUserTags",
};

const service = {
  createCommunication() {
    return CREATE_RESULT;
  },
  communications: () => FIND_MANY_RESULT,
  communication: ({ where }: { where: { id: string } }) => {
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

describe("Communication", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CommunicationService,
          useValue: service,
        },
      ],
      controllers: [CommunicationController],
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

  test("POST /communications", async () => {
    await request(app.getHttpServer())
      .post("/communications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        communicationDate: CREATE_RESULT.communicationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        readByRecipientOn: CREATE_RESULT.readByRecipientOn.toISOString(),
        sendAfter: CREATE_RESULT.sendAfter.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /communications", async () => {
    await request(app.getHttpServer())
      .get("/communications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          communicationDate:
            FIND_MANY_RESULT[0].communicationDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          readByRecipientOn:
            FIND_MANY_RESULT[0].readByRecipientOn.toISOString(),
          sendAfter: FIND_MANY_RESULT[0].sendAfter.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /communications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/communications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /communications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/communications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        communicationDate: FIND_ONE_RESULT.communicationDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        readByRecipientOn: FIND_ONE_RESULT.readByRecipientOn.toISOString(),
        sendAfter: FIND_ONE_RESULT.sendAfter.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /communications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/communications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        communicationDate: CREATE_RESULT.communicationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        readByRecipientOn: CREATE_RESULT.readByRecipientOn.toISOString(),
        sendAfter: CREATE_RESULT.sendAfter.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/communications")
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
