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
import { StockLedgerEntryController } from "../stockLedgerEntry.controller";
import { StockLedgerEntryService } from "../stockLedgerEntry.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  autoCreatedSerialAndBatchBundle: "true",
  batchNo: "exampleBatchNo",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  dependantSleVoucherDetailNo: "exampleDependantSleVoucherDetailNo",
  docstatus: 42,
  fiscalYear: "exampleFiscalYear",
  hasBatchNo: "true",
  hasSerialNo: "true",
  id: "exampleId",
  idx: 42,
  incomingRate: 42.42,
  isAdjustmentEntry: "true",
  isCancelled: "true",
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  outgoingRate: 42.42,
  owner: "exampleOwner",
  postingDate: new Date(),
  postingDatetime: new Date(),
  postingTime: new Date(),
  project: "exampleProject",
  qtyAfterTransaction: 42.42,
  recalculateRate: "true",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQueue: "exampleStockQueue",
  stockUom: "exampleStockUom",
  stockValue: 42.42,
  stockValueDifference: 42.42,
  toRename: "true",
  updatedAt: new Date(),
  valuationRate: 42.42,
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
  warehouse: "exampleWarehouse",
};
const CREATE_RESULT = {
  actualQty: 42.42,
  autoCreatedSerialAndBatchBundle: "true",
  batchNo: "exampleBatchNo",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  dependantSleVoucherDetailNo: "exampleDependantSleVoucherDetailNo",
  docstatus: 42,
  fiscalYear: "exampleFiscalYear",
  hasBatchNo: "true",
  hasSerialNo: "true",
  id: "exampleId",
  idx: 42,
  incomingRate: 42.42,
  isAdjustmentEntry: "true",
  isCancelled: "true",
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  outgoingRate: 42.42,
  owner: "exampleOwner",
  postingDate: new Date(),
  postingDatetime: new Date(),
  postingTime: new Date(),
  project: "exampleProject",
  qtyAfterTransaction: 42.42,
  recalculateRate: "true",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQueue: "exampleStockQueue",
  stockUom: "exampleStockUom",
  stockValue: 42.42,
  stockValueDifference: 42.42,
  toRename: "true",
  updatedAt: new Date(),
  valuationRate: 42.42,
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
  warehouse: "exampleWarehouse",
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    autoCreatedSerialAndBatchBundle: "true",
    batchNo: "exampleBatchNo",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    dependantSleVoucherDetailNo: "exampleDependantSleVoucherDetailNo",
    docstatus: 42,
    fiscalYear: "exampleFiscalYear",
    hasBatchNo: "true",
    hasSerialNo: "true",
    id: "exampleId",
    idx: 42,
    incomingRate: 42.42,
    isAdjustmentEntry: "true",
    isCancelled: "true",
    itemCode: "exampleItemCode",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    outgoingRate: 42.42,
    owner: "exampleOwner",
    postingDate: new Date(),
    postingDatetime: new Date(),
    postingTime: new Date(),
    project: "exampleProject",
    qtyAfterTransaction: 42.42,
    recalculateRate: "true",
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    stockQueue: "exampleStockQueue",
    stockUom: "exampleStockUom",
    stockValue: 42.42,
    stockValueDifference: 42.42,
    toRename: "true",
    updatedAt: new Date(),
    valuationRate: 42.42,
    voucherDetailNo: "exampleVoucherDetailNo",
    voucherNo: "exampleVoucherNo",
    voucherType: "exampleVoucherType",
    warehouse: "exampleWarehouse",
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  autoCreatedSerialAndBatchBundle: "true",
  batchNo: "exampleBatchNo",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  dependantSleVoucherDetailNo: "exampleDependantSleVoucherDetailNo",
  docstatus: 42,
  fiscalYear: "exampleFiscalYear",
  hasBatchNo: "true",
  hasSerialNo: "true",
  id: "exampleId",
  idx: 42,
  incomingRate: 42.42,
  isAdjustmentEntry: "true",
  isCancelled: "true",
  itemCode: "exampleItemCode",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  outgoingRate: 42.42,
  owner: "exampleOwner",
  postingDate: new Date(),
  postingDatetime: new Date(),
  postingTime: new Date(),
  project: "exampleProject",
  qtyAfterTransaction: 42.42,
  recalculateRate: "true",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQueue: "exampleStockQueue",
  stockUom: "exampleStockUom",
  stockValue: 42.42,
  stockValueDifference: 42.42,
  toRename: "true",
  updatedAt: new Date(),
  valuationRate: 42.42,
  voucherDetailNo: "exampleVoucherDetailNo",
  voucherNo: "exampleVoucherNo",
  voucherType: "exampleVoucherType",
  warehouse: "exampleWarehouse",
};

const service = {
  createStockLedgerEntry() {
    return CREATE_RESULT;
  },
  stockLedgerEntries: () => FIND_MANY_RESULT,
  stockLedgerEntry: ({ where }: { where: { id: string } }) => {
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

describe("StockLedgerEntry", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StockLedgerEntryService,
          useValue: service,
        },
      ],
      controllers: [StockLedgerEntryController],
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

  test("POST /stockLedgerEntries", async () => {
    await request(app.getHttpServer())
      .post("/stockLedgerEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingDatetime: CREATE_RESULT.postingDatetime.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stockLedgerEntries", async () => {
    await request(app.getHttpServer())
      .get("/stockLedgerEntries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          postingDate: FIND_MANY_RESULT[0].postingDate.toISOString(),
          postingDatetime: FIND_MANY_RESULT[0].postingDatetime.toISOString(),
          postingTime: FIND_MANY_RESULT[0].postingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stockLedgerEntries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockLedgerEntries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stockLedgerEntries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockLedgerEntries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        postingDate: FIND_ONE_RESULT.postingDate.toISOString(),
        postingDatetime: FIND_ONE_RESULT.postingDatetime.toISOString(),
        postingTime: FIND_ONE_RESULT.postingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stockLedgerEntries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stockLedgerEntries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        postingDate: CREATE_RESULT.postingDate.toISOString(),
        postingDatetime: CREATE_RESULT.postingDatetime.toISOString(),
        postingTime: CREATE_RESULT.postingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stockLedgerEntries")
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
