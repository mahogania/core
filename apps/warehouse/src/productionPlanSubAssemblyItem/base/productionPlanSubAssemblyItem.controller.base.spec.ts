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
import { ProductionPlanSubAssemblyItemController } from "../productionPlanSubAssemblyItem.controller";
import { ProductionPlanSubAssemblyItemService } from "../productionPlanSubAssemblyItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  bomLevel: 42,
  bomNo: "exampleBomNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  fgWarehouse: "exampleFgWarehouse",
  id: "exampleId",
  idx: 42,
  indent: 42,
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentItemCode: "exampleParentItemCode",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  productionItem: "exampleProductionItem",
  productionPlanItem: "exampleProductionPlanItem",
  projectedQty: 42.42,
  purchaseOrder: "examplePurchaseOrder",
  qty: 42.42,
  receivedQty: 42.42,
  scheduleDate: new Date(),
  stockUom: "exampleStockUom",
  supplier: "exampleSupplier",
  typeOfManufacturing: "exampleTypeOfManufacturing",
  uom: "exampleUom",
  updatedAt: new Date(),
  woProducedQty: 42.42,
};
const CREATE_RESULT = {
  actualQty: 42.42,
  bomLevel: 42,
  bomNo: "exampleBomNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  fgWarehouse: "exampleFgWarehouse",
  id: "exampleId",
  idx: 42,
  indent: 42,
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentItemCode: "exampleParentItemCode",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  productionItem: "exampleProductionItem",
  productionPlanItem: "exampleProductionPlanItem",
  projectedQty: 42.42,
  purchaseOrder: "examplePurchaseOrder",
  qty: 42.42,
  receivedQty: 42.42,
  scheduleDate: new Date(),
  stockUom: "exampleStockUom",
  supplier: "exampleSupplier",
  typeOfManufacturing: "exampleTypeOfManufacturing",
  uom: "exampleUom",
  updatedAt: new Date(),
  woProducedQty: 42.42,
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    bomLevel: 42,
    bomNo: "exampleBomNo",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    fgWarehouse: "exampleFgWarehouse",
    id: "exampleId",
    idx: 42,
    indent: 42,
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentItemCode: "exampleParentItemCode",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    productionItem: "exampleProductionItem",
    productionPlanItem: "exampleProductionPlanItem",
    projectedQty: 42.42,
    purchaseOrder: "examplePurchaseOrder",
    qty: 42.42,
    receivedQty: 42.42,
    scheduleDate: new Date(),
    stockUom: "exampleStockUom",
    supplier: "exampleSupplier",
    typeOfManufacturing: "exampleTypeOfManufacturing",
    uom: "exampleUom",
    updatedAt: new Date(),
    woProducedQty: 42.42,
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  bomLevel: 42,
  bomNo: "exampleBomNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  fgWarehouse: "exampleFgWarehouse",
  id: "exampleId",
  idx: 42,
  indent: 42,
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentItemCode: "exampleParentItemCode",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  productionItem: "exampleProductionItem",
  productionPlanItem: "exampleProductionPlanItem",
  projectedQty: 42.42,
  purchaseOrder: "examplePurchaseOrder",
  qty: 42.42,
  receivedQty: 42.42,
  scheduleDate: new Date(),
  stockUom: "exampleStockUom",
  supplier: "exampleSupplier",
  typeOfManufacturing: "exampleTypeOfManufacturing",
  uom: "exampleUom",
  updatedAt: new Date(),
  woProducedQty: 42.42,
};

const service = {
  createProductionPlanSubAssemblyItem() {
    return CREATE_RESULT;
  },
  productionPlanSubAssemblyItems: () => FIND_MANY_RESULT,
  productionPlanSubAssemblyItem: ({ where }: { where: { id: string } }) => {
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

describe("ProductionPlanSubAssemblyItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductionPlanSubAssemblyItemService,
          useValue: service,
        },
      ],
      controllers: [ProductionPlanSubAssemblyItemController],
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

  test("POST /productionPlanSubAssemblyItems", async () => {
    await request(app.getHttpServer())
      .post("/productionPlanSubAssemblyItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /productionPlanSubAssemblyItems", async () => {
    await request(app.getHttpServer())
      .get("/productionPlanSubAssemblyItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          scheduleDate: FIND_MANY_RESULT[0].scheduleDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /productionPlanSubAssemblyItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionPlanSubAssemblyItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productionPlanSubAssemblyItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionPlanSubAssemblyItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        scheduleDate: FIND_ONE_RESULT.scheduleDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /productionPlanSubAssemblyItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productionPlanSubAssemblyItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/productionPlanSubAssemblyItems")
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
