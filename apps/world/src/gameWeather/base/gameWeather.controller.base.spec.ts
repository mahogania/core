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
import { GameWeatherController } from "../gameWeather.controller";
import { GameWeatherService } from "../gameWeather.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fallRainChance: 42,
  fallSnowChance: 42,
  fallStormChance: 42,
  id: "exampleId",
  scriptName: "exampleScriptName",
  springRainChance: 42,
  springSnowChance: 42,
  springStormChance: 42,
  summerRainChance: 42,
  summerSnowChance: 42,
  summerStormChance: 42,
  updatedAt: new Date(),
  winterRainChance: 42,
  winterSnowChance: 42,
  winterStormChance: 42,
  zone: 42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fallRainChance: 42,
  fallSnowChance: 42,
  fallStormChance: 42,
  id: "exampleId",
  scriptName: "exampleScriptName",
  springRainChance: 42,
  springSnowChance: 42,
  springStormChance: 42,
  summerRainChance: 42,
  summerSnowChance: 42,
  summerStormChance: 42,
  updatedAt: new Date(),
  winterRainChance: 42,
  winterSnowChance: 42,
  winterStormChance: 42,
  zone: 42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fallRainChance: 42,
    fallSnowChance: 42,
    fallStormChance: 42,
    id: "exampleId",
    scriptName: "exampleScriptName",
    springRainChance: 42,
    springSnowChance: 42,
    springStormChance: 42,
    summerRainChance: 42,
    summerSnowChance: 42,
    summerStormChance: 42,
    updatedAt: new Date(),
    winterRainChance: 42,
    winterSnowChance: 42,
    winterStormChance: 42,
    zone: 42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fallRainChance: 42,
  fallSnowChance: 42,
  fallStormChance: 42,
  id: "exampleId",
  scriptName: "exampleScriptName",
  springRainChance: 42,
  springSnowChance: 42,
  springStormChance: 42,
  summerRainChance: 42,
  summerSnowChance: 42,
  summerStormChance: 42,
  updatedAt: new Date(),
  winterRainChance: 42,
  winterSnowChance: 42,
  winterStormChance: 42,
  zone: 42,
};

const service = {
  createGameWeather() {
    return CREATE_RESULT;
  },
  gameWeathers: () => FIND_MANY_RESULT,
  gameWeather: ({ where }: { where: { id: string } }) => {
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

describe("GameWeather", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GameWeatherService,
          useValue: service,
        },
      ],
      controllers: [GameWeatherController],
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

  test("POST /gameWeathers", async () => {
    await request(app.getHttpServer())
      .post("/gameWeathers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /gameWeathers", async () => {
    await request(app.getHttpServer())
      .get("/gameWeathers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /gameWeathers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameWeathers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /gameWeathers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/gameWeathers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /gameWeathers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/gameWeathers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/gameWeathers")
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
