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
import { AssetCapitalizationController } from "../assetCapitalization.controller";
import { AssetCapitalizationService } from "../assetCapitalization.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  assetItemsTotal: 42.42,
  capitalizationMethod: "exampleCapitalizationMethod",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  entryType: "exampleEntryType",
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  serviceItemsTotal: 42.42,
  setPostingTime: 42,
  stockItemsTotal: 42.42,
  targetAsset: "exampleTargetAsset",
  targetAssetLocation: "exampleTargetAssetLocation",
  targetAssetName: "exampleTargetAssetName",
  targetBatchNo: "exampleTargetBatchNo",
  targetFixedAssetAccount: "exampleTargetFixedAssetAccount",
  targetHasBatchNo: 42,
  targetHasSerialNo: 42,
  targetIncomingRate: 42.42,
  targetIsFixedAsset: 42,
  targetItemCode: "exampleTargetItemCode",
  targetItemName: "exampleTargetItemName",
  targetQty: 42.42,
  targetSerialNo: "exampleTargetSerialNo",
  targetStockUom: "exampleTargetStockUom",
  targetWarehouse: "exampleTargetWarehouse",
  title: "exampleTitle",
  totalValue: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  assetItemsTotal: 42.42,
  capitalizationMethod: "exampleCapitalizationMethod",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  entryType: "exampleEntryType",
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  serviceItemsTotal: 42.42,
  setPostingTime: 42,
  stockItemsTotal: 42.42,
  targetAsset: "exampleTargetAsset",
  targetAssetLocation: "exampleTargetAssetLocation",
  targetAssetName: "exampleTargetAssetName",
  targetBatchNo: "exampleTargetBatchNo",
  targetFixedAssetAccount: "exampleTargetFixedAssetAccount",
  targetHasBatchNo: 42,
  targetHasSerialNo: 42,
  targetIncomingRate: 42.42,
  targetIsFixedAsset: 42,
  targetItemCode: "exampleTargetItemCode",
  targetItemName: "exampleTargetItemName",
  targetQty: 42.42,
  targetSerialNo: "exampleTargetSerialNo",
  targetStockUom: "exampleTargetStockUom",
  targetWarehouse: "exampleTargetWarehouse",
  title: "exampleTitle",
  totalValue: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    assetItemsTotal: 42.42,
    capitalizationMethod: "exampleCapitalizationMethod",
    company: "exampleCompany",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    entryType: "exampleEntryType",
    financeBook: "exampleFinanceBook",
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    postingDate: new Date(),
    postingTime: new Date(),
    serviceItemsTotal: 42.42,
    setPostingTime: 42,
    stockItemsTotal: 42.42,
    targetAsset: "exampleTargetAsset",
    targetAssetLocation: "exampleTargetAssetLocation",
    targetAssetName: "exampleTargetAssetName",
    targetBatchNo: "exampleTargetBatchNo",
    targetFixedAssetAccount: "exampleTargetFixedAssetAccount",
    targetHasBatchNo: 42,
    targetHasSerialNo: 42,
    targetIncomingRate: 42.42,
    targetIsFixedAsset: 42,
    targetItemCode: "exampleTargetItemCode",
    targetItemName: "exampleTargetItemName",
    targetQty: 42.42,
    targetSerialNo: "exampleTargetSerialNo",
    targetStockUom: "exampleTargetStockUom",
    targetWarehouse: "exampleTargetWarehouse",
    title: "exampleTitle",
    totalValue: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  assetItemsTotal: 42.42,
  capitalizationMethod: "exampleCapitalizationMethod",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  entryType: "exampleEntryType",
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  postingDate: new Date(),
  postingTime: new Date(),
  serviceItemsTotal: 42.42,
  setPostingTime: 42,
  stockItemsTotal: 42.42,
  targetAsset: "exampleTargetAsset",
  targetAssetLocation: "exampleTargetAssetLocation",
  targetAssetName: "exampleTargetAssetName",
  targetBatchNo: "exampleTargetBatchNo",
  targetFixedAssetAccount: "exampleTargetFixedAssetAccount",
  targetHasBatchNo: 42,
  targetHasSerialNo: 42,
  targetIncomingRate: 42.42,
  targetIsFixedAsset: 42,
  targetItemCode: "exampleTargetItemCode",
  targetItemName: "exampleTargetItemName",
  targetQty: 42.42,
  targetSerialNo: "exampleTargetSerialNo",
  targetStockUom: "exampleTargetStockUom",
  targetWarehouse: "exampleTargetWarehouse",
  title: "exampleTitle",
  totalValue: 42.42,
  updatedAt: new Date(),
};

const service = {
  createAssetCapitalization() {
    return CREATE_RESULT;
  },
  assetCapitalizations: () => FIND_MANY_RESULT,
  assetCapitalization: ({ where }: { where: { id: string } }) => {
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

describe("AssetCapitalization", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetCapitalizationService,
          useValue: service,
        },
      ],
      controllers: [AssetCapitalizationController],
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

  test("POST /assetCapitalizations", async () => {
    await request(app.getHttpServer())
      .post("/assetCapitalizations")
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

  test("GET /assetCapitalizations", async () => {
    await request(app.getHttpServer())
      .get("/assetCapitalizations")
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

  test("GET /assetCapitalizations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetCapitalizations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetCapitalizations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetCapitalizations"}/${existingId}`)
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

  test("POST /assetCapitalizations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetCapitalizations")
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
          .post("/assetCapitalizations")
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
