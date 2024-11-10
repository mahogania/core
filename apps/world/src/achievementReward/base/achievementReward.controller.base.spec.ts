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
import { AchievementRewardController } from "../achievementReward.controller";
import { AchievementRewardService } from "../achievementReward.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  body: "exampleBody",
  createdAt: new Date(),
  id: "exampleId",
  itemId: 42,
  mailTemplateId: 42,
  sender: 42,
  subject: "exampleSubject",
  titleA: 42,
  titleH: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  body: "exampleBody",
  createdAt: new Date(),
  id: "exampleId",
  itemId: 42,
  mailTemplateId: 42,
  sender: 42,
  subject: "exampleSubject",
  titleA: 42,
  titleH: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    body: "exampleBody",
    createdAt: new Date(),
    id: "exampleId",
    itemId: 42,
    mailTemplateId: 42,
    sender: 42,
    subject: "exampleSubject",
    titleA: 42,
    titleH: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  body: "exampleBody",
  createdAt: new Date(),
  id: "exampleId",
  itemId: 42,
  mailTemplateId: 42,
  sender: 42,
  subject: "exampleSubject",
  titleA: 42,
  titleH: 42,
  updatedAt: new Date(),
};

const service = {
  createAchievementReward() {
    return CREATE_RESULT;
  },
  achievementRewards: () => FIND_MANY_RESULT,
  achievementReward: ({ where }: { where: { id: string } }) => {
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

describe("AchievementReward", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AchievementRewardService,
          useValue: service,
        },
      ],
      controllers: [AchievementRewardController],
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

  test("POST /achievementRewards", async () => {
    await request(app.getHttpServer())
      .post("/achievementRewards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /achievementRewards", async () => {
    await request(app.getHttpServer())
      .get("/achievementRewards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /achievementRewards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/achievementRewards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /achievementRewards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/achievementRewards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /achievementRewards existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/achievementRewards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/achievementRewards")
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
