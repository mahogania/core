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
import { PosClosingEntryController } from "../posClosingEntry.controller";
import { PosClosingEntryService } from "../posClosingEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docStatus: 42,
  errorMessage: "exampleErrorMessage",
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netTotal: 42.42,
  owner: "exampleOwner",
  periodEndDate: new Date(),
  periodStartDate: new Date(),
  posOpeningEntry: "examplePosOpeningEntry",
  posProfile: "examplePosProfile",
  postingDate: new Date(),
  postingTime: new Date(),
  status: "exampleStatus",
  totalQuantity: 42.42,
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docStatus: 42,
  errorMessage: "exampleErrorMessage",
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netTotal: 42.42,
  owner: "exampleOwner",
  periodEndDate: new Date(),
  periodStartDate: new Date(),
  posOpeningEntry: "examplePosOpeningEntry",
  posProfile: "examplePosProfile",
  postingDate: new Date(),
  postingTime: new Date(),
  status: "exampleStatus",
  totalQuantity: 42.42,
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    docStatus: 42,
    errorMessage: "exampleErrorMessage",
    grandTotal: 42.42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    netTotal: 42.42,
    owner: "exampleOwner",
    periodEndDate: new Date(),
    periodStartDate: new Date(),
    posOpeningEntry: "examplePosOpeningEntry",
    posProfile: "examplePosProfile",
    postingDate: new Date(),
    postingTime: new Date(),
    status: "exampleStatus",
    totalQuantity: 42.42,
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docStatus: 42,
  errorMessage: "exampleErrorMessage",
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netTotal: 42.42,
  owner: "exampleOwner",
  periodEndDate: new Date(),
  periodStartDate: new Date(),
  posOpeningEntry: "examplePosOpeningEntry",
  posProfile: "examplePosProfile",
  postingDate: new Date(),
  postingTime: new Date(),
  status: "exampleStatus",
  totalQuantity: 42.42,
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createPosClosingEntry() {
    return CREATE_RESULT;
  },
  posClosingEntries: () => FIND_MANY_RESULT,
  posClosingEntry: ({ where }: { where: { id: string } }) => {
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

describe("PosClosingEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PosClosingEntryService,
          useValue: service,
        },
      ],
      controllers: [PosClosingEntryController],
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

  test("POST /posClosingEntries", async () => {
    await request(app.getHttpServer())
      .post("/posClosingEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        periodEndDate: CREATE_RESULT.periodEndDate.toISOString(),
        periodStartDate: CREATE_RESULT.periodStartDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /posClosingEntries", async () => {
    await request(app.getHttpServer())
      .get("/posClosingEntries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          periodEndDate: FIND_MANY_RESULT[0].periodEndDate.toISOString(),
          periodStartDate: FIND_MANY_RESULT[0].periodStartDate.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          postingTime: FIND_MANY_RESULT[0].postingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /posClosingEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posClosingEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /posClosingEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posClosingEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        periodEndDate: FIND_ONE_RESULT.periodEndDate.toISOString(),
        periodStartDate: FIND_ONE_RESULT.periodStartDate.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        postingTime: FIND_ONE_RESULT.postingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /posClosingEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/posClosingEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        periodEndDate: CREATE_RESULT.periodEndDate.toISOString(),
        periodStartDate: CREATE_RESULT.periodStartDate.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/posClosingEntries")
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
