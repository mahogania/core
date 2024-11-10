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
import { SerialAndBatchEntryController } from "../serialAndBatchEntry.controller";
import { SerialAndBatchEntryService } from "../serialAndBatchEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  deliveredQty: 42.42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  incomingRate: 42.42,
  isOutward: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  outgoingRate: 42.42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  serialNo: "exampleSerialNo",
  stockQueue: "exampleStockQueue",
  stockValueDifference: 42.42,
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  deliveredQty: 42.42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  incomingRate: 42.42,
  isOutward: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  outgoingRate: 42.42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  serialNo: "exampleSerialNo",
  stockQueue: "exampleStockQueue",
  stockValueDifference: 42.42,
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    batchNo: "exampleBatchNo",
    createdAt: new Date(),
    creation: new Date(),
    deliveredQty: 42.42,
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    incomingRate: 42.42,
    isOutward: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    outgoingRate: 42.42,
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    qty: 42.42,
    serialNo: "exampleSerialNo",
    stockQueue: "exampleStockQueue",
    stockValueDifference: 42.42,
    updatedAt: new Date(),
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  batchNo: "exampleBatchNo",
  createdAt: new Date(),
  creation: new Date(),
  deliveredQty: 42.42,
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  incomingRate: 42.42,
  isOutward: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  outgoingRate: 42.42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qty: 42.42,
  serialNo: "exampleSerialNo",
  stockQueue: "exampleStockQueue",
  stockValueDifference: 42.42,
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
};

const service = {
  createSerialAndBatchEntry() {
    return CREATE_RESULT;
  },
  serialAndBatchEntries: () => FIND_MANY_RESULT,
  serialAndBatchEntry: ({ where }: { where: { id: string } }) => {
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

describe("SerialAndBatchEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SerialAndBatchEntryService,
          useValue: service,
        },
      ],
      controllers: [SerialAndBatchEntryController],
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

  test("POST /serialAndBatchEntries", async () => {
    await request(app.getHttpServer())
      .post("/serialAndBatchEntries")
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

  test("GET /serialAndBatchEntries", async () => {
    await request(app.getHttpServer())
      .get("/serialAndBatchEntries")
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

  test("GET /serialAndBatchEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serialAndBatchEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /serialAndBatchEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serialAndBatchEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /serialAndBatchEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/serialAndBatchEntries")
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
          .post("/serialAndBatchEntries")
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
