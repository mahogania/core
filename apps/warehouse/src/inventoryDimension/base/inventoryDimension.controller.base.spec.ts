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
import { InventoryDimensionController } from "../inventoryDimension.controller";
import { InventoryDimensionService } from "../inventoryDimension.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applyToAllDoctypes: 42,
  condition: "exampleCondition",
  createdAt: new Date(),
  creation: new Date(),
  dimensionName: "exampleDimensionName",
  disabled: 42,
  docstatus: 42,
  documentType: "exampleDocumentType",
  fetchFromParent: "exampleFetchFromParent",
  id: "exampleId",
  idx: 42,
  isttable: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  referenceDocument: "exampleReferenceDocument",
  reqd: 42,
  sourceFieldname: "exampleSourceFieldname",
  targetFieldname: "exampleTargetFieldname",
  typeOfTransaction: "exampleTypeOfTransaction",
  updatedAt: new Date(),
  validateNegativeStock: 42,
};
const CREATE_RESULT = {
  applyToAllDoctypes: 42,
  condition: "exampleCondition",
  createdAt: new Date(),
  creation: new Date(),
  dimensionName: "exampleDimensionName",
  disabled: 42,
  docstatus: 42,
  documentType: "exampleDocumentType",
  fetchFromParent: "exampleFetchFromParent",
  id: "exampleId",
  idx: 42,
  isttable: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  referenceDocument: "exampleReferenceDocument",
  reqd: 42,
  sourceFieldname: "exampleSourceFieldname",
  targetFieldname: "exampleTargetFieldname",
  typeOfTransaction: "exampleTypeOfTransaction",
  updatedAt: new Date(),
  validateNegativeStock: 42,
};
const FIND_MANY_RESULT = [
  {
    applyToAllDoctypes: 42,
    condition: "exampleCondition",
    createdAt: new Date(),
    creation: new Date(),
    dimensionName: "exampleDimensionName",
    disabled: 42,
    docstatus: 42,
    documentType: "exampleDocumentType",
    fetchFromParent: "exampleFetchFromParent",
    id: "exampleId",
    idx: 42,
    isttable: 42,
    mandatoryDependsOn: "exampleMandatoryDependsOn",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    referenceDocument: "exampleReferenceDocument",
    reqd: 42,
    sourceFieldname: "exampleSourceFieldname",
    targetFieldname: "exampleTargetFieldname",
    typeOfTransaction: "exampleTypeOfTransaction",
    updatedAt: new Date(),
    validateNegativeStock: 42,
  },
];
const FIND_ONE_RESULT = {
  applyToAllDoctypes: 42,
  condition: "exampleCondition",
  createdAt: new Date(),
  creation: new Date(),
  dimensionName: "exampleDimensionName",
  disabled: 42,
  docstatus: 42,
  documentType: "exampleDocumentType",
  fetchFromParent: "exampleFetchFromParent",
  id: "exampleId",
  idx: 42,
  isttable: 42,
  mandatoryDependsOn: "exampleMandatoryDependsOn",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  referenceDocument: "exampleReferenceDocument",
  reqd: 42,
  sourceFieldname: "exampleSourceFieldname",
  targetFieldname: "exampleTargetFieldname",
  typeOfTransaction: "exampleTypeOfTransaction",
  updatedAt: new Date(),
  validateNegativeStock: 42,
};

const service = {
  createInventoryDimension() {
    return CREATE_RESULT;
  },
  inventoryDimensions: () => FIND_MANY_RESULT,
  inventoryDimension: ({ where }: { where: { id: string } }) => {
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

describe("InventoryDimension", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InventoryDimensionService,
          useValue: service,
        },
      ],
      controllers: [InventoryDimensionController],
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

  test("POST /inventoryDimensions", async () => {
    await request(app.getHttpServer())
      .post("/inventoryDimensions")
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

  test("GET /inventoryDimensions", async () => {
    await request(app.getHttpServer())
      .get("/inventoryDimensions")
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

  test("GET /inventoryDimensions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/inventoryDimensions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /inventoryDimensions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/inventoryDimensions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /inventoryDimensions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/inventoryDimensions")
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
          .post("/inventoryDimensions")
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
