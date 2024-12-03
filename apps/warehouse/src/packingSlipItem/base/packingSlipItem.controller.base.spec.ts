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
import { PackingSlipItemController } from "../packingSlipItem.controller";
import { PackingSlipItemService } from "../packingSlipItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  dnDetail: "exampleDnDetail",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netWeight: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  piDetail: "examplePiDetail",
  qty: 42.42,
  stockUom: "exampleStockUom",
  updatedAt: new Date(),
  weightUom: "exampleWeightUom",
};
const CREATE_RESULT = {
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  dnDetail: "exampleDnDetail",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netWeight: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  piDetail: "examplePiDetail",
  qty: 42.42,
  stockUom: "exampleStockUom",
  updatedAt: new Date(),
  weightUom: "exampleWeightUom",
};
const FIND_MANY_RESULT = [
  {
    batchNo: "exampleBatchNo",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    dnDetail: "exampleDnDetail",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    netWeight: 42.42,
    owner: "exampleOwner",
    pageBreak: 42,
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    piDetail: "examplePiDetail",
    qty: 42.42,
    stockUom: "exampleStockUom",
    updatedAt: new Date(),
    weightUom: "exampleWeightUom",
  },
];
const FIND_ONE_RESULT = {
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  dnDetail: "exampleDnDetail",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netWeight: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  piDetail: "examplePiDetail",
  qty: 42.42,
  stockUom: "exampleStockUom",
  updatedAt: new Date(),
  weightUom: "exampleWeightUom",
};

const service = {
  createPackingSlipItem() {
    return CREATE_RESULT;
  },
  packingSlipItems: () => FIND_MANY_RESULT,
  packingSlipItem: ({ where }: { where: { id: string } }) => {
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

describe("PackingSlipItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PackingSlipItemService,
          useValue: service,
        },
      ],
      controllers: [PackingSlipItemController],
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

  test("POST /packingSlipItems", async () => {
    await request(app.getHttpServer())
      .post("/packingSlipItems")
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

  test("GET /packingSlipItems", async () => {
    await request(app.getHttpServer())
      .get("/packingSlipItems")
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

  test("GET /packingSlipItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/packingSlipItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /packingSlipItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/packingSlipItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /packingSlipItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/packingSlipItems")
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
          .post("/packingSlipItems")
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
