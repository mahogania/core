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
import { AssetMaintenanceTaskController } from "../assetMaintenanceTask.controller";
import { AssetMaintenanceTaskService } from "../assetMaintenanceTask.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  assignTo: "exampleAssignTo",
  assignToName: "exampleAssignToName",
  certificateRequired: 42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  lastCompletionDate: new Date(),
  maintenanceStatus: "exampleMaintenanceStatus",
  maintenanceTask: "exampleMaintenanceTask",
  maintenanceType: "exampleMaintenanceType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  nextDueDate: new Date(),
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  periodicity: "examplePeriodicity",
  startDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  assignTo: "exampleAssignTo",
  assignToName: "exampleAssignToName",
  certificateRequired: 42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  lastCompletionDate: new Date(),
  maintenanceStatus: "exampleMaintenanceStatus",
  maintenanceTask: "exampleMaintenanceTask",
  maintenanceType: "exampleMaintenanceType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  nextDueDate: new Date(),
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  periodicity: "examplePeriodicity",
  startDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    assignTo: "exampleAssignTo",
    assignToName: "exampleAssignToName",
    certificateRequired: 42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    endDate: new Date(),
    id: "exampleId",
    idx: 42,
    lastCompletionDate: new Date(),
    maintenanceStatus: "exampleMaintenanceStatus",
    maintenanceTask: "exampleMaintenanceTask",
    maintenanceType: "exampleMaintenanceType",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    nextDueDate: new Date(),
    owner: "exampleOwner",
    parent: "exampleParent",
    parentField: "exampleParentField",
    parentType: "exampleParentType",
    periodicity: "examplePeriodicity",
    startDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  assignTo: "exampleAssignTo",
  assignToName: "exampleAssignToName",
  certificateRequired: 42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  lastCompletionDate: new Date(),
  maintenanceStatus: "exampleMaintenanceStatus",
  maintenanceTask: "exampleMaintenanceTask",
  maintenanceType: "exampleMaintenanceType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  nextDueDate: new Date(),
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  periodicity: "examplePeriodicity",
  startDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createAssetMaintenanceTask() {
    return CREATE_RESULT;
  },
  assetMaintenanceTasks: () => FIND_MANY_RESULT,
  assetMaintenanceTask: ({ where }: { where: { id: string } }) => {
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

describe("AssetMaintenanceTask", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetMaintenanceTaskService,
          useValue: service,
        },
      ],
      controllers: [AssetMaintenanceTaskController],
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

  test("POST /assetMaintenanceTasks", async () => {
    await request(app.getHttpServer())
      .post("/assetMaintenanceTasks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        lastCompletionDate: CREATE_RESULT.lastCompletionDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        nextDueDate: CREATE_RESULT.nextDueDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /assetMaintenanceTasks", async () => {
    await request(app.getHttpServer())
      .get("/assetMaintenanceTasks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          lastCompletionDate:
            FIND_MANY_RESULT[0].lastCompletionDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          nextDueDate: FIND_MANY_RESULT[0].nextDueDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /assetMaintenanceTasks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetMaintenanceTasks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetMaintenanceTasks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetMaintenanceTasks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        lastCompletionDate: FIND_ONE_RESULT.lastCompletionDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        nextDueDate: FIND_ONE_RESULT.nextDueDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetMaintenanceTasks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetMaintenanceTasks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        lastCompletionDate: CREATE_RESULT.lastCompletionDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        nextDueDate: CREATE_RESULT.nextDueDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetMaintenanceTasks")
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
