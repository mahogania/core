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
import { JobCardItemController } from "../jobCardItem.controller";
import { JobCardItemService } from "../jobCardItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowAlternativeItem: 42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
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
  requiredQty: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  stockUom: "exampleStockUom",
  transferredQty: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  allowAlternativeItem: 42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
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
  requiredQty: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  stockUom: "exampleStockUom",
  transferredQty: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    allowAlternativeItem: 42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
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
    requiredQty: 42.42,
    sourceWarehouse: "exampleSourceWarehouse",
    stockUom: "exampleStockUom",
    transferredQty: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  allowAlternativeItem: 42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
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
  requiredQty: 42.42,
  sourceWarehouse: "exampleSourceWarehouse",
  stockUom: "exampleStockUom",
  transferredQty: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
};

const service = {
  createJobCardItem() {
    return CREATE_RESULT;
  },
  jobCardItems: () => FIND_MANY_RESULT,
  jobCardItem: ({ where }: { where: { id: string } }) => {
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

describe("JobCardItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JobCardItemService,
          useValue: service,
        },
      ],
      controllers: [JobCardItemController],
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

  test("POST /jobCardItems", async () => {
    await request(app.getHttpServer())
      .post("/jobCardItems")
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

  test("GET /jobCardItems", async () => {
    await request(app.getHttpServer())
      .get("/jobCardItems")
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

  test("GET /jobCardItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobCardItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /jobCardItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobCardItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /jobCardItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/jobCardItems")
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
          .post("/jobCardItems")
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
