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
import { AssetCapitalizationServiceItemController } from "../assetCapitalizationServiceItem.controller";
import { AssetCapitalizationServiceItemService } from "../assetCapitalizationServiceItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  amount: 42.42,
  batchNo: "exampleBatchNo",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  rate: 42.42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  actualQty: 42.42,
  amount: 42.42,
  batchNo: "exampleBatchNo",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  rate: 42.42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    amount: 42.42,
    batchNo: "exampleBatchNo",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    expenseAccount: "exampleExpenseAccount",
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentField: "exampleParentField",
    parentType: "exampleParentType",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    qty: 42.42,
    rate: 42.42,
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    uom: "exampleUom",
    updatedAt: new Date(),
    useSerialBatchFields: 42,
    valuationRate: 42.42,
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  amount: 42.42,
  batchNo: "exampleBatchNo",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  rate: 42.42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};

const service = {
  createAssetCapitalizationServiceItem() {
    return CREATE_RESULT;
  },
  assetCapitalizationServiceItems: () => FIND_MANY_RESULT,
  assetCapitalizationServiceItem: ({ where }: { where: { id: string } }) => {
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

describe("AssetCapitalizationServiceItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetCapitalizationServiceItemService,
          useValue: service,
        },
      ],
      controllers: [AssetCapitalizationServiceItemController],
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

  test("POST /assetCapitalizationServiceItems", async () => {
    await request(app.getHttpServer())
      .post("/assetCapitalizationServiceItems")
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

  test("GET /assetCapitalizationServiceItems", async () => {
    await request(app.getHttpServer())
      .get("/assetCapitalizationServiceItems")
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

  test("GET /assetCapitalizationServiceItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetCapitalizationServiceItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetCapitalizationServiceItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetCapitalizationServiceItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetCapitalizationServiceItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetCapitalizationServiceItems")
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
          .post("/assetCapitalizationServiceItems")
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
