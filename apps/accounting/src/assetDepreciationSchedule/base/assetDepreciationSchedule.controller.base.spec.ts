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
import { AssetDepreciationScheduleController } from "../assetDepreciationSchedule.controller";
import { AssetDepreciationScheduleService } from "../assetDepreciationSchedule.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  dailyProrataBased: 42,
  depreciationMethod: "exampleDepreciationMethod",
  docstatus: 42,
  expectedValueAfterUsefulLife: 42.42,
  financeBook: "exampleFinanceBook",
  financeBookId: 42,
  frequencyOfDepreciation: 42,
  grossPurchaseAmount: 42.42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  notes: "exampleNotes",
  openingAccumulatedDepreciation: 42.42,
  openingNumberOfBookedDepreciations: 42,
  owner: "exampleOwner",
  rateOfDepreciation: 42.42,
  shiftBased: 42,
  status: "exampleStatus",
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  dailyProrataBased: 42,
  depreciationMethod: "exampleDepreciationMethod",
  docstatus: 42,
  expectedValueAfterUsefulLife: 42.42,
  financeBook: "exampleFinanceBook",
  financeBookId: 42,
  frequencyOfDepreciation: 42,
  grossPurchaseAmount: 42.42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  notes: "exampleNotes",
  openingAccumulatedDepreciation: 42.42,
  openingNumberOfBookedDepreciations: 42,
  owner: "exampleOwner",
  rateOfDepreciation: 42.42,
  shiftBased: 42,
  status: "exampleStatus",
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    asset: "exampleAsset",
    company: "exampleCompany",
    createdAt: new Date(),
    creation: new Date(),
    dailyProrataBased: 42,
    depreciationMethod: "exampleDepreciationMethod",
    docstatus: 42,
    expectedValueAfterUsefulLife: 42.42,
    financeBook: "exampleFinanceBook",
    financeBookId: 42,
    frequencyOfDepreciation: 42,
    grossPurchaseAmount: 42.42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    notes: "exampleNotes",
    openingAccumulatedDepreciation: 42.42,
    openingNumberOfBookedDepreciations: 42,
    owner: "exampleOwner",
    rateOfDepreciation: 42.42,
    shiftBased: 42,
    status: "exampleStatus",
    totalNumberOfDepreciations: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  company: "exampleCompany",
  createdAt: new Date(),
  creation: new Date(),
  dailyProrataBased: 42,
  depreciationMethod: "exampleDepreciationMethod",
  docstatus: 42,
  expectedValueAfterUsefulLife: 42.42,
  financeBook: "exampleFinanceBook",
  financeBookId: 42,
  frequencyOfDepreciation: 42,
  grossPurchaseAmount: 42.42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  notes: "exampleNotes",
  openingAccumulatedDepreciation: 42.42,
  openingNumberOfBookedDepreciations: 42,
  owner: "exampleOwner",
  rateOfDepreciation: 42.42,
  shiftBased: 42,
  status: "exampleStatus",
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
};

const service = {
  createAssetDepreciationSchedule() {
    return CREATE_RESULT;
  },
  assetDepreciationSchedules: () => FIND_MANY_RESULT,
  assetDepreciationSchedule: ({ where }: { where: { id: string } }) => {
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

describe("AssetDepreciationSchedule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetDepreciationScheduleService,
          useValue: service,
        },
      ],
      controllers: [AssetDepreciationScheduleController],
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

  test("POST /assetDepreciationSchedules", async () => {
    await request(app.getHttpServer())
      .post("/assetDepreciationSchedules")
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

  test("GET /assetDepreciationSchedules", async () => {
    await request(app.getHttpServer())
      .get("/assetDepreciationSchedules")
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

  test("GET /assetDepreciationSchedules/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetDepreciationSchedules"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetDepreciationSchedules/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetDepreciationSchedules"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetDepreciationSchedules existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetDepreciationSchedules")
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
          .post("/assetDepreciationSchedules")
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
