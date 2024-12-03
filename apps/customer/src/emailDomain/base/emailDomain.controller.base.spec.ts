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
import { EmailDomainController } from "../emailDomain.controller";
import { EmailDomainService } from "../emailDomain.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appendEmailsToSentFolder: "true",
  attachmentLimit: 42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  domainName: "exampleDomainName",
  emailServer: "exampleEmailServer",
  id: "exampleId",
  idx: 42,
  incomingPort: "exampleIncomingPort",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  smtpPort: "exampleSmtpPort",
  smtpServer: "exampleSmtpServer",
  updatedAt: new Date(),
  useImap: "true",
  useSsl: "true",
  useSslForOutgoing: "true",
  useStarttls: "true",
  useTls: "true",
};
const CREATE_RESULT = {
  appendEmailsToSentFolder: "true",
  attachmentLimit: 42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  domainName: "exampleDomainName",
  emailServer: "exampleEmailServer",
  id: "exampleId",
  idx: 42,
  incomingPort: "exampleIncomingPort",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  smtpPort: "exampleSmtpPort",
  smtpServer: "exampleSmtpServer",
  updatedAt: new Date(),
  useImap: "true",
  useSsl: "true",
  useSslForOutgoing: "true",
  useStarttls: "true",
  useTls: "true",
};
const FIND_MANY_RESULT = [
  {
    appendEmailsToSentFolder: "true",
    attachmentLimit: 42,
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    domainName: "exampleDomainName",
    emailServer: "exampleEmailServer",
    id: "exampleId",
    idx: 42,
    incomingPort: "exampleIncomingPort",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    smtpPort: "exampleSmtpPort",
    smtpServer: "exampleSmtpServer",
    updatedAt: new Date(),
    useImap: "true",
    useSsl: "true",
    useSslForOutgoing: "true",
    useStarttls: "true",
    useTls: "true",
  },
];
const FIND_ONE_RESULT = {
  appendEmailsToSentFolder: "true",
  attachmentLimit: 42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  domainName: "exampleDomainName",
  emailServer: "exampleEmailServer",
  id: "exampleId",
  idx: 42,
  incomingPort: "exampleIncomingPort",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  smtpPort: "exampleSmtpPort",
  smtpServer: "exampleSmtpServer",
  updatedAt: new Date(),
  useImap: "true",
  useSsl: "true",
  useSslForOutgoing: "true",
  useStarttls: "true",
  useTls: "true",
};

const service = {
  createEmailDomain() {
    return CREATE_RESULT;
  },
  emailDomains: () => FIND_MANY_RESULT,
  emailDomain: ({ where }: { where: { id: string } }) => {
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

describe("EmailDomain", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmailDomainService,
          useValue: service,
        },
      ],
      controllers: [EmailDomainController],
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

  test("POST /emailDomains", async () => {
    await request(app.getHttpServer())
      .post("/emailDomains")
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

  test("GET /emailDomains", async () => {
    await request(app.getHttpServer())
      .get("/emailDomains")
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

  test("GET /emailDomains/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailDomains"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /emailDomains/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailDomains"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /emailDomains existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/emailDomains")
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
          .post("/emailDomains")
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
