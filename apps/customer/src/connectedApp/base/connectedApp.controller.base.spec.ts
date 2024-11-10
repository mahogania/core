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
import { ConnectedAppController } from "../connectedApp.controller";
import { ConnectedAppService } from "../connectedApp.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authorizationUri: "exampleAuthorizationUri",
  clientId: "exampleClientId",
  clientSecret: "exampleClientSecret",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  introspectionUri: "exampleIntrospectionUri",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  openidConfiguration: "exampleOpenidConfiguration",
  owner: "exampleOwner",
  providerName: "exampleProviderName",
  redirectUri: "exampleRedirectUri",
  revocationUri: "exampleRevocationUri",
  tokenUri: "exampleTokenUri",
  updatedAt: new Date(),
  userinfoUri: "exampleUserinfoUri",
};
const CREATE_RESULT = {
  authorizationUri: "exampleAuthorizationUri",
  clientId: "exampleClientId",
  clientSecret: "exampleClientSecret",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  introspectionUri: "exampleIntrospectionUri",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  openidConfiguration: "exampleOpenidConfiguration",
  owner: "exampleOwner",
  providerName: "exampleProviderName",
  redirectUri: "exampleRedirectUri",
  revocationUri: "exampleRevocationUri",
  tokenUri: "exampleTokenUri",
  updatedAt: new Date(),
  userinfoUri: "exampleUserinfoUri",
};
const FIND_MANY_RESULT = [
  {
    authorizationUri: "exampleAuthorizationUri",
    clientId: "exampleClientId",
    clientSecret: "exampleClientSecret",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    introspectionUri: "exampleIntrospectionUri",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    openidConfiguration: "exampleOpenidConfiguration",
    owner: "exampleOwner",
    providerName: "exampleProviderName",
    redirectUri: "exampleRedirectUri",
    revocationUri: "exampleRevocationUri",
    tokenUri: "exampleTokenUri",
    updatedAt: new Date(),
    userinfoUri: "exampleUserinfoUri",
  },
];
const FIND_ONE_RESULT = {
  authorizationUri: "exampleAuthorizationUri",
  clientId: "exampleClientId",
  clientSecret: "exampleClientSecret",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  introspectionUri: "exampleIntrospectionUri",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  openidConfiguration: "exampleOpenidConfiguration",
  owner: "exampleOwner",
  providerName: "exampleProviderName",
  redirectUri: "exampleRedirectUri",
  revocationUri: "exampleRevocationUri",
  tokenUri: "exampleTokenUri",
  updatedAt: new Date(),
  userinfoUri: "exampleUserinfoUri",
};

const service = {
  createConnectedApp() {
    return CREATE_RESULT;
  },
  connectedApps: () => FIND_MANY_RESULT,
  connectedApp: ({ where }: { where: { id: string } }) => {
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

describe("ConnectedApp", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ConnectedAppService,
          useValue: service,
        },
      ],
      controllers: [ConnectedAppController],
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

  test("POST /connectedApps", async () => {
    await request(app.getHttpServer())
      .post("/connectedApps")
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

  test("GET /connectedApps", async () => {
    await request(app.getHttpServer())
      .get("/connectedApps")
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

  test("GET /connectedApps/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/connectedApps"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /connectedApps/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/connectedApps"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /connectedApps existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/connectedApps")
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
          .post("/connectedApps")
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
