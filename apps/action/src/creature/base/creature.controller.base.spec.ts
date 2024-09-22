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
import { CreatureController } from "../creature.controller";
import { CreatureService } from "../creature.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  areaId: 42,
  createdAt: new Date(),
  curhealth: 42,
  curmana: 42,
  currentwaypoint: 42,
  equipmentId: 42,
  guid: 42.42,
  id: "exampleId",
  map: 42,
  modelid: 42,
  movementType: 42,
  npcflag: 42.42,
  orientation: 42.42,
  phaseGroup: 42,
  phaseId: 42,
  phaseUseFlags: 42,
  positionX: 42.42,
  positionY: 42.42,
  positionZ: 42.42,
  scriptName: "exampleScriptName",
  spawnDifficulties: "exampleSpawnDifficulties",
  spawntimesecs: 42,
  stringId: "exampleStringId",
  terrainSwapMap: 42,
  unitFlags: 42,
  unitFlags2: 42,
  unitFlags3: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  wanderDistance: 42.42,
  zoneId: 42,
};
const CREATE_RESULT = {
  areaId: 42,
  createdAt: new Date(),
  curhealth: 42,
  curmana: 42,
  currentwaypoint: 42,
  equipmentId: 42,
  guid: 42.42,
  id: "exampleId",
  map: 42,
  modelid: 42,
  movementType: 42,
  npcflag: 42.42,
  orientation: 42.42,
  phaseGroup: 42,
  phaseId: 42,
  phaseUseFlags: 42,
  positionX: 42.42,
  positionY: 42.42,
  positionZ: 42.42,
  scriptName: "exampleScriptName",
  spawnDifficulties: "exampleSpawnDifficulties",
  spawntimesecs: 42,
  stringId: "exampleStringId",
  terrainSwapMap: 42,
  unitFlags: 42,
  unitFlags2: 42,
  unitFlags3: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  wanderDistance: 42.42,
  zoneId: 42,
};
const FIND_MANY_RESULT = [
  {
    areaId: 42,
    createdAt: new Date(),
    curhealth: 42,
    curmana: 42,
    currentwaypoint: 42,
    equipmentId: 42,
    guid: 42.42,
    id: "exampleId",
    map: 42,
    modelid: 42,
    movementType: 42,
    npcflag: 42.42,
    orientation: 42.42,
    phaseGroup: 42,
    phaseId: 42,
    phaseUseFlags: 42,
    positionX: 42.42,
    positionY: 42.42,
    positionZ: 42.42,
    scriptName: "exampleScriptName",
    spawnDifficulties: "exampleSpawnDifficulties",
    spawntimesecs: 42,
    stringId: "exampleStringId",
    terrainSwapMap: 42,
    unitFlags: 42,
    unitFlags2: 42,
    unitFlags3: 42,
    updatedAt: new Date(),
    verifiedBuild: 42,
    wanderDistance: 42.42,
    zoneId: 42,
  },
];
const FIND_ONE_RESULT = {
  areaId: 42,
  createdAt: new Date(),
  curhealth: 42,
  curmana: 42,
  currentwaypoint: 42,
  equipmentId: 42,
  guid: 42.42,
  id: "exampleId",
  map: 42,
  modelid: 42,
  movementType: 42,
  npcflag: 42.42,
  orientation: 42.42,
  phaseGroup: 42,
  phaseId: 42,
  phaseUseFlags: 42,
  positionX: 42.42,
  positionY: 42.42,
  positionZ: 42.42,
  scriptName: "exampleScriptName",
  spawnDifficulties: "exampleSpawnDifficulties",
  spawntimesecs: 42,
  stringId: "exampleStringId",
  terrainSwapMap: 42,
  unitFlags: 42,
  unitFlags2: 42,
  unitFlags3: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  wanderDistance: 42.42,
  zoneId: 42,
};

const service = {
  createCreature() {
    return CREATE_RESULT;
  },
  creatures: () => FIND_MANY_RESULT,
  creature: ({ where }: { where: { id: string } }) => {
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

describe("Creature", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CreatureService,
          useValue: service,
        },
      ],
      controllers: [CreatureController],
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

  test("POST /creatures", async () => {
    await request(app.getHttpServer())
      .post("/creatures")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /creatures", async () => {
    await request(app.getHttpServer())
      .get("/creatures")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /creatures/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatures"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /creatures/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatures"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /creatures existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/creatures")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/creatures")
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
