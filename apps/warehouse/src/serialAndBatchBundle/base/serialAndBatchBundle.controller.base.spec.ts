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
import { SerialAndBatchBundleController } from "../serialAndBatchBundle.controller";
import { SerialAndBatchBundleService } from "../serialAndBatchBundle.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  avgRate: 42.42,
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  hasBatchNo: 42,
  hasSerialNo: 42,
  id: "exampleId",
  idx: 42,
  isCancelled: 42,
  isRejected: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  returnedAgainst: "exampleReturnedAgainst",
  totalAmount: 42.42,
  totalQty: 42.42,
  typeOfTransaction: "exampleTypeOfTransaction",
  updatedAt: new Date(),
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  avgRate: 42.42,
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  hasBatchNo: 42,
  hasSerialNo: 42,
  id: "exampleId",
  idx: 42,
  isCancelled: 42,
  isRejected: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  returnedAgainst: "exampleReturnedAgainst",
  totalAmount: 42.42,
  totalQty: 42.42,
  typeOfTransaction: "exampleTypeOfTransaction",
  updatedAt: new Date(),
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    avgRate: 42.42,
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    hasBatchNo: 42,
    hasSerialNo: 42,
    id: "exampleId",
    idx: 42,
    isCancelled: 42,
    isRejected: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    postingDate: new Date(),
    postingTime: new Date(),
    returnedAgainst: "exampleReturnedAgainst",
    totalAmount: 42.42,
    totalQty: 42.42,
    typeOfTransaction: "exampleTypeOfTransaction",
    updatedAt: new Date(),
    voucherDetailNo: "exampleVoucherDetailNo",
    voucherNo: "exampleVoucherNo",
    voucherType: "exampleVoucherType",
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  avgRate: 42.42,
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  hasBatchNo: 42,
  hasSerialNo: 42,
  id: "exampleId",
  idx: 42,
  isCancelled: 42,
  isRejected: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  returnedAgainst: "exampleReturnedAgainst",
  totalAmount: 42.42,
  totalQty: 42.42,
  typeOfTransaction: "exampleTypeOfTransaction",
  updatedAt: new Date(),
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
  warehouse: "exampleWarehouse",
};

const service = {
  createSerialAndBatchBundle() {
    return CREATE_RESULT;
  },
  serialAndBatchBundles: () => FIND_MANY_RESULT,
  serialAndBatchBundle: ({ where }: { where: { id: string } }) => {
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

describe("SerialAndBatchBundle", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SerialAndBatchBundleService,
          useValue: service,
        },
      ],
      controllers: [SerialAndBatchBundleController],
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

  test("POST /serialAndBatchBundles", async () => {
    await request(app.getHttpServer())
      .post("/serialAndBatchBundles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /serialAndBatchBundles", async () => {
    await request(app.getHttpServer())
      .get("/serialAndBatchBundles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          postingTime: FIND_MANY_RESULT[0].postingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /serialAndBatchBundles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serialAndBatchBundles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /serialAndBatchBundles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serialAndBatchBundles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        postingTime: FIND_ONE_RESULT.postingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /serialAndBatchBundles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/serialAndBatchBundles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/serialAndBatchBundles")
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
