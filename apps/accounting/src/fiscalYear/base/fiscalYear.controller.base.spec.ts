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
import { FiscalYearController } from "../fiscalYear.controller";
import { FiscalYearService } from "../fiscalYear.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  autoCreated: 42,
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docStatus: 42,
  id: "exampleId",
  idx: 42,
  isShortYear: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  updatedAt: new Date(),
  year: "exampleYear",
  yearEndDate: new Date(),
  yearStartDate: new Date(),
};
const CREATE_RESULT = {
  autoCreated: 42,
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docStatus: 42,
  id: "exampleId",
  idx: 42,
  isShortYear: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  updatedAt: new Date(),
  year: "exampleYear",
  yearEndDate: new Date(),
  yearStartDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    autoCreated: 42,
    createdAt: new Date(),
    creation: new Date(),
    disabled: 42,
    docStatus: 42,
    id: "exampleId",
    idx: 42,
    isShortYear: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    updatedAt: new Date(),
    year: "exampleYear",
    yearEndDate: new Date(),
    yearStartDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  autoCreated: 42,
  createdAt: new Date(),
  creation: new Date(),
  disabled: 42,
  docStatus: 42,
  id: "exampleId",
  idx: 42,
  isShortYear: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  updatedAt: new Date(),
  year: "exampleYear",
  yearEndDate: new Date(),
  yearStartDate: new Date(),
};

const service = {
  createFiscalYear() {
    return CREATE_RESULT;
  },
  fiscalYears: () => FIND_MANY_RESULT,
  fiscalYear: ({ where }: { where: { id: string } }) => {
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

describe("FiscalYear", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FiscalYearService,
          useValue: service,
        },
      ],
      controllers: [FiscalYearController],
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

  test("POST /fiscalYears", async () => {
    await request(app.getHttpServer())
      .post("/fiscalYears")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        yearEndDate: CREATE_RESULT.yearEndDate.toISOString(),
        yearStartDate: CREATE_RESULT.yearStartDate.toISOString(),
      });
  });

  test("GET /fiscalYears", async () => {
    await request(app.getHttpServer())
      .get("/fiscalYears")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          yearEndDate: FIND_MANY_RESULT[0].yearEndDate.toISOString(),
          yearStartDate: FIND_MANY_RESULT[0].yearStartDate.toISOString(),
        },
      ]);
  });

  test("GET /fiscalYears/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fiscalYears"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /fiscalYears/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fiscalYears"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        yearEndDate: FIND_ONE_RESULT.yearEndDate.toISOString(),
        yearStartDate: FIND_ONE_RESULT.yearStartDate.toISOString(),
      });
  });

  test("POST /fiscalYears existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/fiscalYears")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        yearEndDate: CREATE_RESULT.yearEndDate.toISOString(),
        yearStartDate: CREATE_RESULT.yearStartDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/fiscalYears")
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
