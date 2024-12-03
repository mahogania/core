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
import { AssetValueAdjustmentController } from "../assetValueAdjustment.controller";
import { AssetValueAdjustmentService } from "../assetValueAdjustment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  assetCategory: "exampleAssetCategory",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currentAssetValue: 42.42,
  date: new Date(),
  differenceAmount: 42.42,
  docstatus: 42,
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  journalEntry: "exampleJournalEntry",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  newAssetValue: 42.42,
  owner: "exampleOwner",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  assetCategory: "exampleAssetCategory",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currentAssetValue: 42.42,
  date: new Date(),
  differenceAmount: 42.42,
  docstatus: 42,
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  journalEntry: "exampleJournalEntry",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  newAssetValue: 42.42,
  owner: "exampleOwner",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    asset: "exampleAsset",
    assetCategory: "exampleAssetCategory",
    company: "exampleCompany",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    currentAssetValue: 42.42,
    date: new Date(),
    differenceAmount: 42.42,
    docstatus: 42,
    financeBook: "exampleFinanceBook",
    id: "exampleId",
    idx: 42,
    journalEntry: "exampleJournalEntry",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    newAssetValue: 42.42,
    owner: "exampleOwner",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  assetCategory: "exampleAssetCategory",
  company: "exampleCompany",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  currentAssetValue: 42.42,
  date: new Date(),
  differenceAmount: 42.42,
  docstatus: 42,
  financeBook: "exampleFinanceBook",
  id: "exampleId",
  idx: 42,
  journalEntry: "exampleJournalEntry",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  newAssetValue: 42.42,
  owner: "exampleOwner",
  updatedAt: new Date(),
};

const service = {
  createAssetValueAdjustment() {
    return CREATE_RESULT;
  },
  assetValueAdjustments: () => FIND_MANY_RESULT,
  assetValueAdjustment: ({ where }: { where: { id: string } }) => {
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

describe("AssetValueAdjustment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetValueAdjustmentService,
          useValue: service,
        },
      ],
      controllers: [AssetValueAdjustmentController],
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

  test("POST /assetValueAdjustments", async () => {
    await request(app.getHttpServer())
      .post("/assetValueAdjustments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /assetValueAdjustments", async () => {
    await request(app.getHttpServer())
      .get("/assetValueAdjustments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /assetValueAdjustments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetValueAdjustments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetValueAdjustments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetValueAdjustments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetValueAdjustments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetValueAdjustments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetValueAdjustments")
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
