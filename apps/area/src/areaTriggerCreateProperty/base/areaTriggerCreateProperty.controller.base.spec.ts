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
import { AreaTriggerCreatePropertyController } from "../areaTriggerCreateProperty.controller";
import { AreaTriggerCreatePropertyService } from "../areaTriggerCreateProperty.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  animId: 42,
  animKitId: 42,
  areaTriggerId: 42,
  createdAt: new Date(),
  decalPropertiesId: 42,
  facingCurveId: 42,
  flags: 42,
  id: "exampleId",
  isAreatriggerCustom: "true",
  isCustom: "true",
  morphCurveId: 42,
  moveCurveId: 42,
  scaleCurveId: 42,
  scriptName: "exampleScriptName",
  shape: 42,
  shapeData0: 42.42,
  shapeData1: 42.42,
  shapeData2: 42.42,
  shapeData3: 42.42,
  shapeData4: 42.42,
  shapeData5: 42.42,
  shapeData6: 42.42,
  shapeData7: 42.42,
  timeToTarget: 42,
  timeToTargetScale: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
};
const CREATE_RESULT = {
  animId: 42,
  animKitId: 42,
  areaTriggerId: 42,
  createdAt: new Date(),
  decalPropertiesId: 42,
  facingCurveId: 42,
  flags: 42,
  id: "exampleId",
  isAreatriggerCustom: "true",
  isCustom: "true",
  morphCurveId: 42,
  moveCurveId: 42,
  scaleCurveId: 42,
  scriptName: "exampleScriptName",
  shape: 42,
  shapeData0: 42.42,
  shapeData1: 42.42,
  shapeData2: 42.42,
  shapeData3: 42.42,
  shapeData4: 42.42,
  shapeData5: 42.42,
  shapeData6: 42.42,
  shapeData7: 42.42,
  timeToTarget: 42,
  timeToTargetScale: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
};
const FIND_MANY_RESULT = [
  {
    animId: 42,
    animKitId: 42,
    areaTriggerId: 42,
    createdAt: new Date(),
    decalPropertiesId: 42,
    facingCurveId: 42,
    flags: 42,
    id: "exampleId",
    isAreatriggerCustom: "true",
    isCustom: "true",
    morphCurveId: 42,
    moveCurveId: 42,
    scaleCurveId: 42,
    scriptName: "exampleScriptName",
    shape: 42,
    shapeData0: 42.42,
    shapeData1: 42.42,
    shapeData2: 42.42,
    shapeData3: 42.42,
    shapeData4: 42.42,
    shapeData5: 42.42,
    shapeData6: 42.42,
    shapeData7: 42.42,
    timeToTarget: 42,
    timeToTargetScale: 42,
    updatedAt: new Date(),
    verifiedBuild: 42,
  },
];
const FIND_ONE_RESULT = {
  animId: 42,
  animKitId: 42,
  areaTriggerId: 42,
  createdAt: new Date(),
  decalPropertiesId: 42,
  facingCurveId: 42,
  flags: 42,
  id: "exampleId",
  isAreatriggerCustom: "true",
  isCustom: "true",
  morphCurveId: 42,
  moveCurveId: 42,
  scaleCurveId: 42,
  scriptName: "exampleScriptName",
  shape: 42,
  shapeData0: 42.42,
  shapeData1: 42.42,
  shapeData2: 42.42,
  shapeData3: 42.42,
  shapeData4: 42.42,
  shapeData5: 42.42,
  shapeData6: 42.42,
  shapeData7: 42.42,
  timeToTarget: 42,
  timeToTargetScale: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
};

const service = {
  createAreaTriggerCreateProperty() {
    return CREATE_RESULT;
  },
  areaTriggerCreateProperties: () => FIND_MANY_RESULT,
  areaTriggerCreateProperty: ({ where }: { where: { id: string } }) => {
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

describe("AreaTriggerCreateProperty", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AreaTriggerCreatePropertyService,
          useValue: service,
        },
      ],
      controllers: [AreaTriggerCreatePropertyController],
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

  test("POST /areaTriggerCreateProperties", async () => {
    await request(app.getHttpServer())
      .post("/areaTriggerCreateProperties")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /areaTriggerCreateProperties", async () => {
    await request(app.getHttpServer())
      .get("/areaTriggerCreateProperties")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /areaTriggerCreateProperties/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/areaTriggerCreateProperties"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /areaTriggerCreateProperties/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/areaTriggerCreateProperties"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /areaTriggerCreateProperties existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/areaTriggerCreateProperties")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/areaTriggerCreateProperties")
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
