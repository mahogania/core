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
import { CreatureEquipTemplateController } from "../creatureEquipTemplate.controller";
import { CreatureEquipTemplateService } from "../creatureEquipTemplate.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appearanceModId1: 42,
  appearanceModId2: 42,
  appearanceModId3: 42,
  createdAt: new Date(),
  creatureId: 42,
  id: "exampleId",
  itemId1: 42,
  itemId2: 42,
  itemId3: 42,
  itemVisual1: 42,
  itemVisual2: 42,
  itemVisual3: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
};
const CREATE_RESULT = {
  appearanceModId1: 42,
  appearanceModId2: 42,
  appearanceModId3: 42,
  createdAt: new Date(),
  creatureId: 42,
  id: "exampleId",
  itemId1: 42,
  itemId2: 42,
  itemId3: 42,
  itemVisual1: 42,
  itemVisual2: 42,
  itemVisual3: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
};
const FIND_MANY_RESULT = [
  {
    appearanceModId1: 42,
    appearanceModId2: 42,
    appearanceModId3: 42,
    createdAt: new Date(),
    creatureId: 42,
    id: "exampleId",
    itemId1: 42,
    itemId2: 42,
    itemId3: 42,
    itemVisual1: 42,
    itemVisual2: 42,
    itemVisual3: 42,
    updatedAt: new Date(),
    verifiedBuild: 42,
  },
];
const FIND_ONE_RESULT = {
  appearanceModId1: 42,
  appearanceModId2: 42,
  appearanceModId3: 42,
  createdAt: new Date(),
  creatureId: 42,
  id: "exampleId",
  itemId1: 42,
  itemId2: 42,
  itemId3: 42,
  itemVisual1: 42,
  itemVisual2: 42,
  itemVisual3: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
};

const service = {
  createCreatureEquipTemplate() {
    return CREATE_RESULT;
  },
  creatureEquipTemplates: () => FIND_MANY_RESULT,
  creatureEquipTemplate: ({ where }: { where: { id: string } }) => {
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

describe("CreatureEquipTemplate", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CreatureEquipTemplateService,
          useValue: service,
        },
      ],
      controllers: [CreatureEquipTemplateController],
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

  test("POST /creatureEquipTemplates", async () => {
    await request(app.getHttpServer())
      .post("/creatureEquipTemplates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /creatureEquipTemplates", async () => {
    await request(app.getHttpServer())
      .get("/creatureEquipTemplates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /creatureEquipTemplates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureEquipTemplates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /creatureEquipTemplates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creatureEquipTemplates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /creatureEquipTemplates existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/creatureEquipTemplates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/creatureEquipTemplates")
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
