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
import { AreaTriggerCreatePropertiesOrbitController } from "../areaTriggerCreatePropertiesOrbit.controller";
import { AreaTriggerCreatePropertiesOrbitService } from "../areaTriggerCreatePropertiesOrbit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  areaTriggerCreatePropertiesId: 42,
  blendFromRadius: 42.42,
  canLoop: "true",
  circleRadius: 42.42,
  counterClockwise: "true",
  createdAt: new Date(),
  id: "exampleId",
  initialAngle: 42.42,
  isCustom: "true",
  startDelay: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  zOffset: 42.42,
};
const CREATE_RESULT = {
  areaTriggerCreatePropertiesId: 42,
  blendFromRadius: 42.42,
  canLoop: "true",
  circleRadius: 42.42,
  counterClockwise: "true",
  createdAt: new Date(),
  id: "exampleId",
  initialAngle: 42.42,
  isCustom: "true",
  startDelay: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  zOffset: 42.42,
};
const FIND_MANY_RESULT = [
  {
    areaTriggerCreatePropertiesId: 42,
    blendFromRadius: 42.42,
    canLoop: "true",
    circleRadius: 42.42,
    counterClockwise: "true",
    createdAt: new Date(),
    id: "exampleId",
    initialAngle: 42.42,
    isCustom: "true",
    startDelay: 42,
    updatedAt: new Date(),
    verifiedBuild: 42,
    zOffset: 42.42,
  },
];
const FIND_ONE_RESULT = {
  areaTriggerCreatePropertiesId: 42,
  blendFromRadius: 42.42,
  canLoop: "true",
  circleRadius: 42.42,
  counterClockwise: "true",
  createdAt: new Date(),
  id: "exampleId",
  initialAngle: 42.42,
  isCustom: "true",
  startDelay: 42,
  updatedAt: new Date(),
  verifiedBuild: 42,
  zOffset: 42.42,
};

const service = {
  createAreaTriggerCreatePropertiesOrbit() {
    return CREATE_RESULT;
  },
  areaTriggerCreatePropertiesOrbits: () => FIND_MANY_RESULT,
  areaTriggerCreatePropertiesOrbit: ({ where }: { where: { id: string } }) => {
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

describe("AreaTriggerCreatePropertiesOrbit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AreaTriggerCreatePropertiesOrbitService,
          useValue: service,
        },
      ],
      controllers: [AreaTriggerCreatePropertiesOrbitController],
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

  test("POST /areaTriggerCreatePropertiesOrbits", async () => {
    await request(app.getHttpServer())
      .post("/areaTriggerCreatePropertiesOrbits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /areaTriggerCreatePropertiesOrbits", async () => {
    await request(app.getHttpServer())
      .get("/areaTriggerCreatePropertiesOrbits")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /areaTriggerCreatePropertiesOrbits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/areaTriggerCreatePropertiesOrbits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /areaTriggerCreatePropertiesOrbits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/areaTriggerCreatePropertiesOrbits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /areaTriggerCreatePropertiesOrbits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/areaTriggerCreatePropertiesOrbits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/areaTriggerCreatePropertiesOrbits")
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
