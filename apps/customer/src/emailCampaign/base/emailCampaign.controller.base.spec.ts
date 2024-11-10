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
import { EmailCampaignController } from "../emailCampaign.controller";
import { EmailCampaignService } from "../emailCampaign.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  campaignName: "exampleCampaignName",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  emailCampaignFor: "exampleEmailCampaignFor",
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  recipient: "exampleRecipient",
  sender: "exampleSender",
  startDate: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  campaignName: "exampleCampaignName",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  emailCampaignFor: "exampleEmailCampaignFor",
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  recipient: "exampleRecipient",
  sender: "exampleSender",
  startDate: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    campaignName: "exampleCampaignName",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    emailCampaignFor: "exampleEmailCampaignFor",
    endDate: new Date(),
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    recipient: "exampleRecipient",
    sender: "exampleSender",
    startDate: new Date(),
    status: "exampleStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  campaignName: "exampleCampaignName",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  emailCampaignFor: "exampleEmailCampaignFor",
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  recipient: "exampleRecipient",
  sender: "exampleSender",
  startDate: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};

const service = {
  createEmailCampaign() {
    return CREATE_RESULT;
  },
  emailCampaigns: () => FIND_MANY_RESULT,
  emailCampaign: ({ where }: { where: { id: string } }) => {
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

describe("EmailCampaign", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmailCampaignService,
          useValue: service,
        },
      ],
      controllers: [EmailCampaignController],
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

  test("POST /emailCampaigns", async () => {
    await request(app.getHttpServer())
      .post("/emailCampaigns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /emailCampaigns", async () => {
    await request(app.getHttpServer())
      .get("/emailCampaigns")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /emailCampaigns/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailCampaigns"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /emailCampaigns/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emailCampaigns"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /emailCampaigns existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/emailCampaigns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/emailCampaigns")
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
