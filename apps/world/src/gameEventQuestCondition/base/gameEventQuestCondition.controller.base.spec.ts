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
import { GameEventQuestConditionController } from "../gameEventQuestCondition.controller";
import { GameEventQuestConditionService } from "../gameEventQuestCondition.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  conditionId: 42,
  createdAt: new Date(),
  eventEntry: 42,
  id: "exampleId",
  num: 42.42,
  quest: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  conditionId: 42,
  createdAt: new Date(),
  eventEntry: 42,
  id: "exampleId",
  num: 42.42,
  quest: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    conditionId: 42,
    createdAt: new Date(),
    eventEntry: 42,
    id: "exampleId",
    num: 42.42,
    quest: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  conditionId: 42,
  createdAt: new Date(),
  eventEntry: 42,
  id: "exampleId",
  num: 42.42,
  quest: 42,
  updatedAt: new Date(),
};

const service = {
  createGameEventQuestCondition() {
    return CREATE_RESULT;
  },
  gameEventQuestConditions: () => FIND_MANY_RESULT,
  gameEventQuestCondition: ({ where }: { where: { id: string } }) => {
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

describe("GameEventQuestCondition", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GameEventQuestConditionService,
          useValue: service,
        },
      ],
      controllers: [GameEventQuestConditionController],
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

  test("POST /gameEventQuestConditions", async () => {
    await request(app.getHttpServer())
      .post("/gameEventQuestConditions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /gameEventQuestConditions", async () => {
    await request(app.getHttpServer())
      .get("/gameEventQuestConditions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /gameEventQuestConditions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameEventQuestConditions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /gameEventQuestConditions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameEventQuestConditions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /gameEventQuestConditions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/gameEventQuestConditions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/gameEventQuestConditions")
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
