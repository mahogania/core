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
import { BatchController } from "../batch.controller";
import { BatchService } from "../batch.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  batchId: "exampleBatchId",
  batchQty: 42.42,
  createdAt: new Date(),
  description: "exampleDescription",
  disabled: 42,
  docstatus: 42,
  expiryDate: new Date(),
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  item: "exampleItem",
  itemName: "exampleItemName",
  manufacturingDate: new Date(),
  owner: "exampleOwner",
  parentBatch: "exampleParentBatch",
  producedQty: 42.42,
  qtyToProduce: 42.42,
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  stockUom: "exampleStockUom",
  supplier: "exampleSupplier",
  updatedAt: new Date(),
  useBatchwiseValuation: 42,
};
const CREATE_RESULT = {
  batchId: "exampleBatchId",
  batchQty: 42.42,
  createdAt: new Date(),
  description: "exampleDescription",
  disabled: 42,
  docstatus: 42,
  expiryDate: new Date(),
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  item: "exampleItem",
  itemName: "exampleItemName",
  manufacturingDate: new Date(),
  owner: "exampleOwner",
  parentBatch: "exampleParentBatch",
  producedQty: 42.42,
  qtyToProduce: 42.42,
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  stockUom: "exampleStockUom",
  supplier: "exampleSupplier",
  updatedAt: new Date(),
  useBatchwiseValuation: 42,
};
const FIND_MANY_RESULT = [
  {
    batchId: "exampleBatchId",
    batchQty: 42.42,
    createdAt: new Date(),
    description: "exampleDescription",
    disabled: 42,
    docstatus: 42,
    expiryDate: new Date(),
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    item: "exampleItem",
    itemName: "exampleItemName",
    manufacturingDate: new Date(),
    owner: "exampleOwner",
    parentBatch: "exampleParentBatch",
    producedQty: 42.42,
    qtyToProduce: 42.42,
    referenceDoctype: "exampleReferenceDoctype",
    referenceName: "exampleReferenceName",
    stockUom: "exampleStockUom",
    supplier: "exampleSupplier",
    updatedAt: new Date(),
    useBatchwiseValuation: 42,
  },
];
const FIND_ONE_RESULT = {
  batchId: "exampleBatchId",
  batchQty: 42.42,
  createdAt: new Date(),
  description: "exampleDescription",
  disabled: 42,
  docstatus: 42,
  expiryDate: new Date(),
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  item: "exampleItem",
  itemName: "exampleItemName",
  manufacturingDate: new Date(),
  owner: "exampleOwner",
  parentBatch: "exampleParentBatch",
  producedQty: 42.42,
  qtyToProduce: 42.42,
  referenceDoctype: "exampleReferenceDoctype",
  referenceName: "exampleReferenceName",
  stockUom: "exampleStockUom",
  supplier: "exampleSupplier",
  updatedAt: new Date(),
  useBatchwiseValuation: 42,
};

const service = {
  createBatch() {
    return CREATE_RESULT;
  },
  batches: () => FIND_MANY_RESULT,
  batch: ({ where }: { where: { id: string } }) => {
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

describe("Batch", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BatchService,
          useValue: service,
        },
      ],
      controllers: [BatchController],
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

  test("POST /batches", async () => {
    await request(app.getHttpServer())
      .post("/batches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        manufacturingDate: CREATE_RESULT.manufacturingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /batches", async () => {
    await request(app.getHttpServer())
      .get("/batches")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
          manufacturingDate:
            FIND_MANY_RESULT[0].manufacturingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /batches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/batches"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /batches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/batches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
        manufacturingDate: FIND_ONE_RESULT.manufacturingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /batches existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/batches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        manufacturingDate: CREATE_RESULT.manufacturingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/batches")
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
