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
import { BomCreatorItemController } from "../bomCreatorItem.controller";
import { BomCreatorItemService } from "../bomCreatorItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  baseAmount: 42.42,
  baseRate: 42.42,
  bomCreated: "true",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  doNotExplode: "true",
  docstatus: 42,
  fgItem: "exampleFgItem",
  fgReferenceId: "exampleFgReferenceId",
  id: "exampleId",
  idx: 42,
  instruction: "exampleInstruction",
  isExpandable: "true",
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentRowNo: "exampleParentRowNo",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  rate: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  sourcedBySupplier: "true",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.42,
  baseAmount: 42.42,
  baseRate: 42.42,
  bomCreated: "true",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  doNotExplode: "true",
  docstatus: 42,
  fgItem: "exampleFgItem",
  fgReferenceId: "exampleFgReferenceId",
  id: "exampleId",
  idx: 42,
  instruction: "exampleInstruction",
  isExpandable: "true",
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentRowNo: "exampleParentRowNo",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
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
    amount: 42.42,
    baseAmount: 42.42,
    baseRate: 42.42,
    bomCreated: "true",
    conversionFactor: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    doNotExplode: "true",
    docstatus: 42,
    fgItem: "exampleFgItem",
    fgReferenceId: "exampleFgReferenceId",
    id: "exampleId",
    idx: 42,
    instruction: "exampleInstruction",
    isExpandable: "true",
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentRowNo: "exampleParentRowNo",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    qty: 42.42,
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
  amount: 42.42,
  baseAmount: 42.42,
  baseRate: 42.42,
  bomCreated: "true",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  doNotExplode: "true",
  docstatus: 42,
  fgItem: "exampleFgItem",
  fgReferenceId: "exampleFgReferenceId",
  id: "exampleId",
  idx: 42,
  instruction: "exampleInstruction",
  isExpandable: "true",
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentRowNo: "exampleParentRowNo",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  rate: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  sourcedBySupplier: "true",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  uom: "exampleUom",
  updatedAt: new Date(),
};

const service = {
  createBomCreatorItem() {
    return CREATE_RESULT;
  },
  bomCreatorItems: () => FIND_MANY_RESULT,
  bomCreatorItem: ({ where }: { where: { id: string } }) => {
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

describe("BomCreatorItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BomCreatorItemService,
          useValue: service,
        },
      ],
      controllers: [BomCreatorItemController],
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

  test("POST /bomCreatorItems", async () => {
    await request(app.getHttpServer())
      .post("/bomCreatorItems")
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

  test("GET /bomCreatorItems", async () => {
    await request(app.getHttpServer())
      .get("/bomCreatorItems")
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

  test("GET /bomCreatorItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomCreatorItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bomCreatorItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomCreatorItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bomCreatorItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bomCreatorItems")
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
          .post("/bomCreatorItems")
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
