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
import { GameObjectController } from "../gameObject.controller";
import { GameObjectService } from "../gameObject.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  areaId: 42,
  createdAt: new Date(),
  id: "exampleId",
  mapId: 42,
  phaseGroupId: 42,
  phaseId: 42,
  spawnTime: new Date(),
  state: 42,
  stringId: "exampleStringId",
  transformId: "exampleTransformId",
  updatedAt: new Date(),
  version: 42,
  zoneId: 42,
};
const CREATE_RESULT = {
  areaId: 42,
  createdAt: new Date(),
  id: "exampleId",
  mapId: 42,
  phaseGroupId: 42,
  phaseId: 42,
  spawnTime: new Date(),
  state: 42,
  stringId: "exampleStringId",
  transformId: "exampleTransformId",
  updatedAt: new Date(),
  version: 42,
  zoneId: 42,
};
const FIND_MANY_RESULT = [
  {
    areaId: 42,
    createdAt: new Date(),
    id: "exampleId",
    mapId: 42,
    phaseGroupId: 42,
    phaseId: 42,
    spawnTime: new Date(),
    state: 42,
    stringId: "exampleStringId",
    transformId: "exampleTransformId",
    updatedAt: new Date(),
    version: 42,
    zoneId: 42,
  },
];
const FIND_ONE_RESULT = {
  areaId: 42,
  createdAt: new Date(),
  id: "exampleId",
  mapId: 42,
  phaseGroupId: 42,
  phaseId: 42,
  spawnTime: new Date(),
  state: 42,
  stringId: "exampleStringId",
  transformId: "exampleTransformId",
  updatedAt: new Date(),
  version: 42,
  zoneId: 42,
};

const service = {
  createGameObject() {
    return CREATE_RESULT;
  },
  gameObjects: () => FIND_MANY_RESULT,
  gameObject: ({ where }: { where: { id: string } }) => {
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

describe("GameObject", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GameObjectService,
          useValue: service,
        },
      ],
      controllers: [GameObjectController],
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

  test("POST /gameObjects", async () => {
    await request(app.getHttpServer())
      .post("/gameObjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        spawnTime: CREATE_RESULT.spawnTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /gameObjects", async () => {
    await request(app.getHttpServer())
      .get("/gameObjects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          spawnTime: FIND_MANY_RESULT[0].spawnTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /gameObjects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameObjects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /gameObjects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameObjects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        spawnTime: FIND_ONE_RESULT.spawnTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /gameObjects existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/gameObjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        spawnTime: CREATE_RESULT.spawnTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/gameObjects")
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
