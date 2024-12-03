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
import { StockReconciliationItemController } from "../stockReconciliationItem.controller";
import { StockReconciliationItemService } from "../stockReconciliationItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowZeroValuationRate: "true",
  amount: 42.42,
  amountDifference: 42.42,
  barcode: "exampleBarcode",
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  currentAmount: 42.42,
  currentQty: 42.42,
  currentSerialAndBatchBundle: "exampleCurrentSerialAndBatchBundle",
  currentSerialNo: "exampleCurrentSerialNo",
  currentValuationRate: 42.42,
  docstatus: 42,
  hasItemScanned: "exampleHasItemScanned",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  quantityDifference: "exampleQuantityDifference",
  reconcileAllSerialBatch: "true",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  allowZeroValuationRate: "true",
  amount: 42.42,
  amountDifference: 42.42,
  barcode: "exampleBarcode",
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  currentAmount: 42.42,
  currentQty: 42.42,
  currentSerialAndBatchBundle: "exampleCurrentSerialAndBatchBundle",
  currentSerialNo: "exampleCurrentSerialNo",
  currentValuationRate: 42.42,
  docstatus: 42,
  hasItemScanned: "exampleHasItemScanned",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  quantityDifference: "exampleQuantityDifference",
  reconcileAllSerialBatch: "true",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    allowZeroValuationRate: "true",
    amount: 42.42,
    amountDifference: 42.42,
    barcode: "exampleBarcode",
    batchNo: "exampleBatchNo",
    createdAt: new Date(),
    creation: new Date(),
    currentAmount: 42.42,
    currentQty: 42.42,
    currentSerialAndBatchBundle: "exampleCurrentSerialAndBatchBundle",
    currentSerialNo: "exampleCurrentSerialNo",
    currentValuationRate: 42.42,
    docstatus: 42,
    hasItemScanned: "exampleHasItemScanned",
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    qty: 42.42,
    quantityDifference: "exampleQuantityDifference",
    reconcileAllSerialBatch: "true",
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    updatedAt: new Date(),
    useSerialBatchFields: "true",
    valuationRate: 42.42,
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  allowZeroValuationRate: "true",
  amount: 42.42,
  amountDifference: 42.42,
  barcode: "exampleBarcode",
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  currentAmount: 42.42,
  currentQty: 42.42,
  currentSerialAndBatchBundle: "exampleCurrentSerialAndBatchBundle",
  currentSerialNo: "exampleCurrentSerialNo",
  currentValuationRate: 42.42,
  docstatus: 42,
  hasItemScanned: "exampleHasItemScanned",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  quantityDifference: "exampleQuantityDifference",
  reconcileAllSerialBatch: "true",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};

const service = {
  createStockReconciliationItem() {
    return CREATE_RESULT;
  },
  stockReconciliationItems: () => FIND_MANY_RESULT,
  stockReconciliationItem: ({ where }: { where: { id: string } }) => {
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

describe("StockReconciliationItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StockReconciliationItemService,
          useValue: service,
        },
      ],
      controllers: [StockReconciliationItemController],
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

  test("POST /stockReconciliationItems", async () => {
    await request(app.getHttpServer())
      .post("/stockReconciliationItems")
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

  test("GET /stockReconciliationItems", async () => {
    await request(app.getHttpServer())
      .get("/stockReconciliationItems")
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

  test("GET /stockReconciliationItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockReconciliationItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stockReconciliationItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockReconciliationItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stockReconciliationItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stockReconciliationItems")
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
          .post("/stockReconciliationItems")
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
