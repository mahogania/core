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
import { SerialNoController } from "../serialNo.controller";
import { SerialNoService } from "../serialNo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amcExpiryDate: new Date(),
  asset: "exampleAsset",
  assetStatus: "exampleAssetStatus",
  batchNo: "exampleBatchNo",
  brand: "exampleBrand",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  employee: "exampleEmployee",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  location: "exampleLocation",
  maintenanceStatus: "exampleMaintenanceStatus",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  purchaseDocumentNo: "examplePurchaseDocumentNo",
  purchaseRate: 42.42,
  serialNo: "exampleSerialNo",
  status: "exampleStatus",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
  warrantyExpiryDate: new Date(),
  warrantyPeriod: 42,
  workOrder: "exampleWorkOrder",
};
const CREATE_RESULT = {
  amcExpiryDate: new Date(),
  asset: "exampleAsset",
  assetStatus: "exampleAssetStatus",
  batchNo: "exampleBatchNo",
  brand: "exampleBrand",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  employee: "exampleEmployee",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  location: "exampleLocation",
  maintenanceStatus: "exampleMaintenanceStatus",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  purchaseDocumentNo: "examplePurchaseDocumentNo",
  purchaseRate: 42.42,
  serialNo: "exampleSerialNo",
  status: "exampleStatus",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
  warrantyExpiryDate: new Date(),
  warrantyPeriod: 42,
  workOrder: "exampleWorkOrder",
};
const FIND_MANY_RESULT = [
  {
    amcExpiryDate: new Date(),
    asset: "exampleAsset",
    assetStatus: "exampleAssetStatus",
    batchNo: "exampleBatchNo",
    brand: "exampleBrand",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    employee: "exampleEmployee",
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    location: "exampleLocation",
    maintenanceStatus: "exampleMaintenanceStatus",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    purchaseDocumentNo: "examplePurchaseDocumentNo",
    purchaseRate: 42.42,
    serialNo: "exampleSerialNo",
    status: "exampleStatus",
    updatedAt: new Date(),
    warehouse: "exampleWarehouse",
    warrantyExpiryDate: new Date(),
    warrantyPeriod: 42,
    workOrder: "exampleWorkOrder",
  },
];
const FIND_ONE_RESULT = {
  amcExpiryDate: new Date(),
  asset: "exampleAsset",
  assetStatus: "exampleAssetStatus",
  batchNo: "exampleBatchNo",
  brand: "exampleBrand",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  employee: "exampleEmployee",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  location: "exampleLocation",
  maintenanceStatus: "exampleMaintenanceStatus",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  purchaseDocumentNo: "examplePurchaseDocumentNo",
  purchaseRate: 42.42,
  serialNo: "exampleSerialNo",
  status: "exampleStatus",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
  warrantyExpiryDate: new Date(),
  warrantyPeriod: 42,
  workOrder: "exampleWorkOrder",
};

const service = {
  createSerialNo() {
    return CREATE_RESULT;
  },
  serialNos: () => FIND_MANY_RESULT,
  serialNo: ({ where }: { where: { id: string } }) => {
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

describe("SerialNo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SerialNoService,
          useValue: service,
        },
      ],
      controllers: [SerialNoController],
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

  test("POST /serialNos", async () => {
    await request(app.getHttpServer())
      .post("/serialNos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        amcExpiryDate: CREATE_RESULT.amcExpiryDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        warrantyExpiryDate: CREATE_RESULT.warrantyExpiryDate.toISOString(),
      });
  });

  test("GET /serialNos", async () => {
    await request(app.getHttpServer())
      .get("/serialNos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          amcExpiryDate: FIND_MANY_RESULT[0].amcExpiryDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          warrantyExpiryDate:
            FIND_MANY_RESULT[0].warrantyExpiryDate.toISOString(),
        },
      ]);
  });

  test("GET /serialNos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serialNos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /serialNos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serialNos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        amcExpiryDate: FIND_ONE_RESULT.amcExpiryDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        warrantyExpiryDate: FIND_ONE_RESULT.warrantyExpiryDate.toISOString(),
      });
  });

  test("POST /serialNos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/serialNos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        amcExpiryDate: CREATE_RESULT.amcExpiryDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        warrantyExpiryDate: CREATE_RESULT.warrantyExpiryDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/serialNos")
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
