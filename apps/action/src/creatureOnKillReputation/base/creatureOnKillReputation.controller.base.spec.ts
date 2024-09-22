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
import { CreatureOnKillReputationController } from "../creatureOnKillReputation.controller";
import { CreatureOnKillReputationService } from "../creatureOnKillReputation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  creatureId: 42,
  id: "exampleId",
  isTeamAward1: 42,
  isTeamAward2: 42,
  maxStanding1: 42,
  maxStanding2: 42,
  rewOnKillRepFaction1: 42,
  rewOnKillRepFaction2: 42,
  rewOnKillRepValue1: 42,
  rewOnKillRepValue2: 42,
  teamDependent: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  creatureId: 42,
  id: "exampleId",
  isTeamAward1: 42,
  isTeamAward2: 42,
  maxStanding1: 42,
  maxStanding2: 42,
  rewOnKillRepFaction1: 42,
  rewOnKillRepFaction2: 42,
  rewOnKillRepValue1: 42,
  rewOnKillRepValue2: 42,
  teamDependent: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    creatureId: 42,
    id: "exampleId",
    isTeamAward1: 42,
    isTeamAward2: 42,
    maxStanding1: 42,
    maxStanding2: 42,
    rewOnKillRepFaction1: 42,
    rewOnKillRepFaction2: 42,
    rewOnKillRepValue1: 42,
    rewOnKillRepValue2: 42,
    teamDependent: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  creatureId: 42,
  id: "exampleId",
  isTeamAward1: 42,
  isTeamAward2: 42,
  maxStanding1: 42,
  maxStanding2: 42,
  rewOnKillRepFaction1: 42,
  rewOnKillRepFaction2: 42,
  rewOnKillRepValue1: 42,
  rewOnKillRepValue2: 42,
  teamDependent: 42,
  updatedAt: new Date(),
};

const service = {
  createCreatureOnKillReputation() {
    return CREATE_RESULT;
  },
  creatureOnKillReputations: () => FIND_MANY_RESULT,
  creatureOnKillReputation: ({ where }: { where: { id: string } }) => {
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

describe("CreatureOnKillReputation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CreatureOnKillReputationService,
          useValue: service,
        },
      ],
      controllers: [CreatureOnKillReputationController],
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

  test("POST /creatureOnKillReputations", async () => {
    await request(app.getHttpServer())
      .post("/creatureOnKillReputations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /creatureOnKillReputations", async () => {
    await request(app.getHttpServer())
      .get("/creatureOnKillReputations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /creatureOnKillReputations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureOnKillReputations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /creatureOnKillReputations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureOnKillReputations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /creatureOnKillReputations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/creatureOnKillReputations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/creatureOnKillReputations")
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
