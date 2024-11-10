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
import { AssetMaintenanceLogController } from "../assetMaintenanceLog.controller";
import { AssetMaintenanceLogService } from "../assetMaintenanceLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actionsPerformed: "exampleActionsPerformed",
  amendedFrom: "exampleAmendedFrom",
  assetMaintenance: "exampleAssetMaintenance",
  assetName: "exampleAssetName",
  assignToName: "exampleAssignToName",
  certificateAttachement: "exampleCertificateAttachement",
  completionDate: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  dueDate: new Date(),
  hasCertificate: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  maintenanceStatus: "exampleMaintenanceStatus",
  maintenanceType: "exampleMaintenanceType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  periodicity: "examplePeriodicity",
  task: "exampleTask",
  taskName: "exampleTaskName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actionsPerformed: "exampleActionsPerformed",
  amendedFrom: "exampleAmendedFrom",
  assetMaintenance: "exampleAssetMaintenance",
  assetName: "exampleAssetName",
  assignToName: "exampleAssignToName",
  certificateAttachement: "exampleCertificateAttachement",
  completionDate: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  dueDate: new Date(),
  hasCertificate: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  maintenanceStatus: "exampleMaintenanceStatus",
  maintenanceType: "exampleMaintenanceType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  periodicity: "examplePeriodicity",
  task: "exampleTask",
  taskName: "exampleTaskName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actionsPerformed: "exampleActionsPerformed",
    amendedFrom: "exampleAmendedFrom",
    assetMaintenance: "exampleAssetMaintenance",
    assetName: "exampleAssetName",
    assignToName: "exampleAssignToName",
    certificateAttachement: "exampleCertificateAttachement",
    completionDate: new Date(),
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    dueDate: new Date(),
    hasCertificate: 42,
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemName: "exampleItemName",
    maintenanceStatus: "exampleMaintenanceStatus",
    maintenanceType: "exampleMaintenanceType",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    periodicity: "examplePeriodicity",
    task: "exampleTask",
    taskName: "exampleTaskName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actionsPerformed: "exampleActionsPerformed",
  amendedFrom: "exampleAmendedFrom",
  assetMaintenance: "exampleAssetMaintenance",
  assetName: "exampleAssetName",
  assignToName: "exampleAssignToName",
  certificateAttachement: "exampleCertificateAttachement",
  completionDate: new Date(),
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  dueDate: new Date(),
  hasCertificate: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  maintenanceStatus: "exampleMaintenanceStatus",
  maintenanceType: "exampleMaintenanceType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  periodicity: "examplePeriodicity",
  task: "exampleTask",
  taskName: "exampleTaskName",
  updatedAt: new Date(),
};

const service = {
  createAssetMaintenanceLog() {
    return CREATE_RESULT;
  },
  assetMaintenanceLogs: () => FIND_MANY_RESULT,
  assetMaintenanceLog: ({ where }: { where: { id: string } }) => {
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

describe("AssetMaintenanceLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetMaintenanceLogService,
          useValue: service,
        },
      ],
      controllers: [AssetMaintenanceLogController],
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

  test("POST /assetMaintenanceLogs", async () => {
    await request(app.getHttpServer())
      .post("/assetMaintenanceLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /assetMaintenanceLogs", async () => {
    await request(app.getHttpServer())
      .get("/assetMaintenanceLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completionDate: FIND_MANY_RESULT[0].completionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /assetMaintenanceLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetMaintenanceLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetMaintenanceLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetMaintenanceLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completionDate: FIND_ONE_RESULT.completionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetMaintenanceLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetMaintenanceLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetMaintenanceLogs")
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
