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
import { CreatureAddonController } from "../creatureAddon.controller";
import { CreatureAddonService } from "../creatureAddon.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aiAnimKit: 42,
  animTier: 42,
  auras: "exampleAuras",
  createdAt: new Date(),
  emote: 42,
  guid: 42.42,
  id: "exampleId",
  meleeAnimKit: 42,
  mount: 42,
  mountCreatureId: 42,
  movementAnimKit: 42,
  pathId: 42,
  pvPFlags: 42,
  sheathState: 42,
  standState: 42,
  updatedAt: new Date(),
  visFlags: 42,
  visibilityDistanceType: 42,
};
const CREATE_RESULT = {
  aiAnimKit: 42,
  animTier: 42,
  auras: "exampleAuras",
  createdAt: new Date(),
  emote: 42,
  guid: 42.42,
  id: "exampleId",
  meleeAnimKit: 42,
  mount: 42,
  mountCreatureId: 42,
  movementAnimKit: 42,
  pathId: 42,
  pvPFlags: 42,
  sheathState: 42,
  standState: 42,
  updatedAt: new Date(),
  visFlags: 42,
  visibilityDistanceType: 42,
};
const FIND_MANY_RESULT = [
  {
    aiAnimKit: 42,
    animTier: 42,
    auras: "exampleAuras",
    createdAt: new Date(),
    emote: 42,
    guid: 42.42,
    id: "exampleId",
    meleeAnimKit: 42,
    mount: 42,
    mountCreatureId: 42,
    movementAnimKit: 42,
    pathId: 42,
    pvPFlags: 42,
    sheathState: 42,
    standState: 42,
    updatedAt: new Date(),
    visFlags: 42,
    visibilityDistanceType: 42,
  },
];
const FIND_ONE_RESULT = {
  aiAnimKit: 42,
  animTier: 42,
  auras: "exampleAuras",
  createdAt: new Date(),
  emote: 42,
  guid: 42.42,
  id: "exampleId",
  meleeAnimKit: 42,
  mount: 42,
  mountCreatureId: 42,
  movementAnimKit: 42,
  pathId: 42,
  pvPFlags: 42,
  sheathState: 42,
  standState: 42,
  updatedAt: new Date(),
  visFlags: 42,
  visibilityDistanceType: 42,
};

const service = {
  createCreatureAddon() {
    return CREATE_RESULT;
  },
  creatureAddons: () => FIND_MANY_RESULT,
  creatureAddon: ({ where }: { where: { id: string } }) => {
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

describe("CreatureAddon", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CreatureAddonService,
          useValue: service,
        },
      ],
      controllers: [CreatureAddonController],
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

  test("POST /creatureAddons", async () => {
    await request(app.getHttpServer())
      .post("/creatureAddons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /creatureAddons", async () => {
    await request(app.getHttpServer())
      .get("/creatureAddons")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /creatureAddons/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureAddons"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /creatureAddons/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureAddons"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /creatureAddons existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/creatureAddons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/creatureAddons")
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
