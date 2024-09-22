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
  animprogress: 42,
  areaId: 42,
  createdAt: new Date(),
  guid: 42,
  id: "exampleId",
  map: 42,
  orientation: 42.42,
  phaseGroup: 42,
  phaseId: 42,
  phaseUseFlags: 42,
  positionX: 42.42,
  positionY: 42.42,
  positionZ: 42.42,
  rotation0: 42.42,
  rotation1: 42.42,
  rotation2: 42.42,
  rotation3: 42.42,
  scriptName: "exampleScriptName",
  spawnDifficulties: "exampleSpawnDifficulties",
  spawntimesecs: 42,
  state: 42,
  stringId: "exampleStringId",
  terrainSwapMap: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  zoneId: 42,
};
const CREATE_RESULT = {
  animprogress: 42,
  areaId: 42,
  createdAt: new Date(),
  guid: 42,
  id: "exampleId",
  map: 42,
  orientation: 42.42,
  phaseGroup: 42,
  phaseId: 42,
  phaseUseFlags: 42,
  positionX: 42.42,
  positionY: 42.42,
  positionZ: 42.42,
  rotation0: 42.42,
  rotation1: 42.42,
  rotation2: 42.42,
  rotation3: 42.42,
  scriptName: "exampleScriptName",
  spawnDifficulties: "exampleSpawnDifficulties",
  spawntimesecs: 42,
  state: 42,
  stringId: "exampleStringId",
  terrainSwapMap: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  zoneId: 42,
};
const FIND_MANY_RESULT = [
  {
    animprogress: 42,
    areaId: 42,
    createdAt: new Date(),
    guid: 42,
    id: "exampleId",
    map: 42,
    orientation: 42.42,
    phaseGroup: 42,
    phaseId: 42,
    phaseUseFlags: 42,
    positionX: 42.42,
    positionY: 42.42,
    positionZ: 42.42,
    rotation0: 42.42,
    rotation1: 42.42,
    rotation2: 42.42,
    rotation3: 42.42,
    scriptName: "exampleScriptName",
    spawnDifficulties: "exampleSpawnDifficulties",
    spawntimesecs: 42,
    state: 42,
    stringId: "exampleStringId",
    terrainSwapMap: 42,
    updatedAt: new Date(),
    verifiedBuild: 42,
    zoneId: 42,
  },
];
const FIND_ONE_RESULT = {
  animprogress: 42,
  areaId: 42,
  createdAt: new Date(),
  guid: 42,
  id: "exampleId",
  map: 42,
  orientation: 42.42,
  phaseGroup: 42,
  phaseId: 42,
  phaseUseFlags: 42,
  positionX: 42.42,
  positionY: 42.42,
  positionZ: 42.42,
  rotation0: 42.42,
  rotation1: 42.42,
  rotation2: 42.42,
  rotation3: 42.42,
  scriptName: "exampleScriptName",
  spawnDifficulties: "exampleSpawnDifficulties",
  spawntimesecs: 42,
  state: 42,
  stringId: "exampleStringId",
  terrainSwapMap: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
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
