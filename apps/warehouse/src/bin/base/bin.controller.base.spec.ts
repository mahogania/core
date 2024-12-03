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
import { BinController } from "../bin.controller";
import { BinService } from "../bin.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  indentedQty: 42.42,
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  orderedQty: 42.42,
  owner: "exampleOwner",
  plannedQty: 42.42,
  projectedQty: 42.42,
  reservedQty: 42.42,
  reservedQtyForProduction: 42.42,
  reservedQtyForProductionPlan: 42.42,
  reservedQtyForSubContract: 42.42,
  reservedStock: 42.42,
  stockUom: "exampleStockUom",
  stockValue: 42.42,
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  actualQty: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  indentedQty: 42.42,
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  orderedQty: 42.42,
  owner: "exampleOwner",
  plannedQty: 42.42,
  projectedQty: 42.42,
  reservedQty: 42.42,
  reservedQtyForProduction: 42.42,
  reservedQtyForProductionPlan: 42.42,
  reservedQtyForSubContract: 42.42,
  reservedStock: 42.42,
  stockUom: "exampleStockUom",
  stockValue: 42.42,
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    indentedQty: 42.42,
    itemCode: "exampleItemCode",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    orderedQty: 42.42,
    owner: "exampleOwner",
    plannedQty: 42.42,
    projectedQty: 42.42,
    reservedQty: 42.42,
    reservedQtyForProduction: 42.42,
    reservedQtyForProductionPlan: 42.42,
    reservedQtyForSubContract: 42.42,
    reservedStock: 42.42,
    stockUom: "exampleStockUom",
    stockValue: 42.42,
    updatedAt: new Date(),
    valuationRate: 42.42,
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  indentedQty: 42.42,
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  orderedQty: 42.42,
  owner: "exampleOwner",
  plannedQty: 42.42,
  projectedQty: 42.42,
  reservedQty: 42.42,
  reservedQtyForProduction: 42.42,
  reservedQtyForProductionPlan: 42.42,
  reservedQtyForSubContract: 42.42,
  reservedStock: 42.42,
  stockUom: "exampleStockUom",
  stockValue: 42.42,
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
};

const service = {
  createBin() {
    return CREATE_RESULT;
  },
  bins: () => FIND_MANY_RESULT,
  bin: ({ where }: { where: { id: string } }) => {
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

describe("Bin", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BinService,
          useValue: service,
        },
      ],
      controllers: [BinController],
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

  test("POST /bins", async () => {
    await request(app.getHttpServer())
      .post("/bins")
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

  test("GET /bins", async () => {
    await request(app.getHttpServer())
      .get("/bins")
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

  test("GET /bins/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bins"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bins/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bins"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bins existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bins")
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
          .post("/bins")
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
