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
import { AssetRepairController } from "../assetRepair.controller";
import { AssetRepairService } from "../assetRepair.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actionsPerformed: "exampleActionsPerformed",
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  assetName: "exampleAssetName",
  capitalizeRepairCost: 42,
  company: "exampleCompany",
  completionDate: new Date(),
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  downtime: "exampleDowntime",
  failureDate: new Date(),
  id: "exampleId",
  idx: 42,
  increaseInAssetLife: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  project: "exampleProject",
  purchaseInvoice: "examplePurchaseInvoice",
  repairCost: 42.42,
  repairStatus: "exampleRepairStatus",
  stockConsumption: 42,
  totalRepairCost: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actionsPerformed: "exampleActionsPerformed",
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  assetName: "exampleAssetName",
  capitalizeRepairCost: 42,
  company: "exampleCompany",
  completionDate: new Date(),
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  downtime: "exampleDowntime",
  failureDate: new Date(),
  id: "exampleId",
  idx: 42,
  increaseInAssetLife: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  project: "exampleProject",
  purchaseInvoice: "examplePurchaseInvoice",
  repairCost: 42.42,
  repairStatus: "exampleRepairStatus",
  stockConsumption: 42,
  totalRepairCost: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actionsPerformed: "exampleActionsPerformed",
    amendedFrom: "exampleAmendedFrom",
    asset: "exampleAsset",
    assetName: "exampleAssetName",
    capitalizeRepairCost: 42,
    company: "exampleCompany",
    completionDate: new Date(),
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    downtime: "exampleDowntime",
    failureDate: new Date(),
    id: "exampleId",
    idx: 42,
    increaseInAssetLife: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    project: "exampleProject",
    purchaseInvoice: "examplePurchaseInvoice",
    repairCost: 42.42,
    repairStatus: "exampleRepairStatus",
    stockConsumption: 42,
    totalRepairCost: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actionsPerformed: "exampleActionsPerformed",
  amendedFrom: "exampleAmendedFrom",
  asset: "exampleAsset",
  assetName: "exampleAssetName",
  capitalizeRepairCost: 42,
  company: "exampleCompany",
  completionDate: new Date(),
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  downtime: "exampleDowntime",
  failureDate: new Date(),
  id: "exampleId",
  idx: 42,
  increaseInAssetLife: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  project: "exampleProject",
  purchaseInvoice: "examplePurchaseInvoice",
  repairCost: 42.42,
  repairStatus: "exampleRepairStatus",
  stockConsumption: 42,
  totalRepairCost: 42.42,
  updatedAt: new Date(),
};

const service = {
  createAssetRepair() {
    return CREATE_RESULT;
  },
  assetRepairs: () => FIND_MANY_RESULT,
  assetRepair: ({ where }: { where: { id: string } }) => {
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

describe("AssetRepair", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetRepairService,
          useValue: service,
        },
      ],
      controllers: [AssetRepairController],
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

  test("POST /assetRepairs", async () => {
    await request(app.getHttpServer())
      .post("/assetRepairs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        failureDate: CREATE_RESULT.failureDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /assetRepairs", async () => {
    await request(app.getHttpServer())
      .get("/assetRepairs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completionDate: FIND_MANY_RESULT[0].completionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          failureDate: FIND_MANY_RESULT[0].failureDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /assetRepairs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetRepairs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetRepairs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetRepairs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completionDate: FIND_ONE_RESULT.completionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        failureDate: FIND_ONE_RESULT.failureDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assetRepairs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetRepairs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        failureDate: CREATE_RESULT.failureDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetRepairs")
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
