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
import { CommunicationMediumController } from "../communicationMedium.controller";
import { CommunicationMediumService } from "../communicationMedium.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  catchAll: "exampleCatchAll",
  communicationChannel: "exampleCommunicationChannel",
  communicationMediumType: "exampleCommunicationMediumType",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  provider: "exampleProvider",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  catchAll: "exampleCatchAll",
  communicationChannel: "exampleCommunicationChannel",
  communicationMediumType: "exampleCommunicationMediumType",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  provider: "exampleProvider",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    catchAll: "exampleCatchAll",
    communicationChannel: "exampleCommunicationChannel",
    communicationMediumType: "exampleCommunicationMediumType",
    createdAt: new Date(),
    creation: new Date(),
    disabled: 42,
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    owner: "exampleOwner",
    provider: "exampleProvider",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  catchAll: "exampleCatchAll",
  communicationChannel: "exampleCommunicationChannel",
  communicationMediumType: "exampleCommunicationMediumType",
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  owner: "exampleOwner",
  provider: "exampleProvider",
  updatedAt: new Date(),
};

const service = {
  createCommunicationMedium() {
    return CREATE_RESULT;
  },
  communicationMediums: () => FIND_MANY_RESULT,
  communicationMedium: ({ where }: { where: { id: string } }) => {
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

describe("CommunicationMedium", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CommunicationMediumService,
          useValue: service,
        },
      ],
      controllers: [CommunicationMediumController],
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

  test("POST /communicationMediums", async () => {
    await request(app.getHttpServer())
      .post("/communicationMediums")
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

  test("GET /communicationMediums", async () => {
    await request(app.getHttpServer())
      .get("/communicationMediums")
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

  test("GET /communicationMediums/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/communicationMediums"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /communicationMediums/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/communicationMediums"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /communicationMediums existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/communicationMediums")
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
          .post("/communicationMediums")
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
