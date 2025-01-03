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
import { CostCenterController } from "../costCenter.controller";
import { CostCenterService } from "../costCenter.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  company: "exampleCompany",
  costCenterName: "exampleCostCenterName",
  costCenterNumber: "exampleCostCenterNumber",
  createdAt: new Date(),
  creation: new Date(),
  disabled: "true",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  isGroup: "true",
  lft: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentCostCenter: "exampleParentCostCenter",
  rgt: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  company: "exampleCompany",
  costCenterName: "exampleCostCenterName",
  costCenterNumber: "exampleCostCenterNumber",
  createdAt: new Date(),
  creation: new Date(),
  disabled: "true",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  isGroup: "true",
  lft: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentCostCenter: "exampleParentCostCenter",
  rgt: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    company: "exampleCompany",
    costCenterName: "exampleCostCenterName",
    costCenterNumber: "exampleCostCenterNumber",
    createdAt: new Date(),
    creation: new Date(),
    disabled: "true",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    isGroup: "true",
    lft: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    oldParent: "exampleOldParent",
    owner: "exampleOwner",
    parentCostCenter: "exampleParentCostCenter",
    rgt: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  company: "exampleCompany",
  costCenterName: "exampleCostCenterName",
  costCenterNumber: "exampleCostCenterNumber",
  createdAt: new Date(),
  creation: new Date(),
  disabled: "true",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  isGroup: "true",
  lft: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  oldParent: "exampleOldParent",
  owner: "exampleOwner",
  parentCostCenter: "exampleParentCostCenter",
  rgt: 42,
  updatedAt: new Date(),
};

const service = {
  createCostCenter() {
    return CREATE_RESULT;
  },
  costCenters: () => FIND_MANY_RESULT,
  costCenter: ({ where }: { where: { id: string } }) => {
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

describe("CostCenter", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CostCenterService,
          useValue: service,
        },
      ],
      controllers: [CostCenterController],
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

  test("POST /costCenters", async () => {
    await request(app.getHttpServer())
      .post("/costCenters")
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

  test("GET /costCenters", async () => {
    await request(app.getHttpServer())
      .get("/costCenters")
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

  test("GET /costCenters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/costCenters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /costCenters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/costCenters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /costCenters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/costCenters")
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
          .post("/costCenters")
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
