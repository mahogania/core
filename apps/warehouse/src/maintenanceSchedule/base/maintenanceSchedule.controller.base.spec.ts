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
import { MaintenanceScheduleController } from "../maintenanceSchedule.controller";
import { MaintenanceScheduleService } from "../maintenanceSchedule.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  territory: "exampleTerritory",
  transactionDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  territory: "exampleTerritory",
  transactionDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addressDisplay: "exampleAddressDisplay",
    amendedFrom: "exampleAmendedFrom",
    company: "exampleCompany",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    customerAddress: "exampleCustomerAddress",
    customerGroup: "exampleCustomerGroup",
    customerName: "exampleCustomerName",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    status: "exampleStatus",
    territory: "exampleTerritory",
    transactionDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  territory: "exampleTerritory",
  transactionDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createMaintenanceSchedule() {
    return CREATE_RESULT;
  },
  maintenanceSchedules: () => FIND_MANY_RESULT,
  maintenanceSchedule: ({ where }: { where: { id: string } }) => {
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

describe("MaintenanceSchedule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MaintenanceScheduleService,
          useValue: service,
        },
      ],
      controllers: [MaintenanceScheduleController],
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

  test("POST /maintenanceSchedules", async () => {
    await request(app.getHttpServer())
      .post("/maintenanceSchedules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /maintenanceSchedules", async () => {
    await request(app.getHttpServer())
      .get("/maintenanceSchedules")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /maintenanceSchedules/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceSchedules"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /maintenanceSchedules/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceSchedules"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /maintenanceSchedules existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/maintenanceSchedules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/maintenanceSchedules")
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
