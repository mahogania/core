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
import { DeliveryTripController } from "../deliveryTrip.controller";
import { DeliveryTripService } from "../deliveryTrip.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  createdAt: new Date(),
  departureTime: new Date(),
  docstatus: 42,
  driver: "exampleDriver",
  driverAddress: "exampleDriverAddress",
  driverEmail: "exampleDriverEmail",
  driverName: "exampleDriverName",
  emailNotificationSent: "true",
  employee: "exampleEmployee",
  id: "exampleId",
  idx: 42,
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  totalDistance: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  vehicle: "exampleVehicle",
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  createdAt: new Date(),
  departureTime: new Date(),
  docstatus: 42,
  driver: "exampleDriver",
  driverAddress: "exampleDriverAddress",
  driverEmail: "exampleDriverEmail",
  driverName: "exampleDriverName",
  emailNotificationSent: "true",
  employee: "exampleEmployee",
  id: "exampleId",
  idx: 42,
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  totalDistance: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  vehicle: "exampleVehicle",
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    company: "exampleCompany",
    createdAt: new Date(),
    departureTime: new Date(),
    docstatus: 42,
    driver: "exampleDriver",
    driverAddress: "exampleDriverAddress",
    driverEmail: "exampleDriverEmail",
    driverName: "exampleDriverName",
    emailNotificationSent: "true",
    employee: "exampleEmployee",
    id: "exampleId",
    idx: 42,
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    owner: "exampleOwner",
    status: "exampleStatus",
    totalDistance: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    vehicle: "exampleVehicle",
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  company: "exampleCompany",
  createdAt: new Date(),
  departureTime: new Date(),
  docstatus: 42,
  driver: "exampleDriver",
  driverAddress: "exampleDriverAddress",
  driverEmail: "exampleDriverEmail",
  driverName: "exampleDriverName",
  emailNotificationSent: "true",
  employee: "exampleEmployee",
  id: "exampleId",
  idx: 42,
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  owner: "exampleOwner",
  status: "exampleStatus",
  totalDistance: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  vehicle: "exampleVehicle",
};

const service = {
  createDeliveryTrip() {
    return CREATE_RESULT;
  },
  deliveryTrips: () => FIND_MANY_RESULT,
  deliveryTrip: ({ where }: { where: { id: string } }) => {
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

describe("DeliveryTrip", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliveryTripService,
          useValue: service,
        },
      ],
      controllers: [DeliveryTripController],
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

  test("POST /deliveryTrips", async () => {
    await request(app.getHttpServer())
      .post("/deliveryTrips")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /deliveryTrips", async () => {
    await request(app.getHttpServer())
      .get("/deliveryTrips")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          departureTime: FIND_MANY_RESULT[0].departureTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /deliveryTrips/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryTrips"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliveryTrips/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryTrips"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        departureTime: FIND_ONE_RESULT.departureTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /deliveryTrips existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deliveryTrips")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/deliveryTrips")
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
