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
import { BisectNodesController } from "../bisectNodes.controller";
import { BisectNodesService } from "../bisectNodes.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  balanceSheetSummary: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  difference: 42.42,
  docstatus: 42,
  generated: 42,
  id: "exampleId",
  idx: 42,
  leftChild: "exampleLeftChild",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: 42,
  owner: "exampleOwner",
  periodFromDate: new Date(),
  periodToDate: new Date(),
  profitLossSummary: 42.42,
  rightChild: "exampleRightChild",
  root: "exampleRoot",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  balanceSheetSummary: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  difference: 42.42,
  docstatus: 42,
  generated: 42,
  id: "exampleId",
  idx: 42,
  leftChild: "exampleLeftChild",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: 42,
  owner: "exampleOwner",
  periodFromDate: new Date(),
  periodToDate: new Date(),
  profitLossSummary: 42.42,
  rightChild: "exampleRightChild",
  root: "exampleRoot",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    balanceSheetSummary: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    difference: 42.42,
    docstatus: 42,
    generated: 42,
    id: "exampleId",
    idx: 42,
    leftChild: "exampleLeftChild",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: 42,
    owner: "exampleOwner",
    periodFromDate: new Date(),
    periodToDate: new Date(),
    profitLossSummary: 42.42,
    rightChild: "exampleRightChild",
    root: "exampleRoot",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  balanceSheetSummary: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  difference: 42.42,
  docstatus: 42,
  generated: 42,
  id: "exampleId",
  idx: 42,
  leftChild: "exampleLeftChild",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: 42,
  owner: "exampleOwner",
  periodFromDate: new Date(),
  periodToDate: new Date(),
  profitLossSummary: 42.42,
  rightChild: "exampleRightChild",
  root: "exampleRoot",
  updatedAt: new Date(),
};

const service = {
  createBisectNodes() {
    return CREATE_RESULT;
  },
  bisectNodesItems: () => FIND_MANY_RESULT,
  bisectNodes: ({ where }: { where: { id: string } }) => {
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

describe("BisectNodes", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BisectNodesService,
          useValue: service,
        },
      ],
      controllers: [BisectNodesController],
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

  test("POST /bisectNodes", async () => {
    await request(app.getHttpServer())
      .post("/bisectNodes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        periodFromDate: CREATE_RESULT.periodFromDate.toISOString(),
        periodToDate: CREATE_RESULT.periodToDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bisectNodes", async () => {
    await request(app.getHttpServer())
      .get("/bisectNodes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          periodFromDate: FIND_MANY_RESULT[0].periodFromDate.toISOString(),
          periodToDate: FIND_MANY_RESULT[0].periodToDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bisectNodes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bisectNodes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bisectNodes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bisectNodes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        periodFromDate: FIND_ONE_RESULT.periodFromDate.toISOString(),
        periodToDate: FIND_ONE_RESULT.periodToDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bisectNodes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bisectNodes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        periodFromDate: CREATE_RESULT.periodFromDate.toISOString(),
        periodToDate: CREATE_RESULT.periodToDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bisectNodes")
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
