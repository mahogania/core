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
import { CashierClosingController } from "../cashierClosing.controller";
import { CashierClosingService } from "../cashierClosing.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  createdAt: new Date(),
  creation: new Date(),
  custody: 42.42,
  date: new Date(),
  docstatus: 42,
  expense: 42.42,
  fromTime: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  namingSeries: "exampleNamingSeries",
  netAmount: 42.42,
  outstandingAmount: 42.42,
  owner: "exampleOwner",
  returns: 42.42,
  time: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  createdAt: new Date(),
  creation: new Date(),
  custody: 42.42,
  date: new Date(),
  docstatus: 42,
  expense: 42.42,
  fromTime: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  namingSeries: "exampleNamingSeries",
  netAmount: 42.42,
  outstandingAmount: 42.42,
  owner: "exampleOwner",
  returns: 42.42,
  time: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    createdAt: new Date(),
    creation: new Date(),
    custody: 42.42,
    date: new Date(),
    docstatus: 42,
    expense: 42.42,
    fromTime: new Date(),
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    namingSeries: "exampleNamingSeries",
    netAmount: 42.42,
    outstandingAmount: 42.42,
    owner: "exampleOwner",
    returns: 42.42,
    time: new Date(),
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  createdAt: new Date(),
  creation: new Date(),
  custody: 42.42,
  date: new Date(),
  docstatus: 42,
  expense: 42.42,
  fromTime: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  namingSeries: "exampleNamingSeries",
  netAmount: 42.42,
  outstandingAmount: 42.42,
  owner: "exampleOwner",
  returns: 42.42,
  time: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createCashierClosing() {
    return CREATE_RESULT;
  },
  cashierClosings: () => FIND_MANY_RESULT,
  cashierClosing: ({ where }: { where: { id: string } }) => {
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

describe("CashierClosing", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CashierClosingService,
          useValue: service,
        },
      ],
      controllers: [CashierClosingController],
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

  test("POST /cashierClosings", async () => {
    await request(app.getHttpServer())
      .post("/cashierClosings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        fromTime: CREATE_RESULT.fromTime.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cashierClosings", async () => {
    await request(app.getHttpServer())
      .get("/cashierClosings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          fromTime: FIND_MANY_RESULT[0].fromTime.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cashierClosings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashierClosings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cashierClosings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashierClosings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        fromTime: FIND_ONE_RESULT.fromTime.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cashierClosings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cashierClosings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        fromTime: CREATE_RESULT.fromTime.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cashierClosings")
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
