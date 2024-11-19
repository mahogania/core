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
import { ProductionPlanController } from "../productionPlan.controller";
import { ProductionPlanService } from "../productionPlan.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  combineItems: 42,
  combineSubItems: 42,
  company: "exampleCompany",
  considerMinimumOrderQty: 42,
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  docstatus: 42,
  forWarehouse: "exampleForWarehouse",
  fromDate: new Date(),
  fromDeliveryDate: new Date(),
  getItemsFrom: "exampleGetItemsFrom",
  id: "exampleId",
  idx: 42,
  ignoreExistingOrderedQty: 42,
  includeNonStockItems: 42,
  includeSafetyStock: 42,
  includeSubcontractedItems: 42,
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  project: "exampleProject",
  salesOrderStatus: "exampleSalesOrderStatus",
  skipAvailableSubAssemblyItem: 42,
  status: "exampleStatus",
  subAssemblyWarehouse: "exampleSubAssemblyWarehouse",
  toDate: new Date(),
  toDeliveryDate: new Date(),
  totalPlannedQty: 42.42,
  totalProducedQty: 42.42,
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  combineItems: 42,
  combineSubItems: 42,
  company: "exampleCompany",
  considerMinimumOrderQty: 42,
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  docstatus: 42,
  forWarehouse: "exampleForWarehouse",
  fromDate: new Date(),
  fromDeliveryDate: new Date(),
  getItemsFrom: "exampleGetItemsFrom",
  id: "exampleId",
  idx: 42,
  ignoreExistingOrderedQty: 42,
  includeNonStockItems: 42,
  includeSafetyStock: 42,
  includeSubcontractedItems: 42,
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  project: "exampleProject",
  salesOrderStatus: "exampleSalesOrderStatus",
  skipAvailableSubAssemblyItem: 42,
  status: "exampleStatus",
  subAssemblyWarehouse: "exampleSubAssemblyWarehouse",
  toDate: new Date(),
  toDeliveryDate: new Date(),
  totalPlannedQty: 42.42,
  totalProducedQty: 42.42,
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    combineItems: 42,
    combineSubItems: 42,
    company: "exampleCompany",
    considerMinimumOrderQty: 42,
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    docstatus: 42,
    forWarehouse: "exampleForWarehouse",
    fromDate: new Date(),
    fromDeliveryDate: new Date(),
    getItemsFrom: "exampleGetItemsFrom",
    id: "exampleId",
    idx: 42,
    ignoreExistingOrderedQty: 42,
    includeNonStockItems: 42,
    includeSafetyStock: 42,
    includeSubcontractedItems: 42,
    itemCode: "exampleItemCode",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    postingDate: new Date(),
    project: "exampleProject",
    salesOrderStatus: "exampleSalesOrderStatus",
    skipAvailableSubAssemblyItem: 42,
    status: "exampleStatus",
    subAssemblyWarehouse: "exampleSubAssemblyWarehouse",
    toDate: new Date(),
    toDeliveryDate: new Date(),
    totalPlannedQty: 42.42,
    totalProducedQty: 42.42,
    updatedAt: new Date(),
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  combineItems: 42,
  combineSubItems: 42,
  company: "exampleCompany",
  considerMinimumOrderQty: 42,
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  docstatus: 42,
  forWarehouse: "exampleForWarehouse",
  fromDate: new Date(),
  fromDeliveryDate: new Date(),
  getItemsFrom: "exampleGetItemsFrom",
  id: "exampleId",
  idx: 42,
  ignoreExistingOrderedQty: 42,
  includeNonStockItems: 42,
  includeSafetyStock: 42,
  includeSubcontractedItems: 42,
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  project: "exampleProject",
  salesOrderStatus: "exampleSalesOrderStatus",
  skipAvailableSubAssemblyItem: 42,
  status: "exampleStatus",
  subAssemblyWarehouse: "exampleSubAssemblyWarehouse",
  toDate: new Date(),
  toDeliveryDate: new Date(),
  totalPlannedQty: 42.42,
  totalProducedQty: 42.42,
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};

const service = {
  createProductionPlan() {
    return CREATE_RESULT;
  },
  productionPlans: () => FIND_MANY_RESULT,
  productionPlan: ({ where }: { where: { id: string } }) => {
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

describe("ProductionPlan", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductionPlanService,
          useValue: service,
        },
      ],
      controllers: [ProductionPlanController],
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

  test("POST /productionPlans", async () => {
    await request(app.getHttpServer())
      .post("/productionPlans")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        fromDeliveryDate: CREATE_RESULT.fromDeliveryDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        toDeliveryDate: CREATE_RESULT.toDeliveryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /productionPlans", async () => {
    await request(app.getHttpServer())
      .get("/productionPlans")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          fromDeliveryDate: FIND_MANY_RESULT[0].fromDeliveryDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          toDeliveryDate: FIND_MANY_RESULT[0].toDeliveryDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /productionPlans/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionPlans"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productionPlans/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productionPlans"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        fromDeliveryDate: FIND_ONE_RESULT.fromDeliveryDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        toDeliveryDate: FIND_ONE_RESULT.toDeliveryDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /productionPlans existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productionPlans")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        fromDeliveryDate: CREATE_RESULT.fromDeliveryDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        toDeliveryDate: CREATE_RESULT.toDeliveryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/productionPlans")
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
