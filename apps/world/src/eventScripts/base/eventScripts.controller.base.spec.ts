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
import { EventScriptsController } from "../eventScripts.controller";
import { EventScriptsService } from "../eventScripts.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  command: 42,
  comment: "exampleComment",
  createdAt: new Date(),
  dataint: 42,
  datalong: 42,
  datalong2: 42,
  delay: 42,
  id: "exampleId",
  o: 42.42,
  updatedAt: new Date(),
  x: 42.42,
  y: 42.42,
  z: 42.42,
};
const CREATE_RESULT = {
  command: 42,
  comment: "exampleComment",
  createdAt: new Date(),
  dataint: 42,
  datalong: 42,
  datalong2: 42,
  delay: 42,
  id: "exampleId",
  o: 42.42,
  updatedAt: new Date(),
  x: 42.42,
  y: 42.42,
  z: 42.42,
};
const FIND_MANY_RESULT = [
  {
    command: 42,
    comment: "exampleComment",
    createdAt: new Date(),
    dataint: 42,
    datalong: 42,
    datalong2: 42,
    delay: 42,
    id: "exampleId",
    o: 42.42,
    updatedAt: new Date(),
    x: 42.42,
    y: 42.42,
    z: 42.42,
  },
];
const FIND_ONE_RESULT = {
  command: 42,
  comment: "exampleComment",
  createdAt: new Date(),
  dataint: 42,
  datalong: 42,
  datalong2: 42,
  delay: 42,
  id: "exampleId",
  o: 42.42,
  updatedAt: new Date(),
  x: 42.42,
  y: 42.42,
  z: 42.42,
};

const service = {
  createEventScripts() {
    return CREATE_RESULT;
  },
  eventScriptsItems: () => FIND_MANY_RESULT,
  eventScripts: ({ where }: { where: { id: string } }) => {
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

describe("EventScripts", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventScriptsService,
          useValue: service,
        },
      ],
      controllers: [EventScriptsController],
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

  test("POST /eventScripts", async () => {
    await request(app.getHttpServer())
      .post("/eventScripts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /eventScripts", async () => {
    await request(app.getHttpServer())
      .get("/eventScripts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /eventScripts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventScripts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /eventScripts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventScripts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /eventScripts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/eventScripts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/eventScripts")
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
