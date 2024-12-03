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
import { AssetFinanceBookController } from "../assetFinanceBook.controller";
import { AssetFinanceBookService } from "../assetFinanceBook.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  creation: new Date(),
  dailyProrataBased: 42,
  depreciationMethod: "exampleDepreciationMethod",
  depreciationStartDate: new Date(),
  docstatus: 42,
  expectedValueAfterUsefulLife: 42.42,
  financeBook: "exampleFinanceBook",
  frequencyOfDepreciation: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  rateOfDepreciation: 42.42,
  salvageValuePercentage: 42.42,
  shiftBased: 42,
  totalNumberOfBookedDepreciations: 42,
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
  valueAfterDepreciation: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  dailyProrataBased: 42,
  depreciationMethod: "exampleDepreciationMethod",
  depreciationStartDate: new Date(),
  docstatus: 42,
  expectedValueAfterUsefulLife: 42.42,
  financeBook: "exampleFinanceBook",
  frequencyOfDepreciation: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  rateOfDepreciation: 42.42,
  salvageValuePercentage: 42.42,
  shiftBased: 42,
  totalNumberOfBookedDepreciations: 42,
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
  valueAfterDepreciation: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    creation: new Date(),
    dailyProrataBased: 42,
    depreciationMethod: "exampleDepreciationMethod",
    depreciationStartDate: new Date(),
    docstatus: 42,
    expectedValueAfterUsefulLife: 42.42,
    financeBook: "exampleFinanceBook",
    frequencyOfDepreciation: 42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    rateOfDepreciation: 42.42,
    salvageValuePercentage: 42.42,
    shiftBased: 42,
    totalNumberOfBookedDepreciations: 42,
    totalNumberOfDepreciations: 42,
    updatedAt: new Date(),
    valueAfterDepreciation: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  dailyProrataBased: 42,
  depreciationMethod: "exampleDepreciationMethod",
  depreciationStartDate: new Date(),
  docstatus: 42,
  expectedValueAfterUsefulLife: 42.42,
  financeBook: "exampleFinanceBook",
  frequencyOfDepreciation: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  rateOfDepreciation: 42.42,
  salvageValuePercentage: 42.42,
  shiftBased: 42,
  totalNumberOfBookedDepreciations: 42,
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
  valueAfterDepreciation: 42.42,
};

const service = {
  createAssetFinanceBook() {
    return CREATE_RESULT;
  },
  assetFinanceBooks: () => FIND_MANY_RESULT,
  assetFinanceBook: ({ where }: { where: { id: string } }) => {
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

describe("AssetFinanceBook", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetFinanceBookService,
          useValue: service,
        },
      ],
      controllers: [AssetFinanceBookController],
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

  test("POST /assetFinanceBooks", async () => {
    await request(app.getHttpServer())
      .post("/assetFinanceBooks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        depreciationStartDate:
          CREATE_RESULT.depreciationStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /assetFinanceBooks", async () => {
    await request(app.getHttpServer())
      .get("/assetFinanceBooks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          depreciationStartDate:
            FIND_MANY_RESULT[0].depreciationStartDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /assetFinanceBooks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetFinanceBooks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetFinanceBooks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetFinanceBooks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        depreciationStartDate:
          FIND_ONE_RESULT.depreciationStartDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetFinanceBooks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetFinanceBooks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        depreciationStartDate:
          CREATE_RESULT.depreciationStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetFinanceBooks")
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
