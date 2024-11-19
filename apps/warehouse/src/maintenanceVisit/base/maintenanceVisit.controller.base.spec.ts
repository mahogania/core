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
import { MaintenanceVisitController } from "../maintenanceVisit.controller";
import { MaintenanceVisitService } from "../maintenanceVisit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  completionStatus: "exampleCompletionStatus",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerFeedback: "exampleCustomerFeedback",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  maintenanceSchedule: "exampleMaintenanceSchedule",
  maintenanceScheduleDetail: "exampleMaintenanceScheduleDetail",
  maintenanceType: "exampleMaintenanceType",
  mntcDate: new Date(),
  mntcTime: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  territory: "exampleTerritory",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  completionStatus: "exampleCompletionStatus",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerFeedback: "exampleCustomerFeedback",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  maintenanceSchedule: "exampleMaintenanceSchedule",
  maintenanceScheduleDetail: "exampleMaintenanceScheduleDetail",
  maintenanceType: "exampleMaintenanceType",
  mntcDate: new Date(),
  mntcTime: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  territory: "exampleTerritory",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addressDisplay: "exampleAddressDisplay",
    amendedFrom: "exampleAmendedFrom",
    company: "exampleCompany",
    completionStatus: "exampleCompletionStatus",
    contactDisplay: "exampleContactDisplay",
    contactEmail: "exampleContactEmail",
    contactMobile: "exampleContactMobile",
    contactPerson: "exampleContactPerson",
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    customerAddress: "exampleCustomerAddress",
    customerFeedback: "exampleCustomerFeedback",
    customerGroup: "exampleCustomerGroup",
    customerName: "exampleCustomerName",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    maintenanceSchedule: "exampleMaintenanceSchedule",
    maintenanceScheduleDetail: "exampleMaintenanceScheduleDetail",
    maintenanceType: "exampleMaintenanceType",
    mntcDate: new Date(),
    mntcTime: new Date(),
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    status: "exampleStatus",
    territory: "exampleTerritory",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addressDisplay: "exampleAddressDisplay",
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  completionStatus: "exampleCompletionStatus",
  contactDisplay: "exampleContactDisplay",
  contactEmail: "exampleContactEmail",
  contactMobile: "exampleContactMobile",
  contactPerson: "exampleContactPerson",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerFeedback: "exampleCustomerFeedback",
  customerGroup: "exampleCustomerGroup",
  customerName: "exampleCustomerName",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  maintenanceSchedule: "exampleMaintenanceSchedule",
  maintenanceScheduleDetail: "exampleMaintenanceScheduleDetail",
  maintenanceType: "exampleMaintenanceType",
  mntcDate: new Date(),
  mntcTime: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  territory: "exampleTerritory",
  updatedAt: new Date(),
};

const service = {
  createMaintenanceVisit() {
    return CREATE_RESULT;
  },
  maintenanceVisits: () => FIND_MANY_RESULT,
  maintenanceVisit: ({ where }: { where: { id: string } }) => {
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

describe("MaintenanceVisit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MaintenanceVisitService,
          useValue: service,
        },
      ],
      controllers: [MaintenanceVisitController],
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

  test("POST /maintenanceVisits", async () => {
    await request(app.getHttpServer())
      .post("/maintenanceVisits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        mntcDate: CREATE_RESULT.mntcDate.toISOString(),
        mntcTime: CREATE_RESULT.mntcTime.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /maintenanceVisits", async () => {
    await request(app.getHttpServer())
      .get("/maintenanceVisits")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          mntcDate: FIND_MANY_RESULT[0].mntcDate.toISOString(),
          mntcTime: FIND_MANY_RESULT[0].mntcTime.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /maintenanceVisits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceVisits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /maintenanceVisits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceVisits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        mntcDate: FIND_ONE_RESULT.mntcDate.toISOString(),
        mntcTime: FIND_ONE_RESULT.mntcTime.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /maintenanceVisits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/maintenanceVisits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        mntcDate: CREATE_RESULT.mntcDate.toISOString(),
        mntcTime: CREATE_RESULT.mntcTime.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/maintenanceVisits")
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
