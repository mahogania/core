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
import { CreatureFormationsController } from "../creatureFormations.controller";
import { CreatureFormationsService } from "../creatureFormations.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  angle: 42.42,
  createdAt: new Date(),
  dist: 42.42,
  groupAi: 42,
  id: "exampleId",
  leaderGuid: 42.42,
  memberGuid: 42.42,
  point_1: 42,
  point_2: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  angle: 42.42,
  createdAt: new Date(),
  dist: 42.42,
  groupAi: 42,
  id: "exampleId",
  leaderGuid: 42.42,
  memberGuid: 42.42,
  point_1: 42,
  point_2: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    angle: 42.42,
    createdAt: new Date(),
    dist: 42.42,
    groupAi: 42,
    id: "exampleId",
    leaderGuid: 42.42,
    memberGuid: 42.42,
    point_1: 42,
    point_2: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  angle: 42.42,
  createdAt: new Date(),
  dist: 42.42,
  groupAi: 42,
  id: "exampleId",
  leaderGuid: 42.42,
  memberGuid: 42.42,
  point_1: 42,
  point_2: 42,
  updatedAt: new Date(),
};

const service = {
  createCreatureFormations() {
    return CREATE_RESULT;
  },
  creatureFormationsItems: () => FIND_MANY_RESULT,
  creatureFormations: ({ where }: { where: { id: string } }) => {
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

describe("CreatureFormations", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CreatureFormationsService,
          useValue: service,
        },
      ],
      controllers: [CreatureFormationsController],
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

  test("POST /creatureFormations", async () => {
    await request(app.getHttpServer())
      .post("/creatureFormations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /creatureFormations", async () => {
    await request(app.getHttpServer())
      .get("/creatureFormations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /creatureFormations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureFormations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /creatureFormations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureFormations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /creatureFormations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/creatureFormations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/creatureFormations")
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
