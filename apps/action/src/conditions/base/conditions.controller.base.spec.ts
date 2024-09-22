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
import { ConditionsController } from "../conditions.controller";
import { ConditionsService } from "../conditions.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  comment: "exampleComment",
  conditionStringValue1: "exampleConditionStringValue1",
  conditionTarget: 42,
  conditionTypeOrReference: 42,
  conditionValue1: 42,
  conditionValue2: 42,
  conditionValue3: 42,
  createdAt: new Date(),
  elseGroup: 42,
  errorTextId: 42,
  errorType: 42,
  id: "exampleId",
  negativeCondition: 42,
  scriptName: "exampleScriptName",
  sourceEntry: 42,
  sourceGroup: 42,
  sourceId: 42,
  sourceTypeOrReferenceId: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  comment: "exampleComment",
  conditionStringValue1: "exampleConditionStringValue1",
  conditionTarget: 42,
  conditionTypeOrReference: 42,
  conditionValue1: 42,
  conditionValue2: 42,
  conditionValue3: 42,
  createdAt: new Date(),
  elseGroup: 42,
  errorTextId: 42,
  errorType: 42,
  id: "exampleId",
  negativeCondition: 42,
  scriptName: "exampleScriptName",
  sourceEntry: 42,
  sourceGroup: 42,
  sourceId: 42,
  sourceTypeOrReferenceId: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    comment: "exampleComment",
    conditionStringValue1: "exampleConditionStringValue1",
    conditionTarget: 42,
    conditionTypeOrReference: 42,
    conditionValue1: 42,
    conditionValue2: 42,
    conditionValue3: 42,
    createdAt: new Date(),
    elseGroup: 42,
    errorTextId: 42,
    errorType: 42,
    id: "exampleId",
    negativeCondition: 42,
    scriptName: "exampleScriptName",
    sourceEntry: 42,
    sourceGroup: 42,
    sourceId: 42,
    sourceTypeOrReferenceId: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  comment: "exampleComment",
  conditionStringValue1: "exampleConditionStringValue1",
  conditionTarget: 42,
  conditionTypeOrReference: 42,
  conditionValue1: 42,
  conditionValue2: 42,
  conditionValue3: 42,
  createdAt: new Date(),
  elseGroup: 42,
  errorTextId: 42,
  errorType: 42,
  id: "exampleId",
  negativeCondition: 42,
  scriptName: "exampleScriptName",
  sourceEntry: 42,
  sourceGroup: 42,
  sourceId: 42,
  sourceTypeOrReferenceId: 42,
  updatedAt: new Date(),
};

const service = {
  createConditions() {
    return CREATE_RESULT;
  },
  conditionsItems: () => FIND_MANY_RESULT,
  conditions: ({ where }: { where: { id: string } }) => {
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

describe("Conditions", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ConditionsService,
          useValue: service,
        },
      ],
      controllers: [ConditionsController],
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

  test("POST /conditions", async () => {
    await request(app.getHttpServer())
      .post("/conditions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /conditions", async () => {
    await request(app.getHttpServer())
      .get("/conditions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /conditions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/conditions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /conditions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/conditions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /conditions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/conditions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/conditions")
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
