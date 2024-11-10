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
import { MaintenanceScheduleItemController } from "../maintenanceScheduleItem.controller";
import { MaintenanceScheduleItemService } from "../maintenanceScheduleItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noOfVisits: 42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  periodicity: "examplePeriodicity",
  salesOrder: "exampleSalesOrder",
  salesPerson: "exampleSalesPerson",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  startDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noOfVisits: 42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  periodicity: "examplePeriodicity",
  salesOrder: "exampleSalesOrder",
  salesPerson: "exampleSalesPerson",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  startDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    endDate: new Date(),
    id: "exampleId",
    idx: 42,
    itemCode: "exampleItemCode",
    itemName: "exampleItemName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    noOfVisits: 42,
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    periodicity: "examplePeriodicity",
    salesOrder: "exampleSalesOrder",
    salesPerson: "exampleSalesPerson",
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    startDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  endDate: new Date(),
  id: "exampleId",
  idx: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  noOfVisits: 42,
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  periodicity: "examplePeriodicity",
  salesOrder: "exampleSalesOrder",
  salesPerson: "exampleSalesPerson",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  startDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createMaintenanceScheduleItem() {
    return CREATE_RESULT;
  },
  maintenanceScheduleItems: () => FIND_MANY_RESULT,
  maintenanceScheduleItem: ({ where }: { where: { id: string } }) => {
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

describe("MaintenanceScheduleItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MaintenanceScheduleItemService,
          useValue: service,
        },
      ],
      controllers: [MaintenanceScheduleItemController],
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

  test("POST /maintenanceScheduleItems", async () => {
    await request(app.getHttpServer())
      .post("/maintenanceScheduleItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /maintenanceScheduleItems", async () => {
    await request(app.getHttpServer())
      .get("/maintenanceScheduleItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /maintenanceScheduleItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceScheduleItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /maintenanceScheduleItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceScheduleItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /maintenanceScheduleItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/maintenanceScheduleItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/maintenanceScheduleItems")
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
