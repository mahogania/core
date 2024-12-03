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
import { SubcontractingBomController } from "../subcontractingBom.controller";
import { SubcontractingBomService } from "../subcontractingBom.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  finishedGood: "exampleFinishedGood",
  finishedGoodBom: "exampleFinishedGoodBom",
  finishedGoodQty: 42.42,
  finishedGoodUom: "exampleFinishedGoodUom",
  id: "exampleId",
  idx: 42,
  isActive: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  serviceItem: "exampleServiceItem",
  serviceItemQty: 42.42,
  serviceItemUom: "exampleServiceItemUom",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  finishedGood: "exampleFinishedGood",
  finishedGoodBom: "exampleFinishedGoodBom",
  finishedGoodQty: 42.42,
  finishedGoodUom: "exampleFinishedGoodUom",
  id: "exampleId",
  idx: 42,
  isActive: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  serviceItem: "exampleServiceItem",
  serviceItemQty: 42.42,
  serviceItemUom: "exampleServiceItemUom",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    conversionFactor: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    finishedGood: "exampleFinishedGood",
    finishedGoodBom: "exampleFinishedGoodBom",
    finishedGoodQty: 42.42,
    finishedGoodUom: "exampleFinishedGoodUom",
    id: "exampleId",
    idx: 42,
    isActive: "true",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    serviceItem: "exampleServiceItem",
    serviceItemQty: 42.42,
    serviceItemUom: "exampleServiceItemUom",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  finishedGood: "exampleFinishedGood",
  finishedGoodBom: "exampleFinishedGoodBom",
  finishedGoodQty: 42.42,
  finishedGoodUom: "exampleFinishedGoodUom",
  id: "exampleId",
  idx: 42,
  isActive: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  serviceItem: "exampleServiceItem",
  serviceItemQty: 42.42,
  serviceItemUom: "exampleServiceItemUom",
  updatedAt: new Date(),
};

const service = {
  createSubcontractingBom() {
    return CREATE_RESULT;
  },
  subcontractingBoms: () => FIND_MANY_RESULT,
  subcontractingBom: ({ where }: { where: { id: string } }) => {
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

describe("SubcontractingBom", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SubcontractingBomService,
          useValue: service,
        },
      ],
      controllers: [SubcontractingBomController],
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

  test("POST /subcontractingBoms", async () => {
    await request(app.getHttpServer())
      .post("/subcontractingBoms")
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

  test("GET /subcontractingBoms", async () => {
    await request(app.getHttpServer())
      .get("/subcontractingBoms")
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

  test("GET /subcontractingBoms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/subcontractingBoms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /subcontractingBoms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/subcontractingBoms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /subcontractingBoms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/subcontractingBoms")
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
          .post("/subcontractingBoms")
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
