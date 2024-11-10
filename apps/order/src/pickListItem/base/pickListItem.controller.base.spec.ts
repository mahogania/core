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
import { PickListItemController } from "../pickListItem.controller";
import { PickListItemService } from "../pickListItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  batchNo: "exampleBatchNo",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pickedQty: 42.42,
  productBundleItem: "exampleProductBundleItem",
  qty: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockReservedQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  batchNo: "exampleBatchNo",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pickedQty: 42.42,
  productBundleItem: "exampleProductBundleItem",
  qty: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockReservedQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    batchNo: "exampleBatchNo",
    conversionFactor: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    materialRequest: "exampleMaterialRequest",
    materialRequestItem: "exampleMaterialRequestItem",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    pickedQty: 42.42,
    productBundleItem: "exampleProductBundleItem",
    qty: 42.42,
    salesOrder: "exampleSalesOrder",
    salesOrderItem: "exampleSalesOrderItem",
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    stockQty: 42.42,
    stockReservedQty: 42.42,
    stockUom: "exampleStockUom",
    uom: "exampleUom",
    updatedAt: new Date(),
    useSerialBatchFields: 42,
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  batchNo: "exampleBatchNo",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pickedQty: 42.42,
  productBundleItem: "exampleProductBundleItem",
  qty: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockReservedQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  warehouse: "exampleWarehouse",
};

const service = {
  createPickListItem() {
    return CREATE_RESULT;
  },
  pickListItems: () => FIND_MANY_RESULT,
  pickListItem: ({ where }: { where: { id: string } }) => {
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

describe("PickListItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PickListItemService,
          useValue: service,
        },
      ],
      controllers: [PickListItemController],
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

  test("POST /pickListItems", async () => {
    await request(app.getHttpServer())
      .post("/pickListItems")
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

  test("GET /pickListItems", async () => {
    await request(app.getHttpServer())
      .get("/pickListItems")
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

  test("GET /pickListItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pickListItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /pickListItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pickListItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /pickListItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/pickListItems")
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
          .post("/pickListItems")
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
