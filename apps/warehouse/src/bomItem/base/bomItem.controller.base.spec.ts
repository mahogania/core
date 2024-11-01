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
import { BomItemController } from "../bomItem.controller";
import { BomItemService } from "../bomItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowAlternativeItem: "true",
  amount: 42.42,
  baseAmount: 42.42,
  baseRate: 42.42,
  bomNo: "exampleBomNo",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  doNotExplode: "true",
  docstatus: 42,
  hasVariants: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeItemInManufacturing: "true",
  isStockItem: "true",
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operation: "exampleOperation",
  originalItem: "exampleOriginalItem",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  qtyConsumedPerUnit: 42.42,
  rate: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  sourcedBySupplier: "true",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  allowAlternativeItem: "true",
  amount: 42.42,
  baseAmount: 42.42,
  baseRate: 42.42,
  bomNo: "exampleBomNo",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  doNotExplode: "true",
  docstatus: 42,
  hasVariants: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeItemInManufacturing: "true",
  isStockItem: "true",
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operation: "exampleOperation",
  originalItem: "exampleOriginalItem",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  qtyConsumedPerUnit: 42.42,
  rate: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  sourcedBySupplier: "true",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    allowAlternativeItem: "true",
    amount: 42.42,
    baseAmount: 42.42,
    baseRate: 42.42,
    bomNo: "exampleBomNo",
    conversionFactor: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    doNotExplode: "true",
    docstatus: 42,
    hasVariants: "true",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    includeItemInManufacturing: "true",
    isStockItem: "true",
    itemCode: "exampleItemCode",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    operation: "exampleOperation",
    originalItem: "exampleOriginalItem",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    qty: 42.42,
    qtyConsumedPerUnit: 42.42,
    rate: 42.42,
    sourceWarehouse: "exampleSourceWarehouse",
    sourcedBySupplier: "true",
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    uom: "exampleUom",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  allowAlternativeItem: "true",
  amount: 42.42,
  baseAmount: 42.42,
  baseRate: 42.42,
  bomNo: "exampleBomNo",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  doNotExplode: "true",
  docstatus: 42,
  hasVariants: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeItemInManufacturing: "true",
  isStockItem: "true",
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operation: "exampleOperation",
  originalItem: "exampleOriginalItem",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  qtyConsumedPerUnit: 42.42,
  rate: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  sourcedBySupplier: "true",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
};

const service = {
  createBomItem() {
    return CREATE_RESULT;
  },
  bomItems: () => FIND_MANY_RESULT,
  bomItem: ({ where }: { where: { id: string } }) => {
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

describe("BomItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BomItemService,
          useValue: service,
        },
      ],
      controllers: [BomItemController],
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

  test("POST /bomItems", async () => {
    await request(app.getHttpServer())
      .post("/bomItems")
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

  test("GET /bomItems", async () => {
    await request(app.getHttpServer())
      .get("/bomItems")
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

  test("GET /bomItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bomItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bomItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bomItems")
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
          .post("/bomItems")
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
