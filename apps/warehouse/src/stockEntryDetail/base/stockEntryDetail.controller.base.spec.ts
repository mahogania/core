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
import { StockEntryDetailController } from "../stockEntryDetail.controller";
import { StockEntryDetailService } from "../stockEntryDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  additionalCost: 42.42,
  againstStockEntry: "exampleAgainstStockEntry",
  allowAlternativeItem: "true",
  allowZeroValuationRate: "true",
  amount: 42.42,
  barcode: "exampleBarcode",
  basicAmount: 42.42,
  basicRate: 42.42,
  batchNo: "exampleBatchNo",
  bomNo: "exampleBomNo",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  hasItemScanned: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isFinishedItem: "true",
  isScrapItem: "true",
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  jobCardItem: "exampleJobCardItem",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  originalItem: "exampleOriginalItem",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  poDetail: "examplePoDetail",
  project: "exampleProject",
  putawayRule: "examplePutawayRule",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  referencePurchaseReceipt: "exampleReferencePurchaseReceipt",
  retainSample: "true",
  sWarehouse: "exampleSWarehouse",
  sampleQuantity: 42,
  scoRmDetail: "exampleScoRmDetail",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  setBasicRateManually: "true",
  steDetail: "exampleSteDetail",
  stockUom: "exampleStockUom",
  subcontractedItem: "exampleSubcontractedItem",
  tWarehouse: "exampleTWarehouse",
  transferQty: 42.42,
  transferredQty: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  valuationRate: 42.42,
};
const CREATE_RESULT = {
  actualQty: 42.42,
  additionalCost: 42.42,
  againstStockEntry: "exampleAgainstStockEntry",
  allowAlternativeItem: "true",
  allowZeroValuationRate: "true",
  amount: 42.42,
  barcode: "exampleBarcode",
  basicAmount: 42.42,
  basicRate: 42.42,
  batchNo: "exampleBatchNo",
  bomNo: "exampleBomNo",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  hasItemScanned: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isFinishedItem: "true",
  isScrapItem: "true",
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  jobCardItem: "exampleJobCardItem",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  originalItem: "exampleOriginalItem",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  poDetail: "examplePoDetail",
  project: "exampleProject",
  putawayRule: "examplePutawayRule",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  referencePurchaseReceipt: "exampleReferencePurchaseReceipt",
  retainSample: "true",
  sWarehouse: "exampleSWarehouse",
  sampleQuantity: 42,
  scoRmDetail: "exampleScoRmDetail",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  setBasicRateManually: "true",
  steDetail: "exampleSteDetail",
  stockUom: "exampleStockUom",
  subcontractedItem: "exampleSubcontractedItem",
  tWarehouse: "exampleTWarehouse",
  transferQty: 42.42,
  transferredQty: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  valuationRate: 42.42,
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    additionalCost: 42.42,
    againstStockEntry: "exampleAgainstStockEntry",
    allowAlternativeItem: "true",
    allowZeroValuationRate: "true",
    amount: 42.42,
    barcode: "exampleBarcode",
    basicAmount: 42.42,
    basicRate: 42.42,
    batchNo: "exampleBatchNo",
    bomNo: "exampleBomNo",
    conversionFactor: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    expenseAccount: "exampleExpenseAccount",
    hasItemScanned: "true",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    isFinishedItem: "true",
    isScrapItem: "true",
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    jobCardItem: "exampleJobCardItem",
    materialRequest: "exampleMaterialRequest",
    materialRequestItem: "exampleMaterialRequestItem",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    originalItem: "exampleOriginalItem",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    poDetail: "examplePoDetail",
    project: "exampleProject",
    putawayRule: "examplePutawayRule",
    qty: 42.42,
    qualityInspection: "exampleQualityInspection",
    referencePurchaseReceipt: "exampleReferencePurchaseReceipt",
    retainSample: "true",
    sWarehouse: "exampleSWarehouse",
    sampleQuantity: 42,
    scoRmDetail: "exampleScoRmDetail",
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    setBasicRateManually: "true",
    steDetail: "exampleSteDetail",
    stockUom: "exampleStockUom",
    subcontractedItem: "exampleSubcontractedItem",
    tWarehouse: "exampleTWarehouse",
    transferQty: 42.42,
    transferredQty: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    useSerialBatchFields: "true",
    valuationRate: 42.42,
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  additionalCost: 42.42,
  againstStockEntry: "exampleAgainstStockEntry",
  allowAlternativeItem: "true",
  allowZeroValuationRate: "true",
  amount: 42.42,
  barcode: "exampleBarcode",
  basicAmount: 42.42,
  basicRate: 42.42,
  batchNo: "exampleBatchNo",
  bomNo: "exampleBomNo",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  hasItemScanned: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isFinishedItem: "true",
  isScrapItem: "true",
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  jobCardItem: "exampleJobCardItem",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  originalItem: "exampleOriginalItem",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  poDetail: "examplePoDetail",
  project: "exampleProject",
  putawayRule: "examplePutawayRule",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  referencePurchaseReceipt: "exampleReferencePurchaseReceipt",
  retainSample: "true",
  sWarehouse: "exampleSWarehouse",
  sampleQuantity: 42,
  scoRmDetail: "exampleScoRmDetail",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  setBasicRateManually: "true",
  steDetail: "exampleSteDetail",
  stockUom: "exampleStockUom",
  subcontractedItem: "exampleSubcontractedItem",
  tWarehouse: "exampleTWarehouse",
  transferQty: 42.42,
  transferredQty: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  valuationRate: 42.42,
};

const service = {
  createStockEntryDetail() {
    return CREATE_RESULT;
  },
  stockEntryDetails: () => FIND_MANY_RESULT,
  stockEntryDetail: ({ where }: { where: { id: string } }) => {
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

describe("StockEntryDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StockEntryDetailService,
          useValue: service,
        },
      ],
      controllers: [StockEntryDetailController],
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

  test("POST /stockEntryDetails", async () => {
    await request(app.getHttpServer())
      .post("/stockEntryDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stockEntryDetails", async () => {
    await request(app.getHttpServer())
      .get("/stockEntryDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stockEntryDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockEntryDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stockEntryDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockEntryDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stockEntryDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stockEntryDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stockEntryDetails")
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
