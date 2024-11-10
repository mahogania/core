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
import { BomOperationController } from "../bomOperation.controller";
import { BomOperationService } from "../bomOperation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  baseCostPerUnit: 42.42,
  baseHourRate: 42.42,
  baseOperatingCost: 42.42,
  batchSize: 42,
  costPerUnit: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  fixedTime: "true",
  hourRate: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operatingCost: 42.42,
  operation: "exampleOperation",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  sequenceId: 42,
  setCostBasedOnBomQty: "true",
  timeInMins: 42.42,
  updatedAt: new Date(),
  workstation: "exampleWorkstation",
  workstationType: "exampleWorkstationType",
};
const CREATE_RESULT = {
  baseCostPerUnit: 42.42,
  baseHourRate: 42.42,
  baseOperatingCost: 42.42,
  batchSize: 42,
  costPerUnit: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  fixedTime: "true",
  hourRate: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operatingCost: 42.42,
  operation: "exampleOperation",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  sequenceId: 42,
  setCostBasedOnBomQty: "true",
  timeInMins: 42.42,
  updatedAt: new Date(),
  workstation: "exampleWorkstation",
  workstationType: "exampleWorkstationType",
};
const FIND_MANY_RESULT = [
  {
    baseCostPerUnit: 42.42,
    baseHourRate: 42.42,
    baseOperatingCost: 42.42,
    batchSize: 42,
    costPerUnit: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    fixedTime: "true",
    hourRate: 42.42,
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    operatingCost: 42.42,
    operation: "exampleOperation",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    sequenceId: 42,
    setCostBasedOnBomQty: "true",
    timeInMins: 42.42,
    updatedAt: new Date(),
    workstation: "exampleWorkstation",
    workstationType: "exampleWorkstationType",
  },
];
const FIND_ONE_RESULT = {
  baseCostPerUnit: 42.42,
  baseHourRate: 42.42,
  baseOperatingCost: 42.42,
  batchSize: 42,
  costPerUnit: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  fixedTime: "true",
  hourRate: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  operatingCost: 42.42,
  operation: "exampleOperation",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  sequenceId: 42,
  setCostBasedOnBomQty: "true",
  timeInMins: 42.42,
  updatedAt: new Date(),
  workstation: "exampleWorkstation",
  workstationType: "exampleWorkstationType",
};

const service = {
  createBomOperation() {
    return CREATE_RESULT;
  },
  bomOperations: () => FIND_MANY_RESULT,
  bomOperation: ({ where }: { where: { id: string } }) => {
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

describe("BomOperation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BomOperationService,
          useValue: service,
        },
      ],
      controllers: [BomOperationController],
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

  test("POST /bomOperations", async () => {
    await request(app.getHttpServer())
      .post("/bomOperations")
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

  test("GET /bomOperations", async () => {
    await request(app.getHttpServer())
      .get("/bomOperations")
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

  test("GET /bomOperations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomOperations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bomOperations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bomOperations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bomOperations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bomOperations")
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
          .post("/bomOperations")
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
