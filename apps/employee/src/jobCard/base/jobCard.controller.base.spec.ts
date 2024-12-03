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
import { JobCardController } from "../jobCard.controller";
import { JobCardService } from "../jobCard.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualEndDate: new Date(),
  actualStartDate: new Date(),
  amendedFrom: "exampleAmendedFrom",
  barcode: "exampleBarcode",
  batchNo: "exampleBatchNo",
  bomNo: "exampleBomNo",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  currentTime: 42,
  docstatus: 42,
  expectedEndDate: new Date(),
  expectedStartDate: new Date(),
  forJobCard: "exampleForJobCard",
  forOperation: "exampleForOperation",
  forQuantity: 42.42,
  hourRate: 42.42,
  id: "exampleId",
  idx: 42,
  isCorrectiveJobCard: 42,
  itemName: "exampleItemName",
  jobStarted: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  operation: "exampleOperation",
  operationId: "exampleOperationId",
  operationRowNumber: "exampleOperationRowNumber",
  owner: "exampleOwner",
  postingDate: new Date(),
  processLossQty: 42.42,
  productionItem: "exampleProductionItem",
  project: "exampleProject",
  qualityInspection: "exampleQualityInspection",
  qualityInspectionTemplate: "exampleQualityInspectionTemplate",
  remarks: "exampleRemarks",
  requestedQty: 42.42,
  sequenceId: 42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  startedTime: new Date(),
  status: "exampleStatus",
  timeRequired: 42.42,
  totalCompletedQty: 42.42,
  totalTimeInMins: 42.42,
  transferredQty: 42.42,
  updatedAt: new Date(),
  wipWarehouse: "exampleWipWarehouse",
  workOrder: "exampleWorkOrder",
  workstation: "exampleWorkstation",
  workstationType: "exampleWorkstationType",
};
const CREATE_RESULT = {
  actualEndDate: new Date(),
  actualStartDate: new Date(),
  amendedFrom: "exampleAmendedFrom",
  barcode: "exampleBarcode",
  batchNo: "exampleBatchNo",
  bomNo: "exampleBomNo",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  currentTime: 42,
  docstatus: 42,
  expectedEndDate: new Date(),
  expectedStartDate: new Date(),
  forJobCard: "exampleForJobCard",
  forOperation: "exampleForOperation",
  forQuantity: 42.42,
  hourRate: 42.42,
  id: "exampleId",
  idx: 42,
  isCorrectiveJobCard: 42,
  itemName: "exampleItemName",
  jobStarted: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  operation: "exampleOperation",
  operationId: "exampleOperationId",
  operationRowNumber: "exampleOperationRowNumber",
  owner: "exampleOwner",
  postingDate: new Date(),
  processLossQty: 42.42,
  productionItem: "exampleProductionItem",
  project: "exampleProject",
  qualityInspection: "exampleQualityInspection",
  qualityInspectionTemplate: "exampleQualityInspectionTemplate",
  remarks: "exampleRemarks",
  requestedQty: 42.42,
  sequenceId: 42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  startedTime: new Date(),
  status: "exampleStatus",
  timeRequired: 42.42,
  totalCompletedQty: 42.42,
  totalTimeInMins: 42.42,
  transferredQty: 42.42,
  updatedAt: new Date(),
  wipWarehouse: "exampleWipWarehouse",
  workOrder: "exampleWorkOrder",
  workstation: "exampleWorkstation",
  workstationType: "exampleWorkstationType",
};
const FIND_MANY_RESULT = [
  {
    actualEndDate: new Date(),
    actualStartDate: new Date(),
    amendedFrom: "exampleAmendedFrom",
    barcode: "exampleBarcode",
    batchNo: "exampleBatchNo",
    bomNo: "exampleBomNo",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    currentTime: 42,
    docstatus: 42,
    expectedEndDate: new Date(),
    expectedStartDate: new Date(),
    forJobCard: "exampleForJobCard",
    forOperation: "exampleForOperation",
    forQuantity: 42.42,
    hourRate: 42.42,
    id: "exampleId",
    idx: 42,
    isCorrectiveJobCard: 42,
    itemName: "exampleItemName",
    jobStarted: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    operation: "exampleOperation",
    operationId: "exampleOperationId",
    operationRowNumber: "exampleOperationRowNumber",
    owner: "exampleOwner",
    postingDate: new Date(),
    processLossQty: 42.42,
    productionItem: "exampleProductionItem",
    project: "exampleProject",
    qualityInspection: "exampleQualityInspection",
    qualityInspectionTemplate: "exampleQualityInspectionTemplate",
    remarks: "exampleRemarks",
    requestedQty: 42.42,
    sequenceId: 42,
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    startedTime: new Date(),
    status: "exampleStatus",
    timeRequired: 42.42,
    totalCompletedQty: 42.42,
    totalTimeInMins: 42.42,
    transferredQty: 42.42,
    updatedAt: new Date(),
    wipWarehouse: "exampleWipWarehouse",
    workOrder: "exampleWorkOrder",
    workstation: "exampleWorkstation",
    workstationType: "exampleWorkstationType",
  },
];
const FIND_ONE_RESULT = {
  actualEndDate: new Date(),
  actualStartDate: new Date(),
  amendedFrom: "exampleAmendedFrom",
  barcode: "exampleBarcode",
  batchNo: "exampleBatchNo",
  bomNo: "exampleBomNo",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  currentTime: 42,
  docstatus: 42,
  expectedEndDate: new Date(),
  expectedStartDate: new Date(),
  forJobCard: "exampleForJobCard",
  forOperation: "exampleForOperation",
  forQuantity: 42.42,
  hourRate: 42.42,
  id: "exampleId",
  idx: 42,
  isCorrectiveJobCard: 42,
  itemName: "exampleItemName",
  jobStarted: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  operation: "exampleOperation",
  operationId: "exampleOperationId",
  operationRowNumber: "exampleOperationRowNumber",
  owner: "exampleOwner",
  postingDate: new Date(),
  processLossQty: 42.42,
  productionItem: "exampleProductionItem",
  project: "exampleProject",
  qualityInspection: "exampleQualityInspection",
  qualityInspectionTemplate: "exampleQualityInspectionTemplate",
  remarks: "exampleRemarks",
  requestedQty: 42.42,
  sequenceId: 42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  startedTime: new Date(),
  status: "exampleStatus",
  timeRequired: 42.42,
  totalCompletedQty: 42.42,
  totalTimeInMins: 42.42,
  transferredQty: 42.42,
  updatedAt: new Date(),
  wipWarehouse: "exampleWipWarehouse",
  workOrder: "exampleWorkOrder",
  workstation: "exampleWorkstation",
  workstationType: "exampleWorkstationType",
};

const service = {
  createJobCard() {
    return CREATE_RESULT;
  },
  jobCards: () => FIND_MANY_RESULT,
  jobCard: ({ where }: { where: { id: string } }) => {
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

describe("JobCard", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JobCardService,
          useValue: service,
        },
      ],
      controllers: [JobCardController],
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

  test("POST /jobCards", async () => {
    await request(app.getHttpServer())
      .post("/jobCards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualEndDate: CREATE_RESULT.actualEndDate.toISOString(),
        actualStartDate: CREATE_RESULT.actualStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        expectedEndDate: CREATE_RESULT.expectedEndDate.toISOString(),
        expectedStartDate: CREATE_RESULT.expectedStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        startedTime: CREATE_RESULT.startedTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /jobCards", async () => {
    await request(app.getHttpServer())
      .get("/jobCards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actualEndDate: FIND_MANY_RESULT[0].actualEndDate.toISOString(),
          actualStartDate: FIND_MANY_RESULT[0].actualStartDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          expectedEndDate: FIND_MANY_RESULT[0].expectedEndDate.toISOString(),
          expectedStartDate:
            FIND_MANY_RESULT[0].expectedStartDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          startedTime: FIND_MANY_RESULT[0].startedTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /jobCards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobCards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /jobCards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobCards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actualEndDate: FIND_ONE_RESULT.actualEndDate.toISOString(),
        actualStartDate: FIND_ONE_RESULT.actualStartDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        expectedEndDate: FIND_ONE_RESULT.expectedEndDate.toISOString(),
        expectedStartDate: FIND_ONE_RESULT.expectedStartDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        startedTime: FIND_ONE_RESULT.startedTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /jobCards existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/jobCards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualEndDate: CREATE_RESULT.actualEndDate.toISOString(),
        actualStartDate: CREATE_RESULT.actualStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        expectedEndDate: CREATE_RESULT.expectedEndDate.toISOString(),
        expectedStartDate: CREATE_RESULT.expectedStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        startedTime: CREATE_RESULT.startedTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/jobCards")
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
