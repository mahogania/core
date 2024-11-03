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
import { EmployeeInternalWorkHistoryController } from "../employeeInternalWorkHistory.controller";
import { EmployeeInternalWorkHistoryService } from "../employeeInternalWorkHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  branch: "exampleBranch",
  createdAt: new Date(),
  creation: new Date(),
  department: "exampleDepartment",
  designation: "exampleDesignation",
  docstatus: 42,
  fromDate: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  toDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  branch: "exampleBranch",
  createdAt: new Date(),
  creation: new Date(),
  department: "exampleDepartment",
  designation: "exampleDesignation",
  docstatus: 42,
  fromDate: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  toDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    branch: "exampleBranch",
    createdAt: new Date(),
    creation: new Date(),
    department: "exampleDepartment",
    designation: "exampleDesignation",
    docstatus: 42,
    fromDate: new Date(),
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    toDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  branch: "exampleBranch",
  createdAt: new Date(),
  creation: new Date(),
  department: "exampleDepartment",
  designation: "exampleDesignation",
  docstatus: 42,
  fromDate: new Date(),
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  toDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createEmployeeInternalWorkHistory() {
    return CREATE_RESULT;
  },
  employeeInternalWorkHistories: () => FIND_MANY_RESULT,
  employeeInternalWorkHistory: ({ where }: { where: { id: string } }) => {
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

describe("EmployeeInternalWorkHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeInternalWorkHistoryService,
          useValue: service,
        },
      ],
      controllers: [EmployeeInternalWorkHistoryController],
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

  test("POST /employeeInternalWorkHistories", async () => {
    await request(app.getHttpServer())
      .post("/employeeInternalWorkHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employeeInternalWorkHistories", async () => {
    await request(app.getHttpServer())
      .get("/employeeInternalWorkHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employeeInternalWorkHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeInternalWorkHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeInternalWorkHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeInternalWorkHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employeeInternalWorkHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeInternalWorkHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeInternalWorkHistories")
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
