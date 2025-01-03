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
import { ProductionPlanItemController } from "../productionPlanItem.controller";
import { ProductionPlanItemService } from "../productionPlanItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bomNo: "exampleBomNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includeExplodedItems: 42,
  itemCode: "exampleItemCode",
  itemReference: "exampleItemReference",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  orderedQty: 42.42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pendingQty: 42.42,
  plannedQty: 42.42,
  plannedStartDate: new Date(),
  producedQty: 42.42,
  productBundleItem: "exampleProductBundleItem",
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  stockUom: "exampleStockUom",
  temporaryName: "exampleTemporaryName",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  bomNo: "exampleBomNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includeExplodedItems: 42,
  itemCode: "exampleItemCode",
  itemReference: "exampleItemReference",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  orderedQty: 42.42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pendingQty: 42.42,
  plannedQty: 42.42,
  plannedStartDate: new Date(),
  producedQty: 42.42,
  productBundleItem: "exampleProductBundleItem",
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  stockUom: "exampleStockUom",
  temporaryName: "exampleTemporaryName",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    bomNo: "exampleBomNo",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    includeExplodedItems: 42,
    itemCode: "exampleItemCode",
    itemReference: "exampleItemReference",
    materialRequest: "exampleMaterialRequest",
    materialRequestItem: "exampleMaterialRequestItem",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    orderedQty: 42.42,
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    pendingQty: 42.42,
    plannedQty: 42.42,
    plannedStartDate: new Date(),
    producedQty: 42.42,
    productBundleItem: "exampleProductBundleItem",
    salesOrder: "exampleSalesOrder",
    salesOrderItem: "exampleSalesOrderItem",
    stockUom: "exampleStockUom",
    temporaryName: "exampleTemporaryName",
    updatedAt: new Date(),
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  bomNo: "exampleBomNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includeExplodedItems: 42,
  itemCode: "exampleItemCode",
  itemReference: "exampleItemReference",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  orderedQty: 42.42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pendingQty: 42.42,
  plannedQty: 42.42,
  plannedStartDate: new Date(),
  producedQty: 42.42,
  productBundleItem: "exampleProductBundleItem",
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  stockUom: "exampleStockUom",
  temporaryName: "exampleTemporaryName",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};

const service = {
  createProductionPlanItem() {
    return CREATE_RESULT;
  },
  productionPlanItems: () => FIND_MANY_RESULT,
  productionPlanItem: ({ where }: { where: { id: string } }) => {
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

describe("ProductionPlanItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductionPlanItemService,
          useValue: service,
        },
      ],
      controllers: [ProductionPlanItemController],
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

  test("POST /productionPlanItems", async () => {
    await request(app.getHttpServer())
      .post("/productionPlanItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        plannedStartDate: CREATE_RESULT.plannedStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /productionPlanItems", async () => {
    await request(app.getHttpServer())
      .get("/productionPlanItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          plannedStartDate: FIND_MANY_RESULT[0].plannedStartDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /productionPlanItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionPlanItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productionPlanItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionPlanItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        plannedStartDate: FIND_ONE_RESULT.plannedStartDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /productionPlanItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productionPlanItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        plannedStartDate: CREATE_RESULT.plannedStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/productionPlanItems")
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
