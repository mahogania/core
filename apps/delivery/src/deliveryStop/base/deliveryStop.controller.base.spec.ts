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
import { DeliveryStopController } from "../deliveryStop.controller";
import { DeliveryStopService } from "../deliveryStop.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  contact: "exampleContact",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerContact: "exampleCustomerContact",
  deliveryNote: "exampleDeliveryNote",
  details: "exampleDetails",
  distance: 42.42,
  docstatus: 42,
  emailSentTo: "exampleEmailSentTo",
  estimatedArrival: new Date(),
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  lat: 42.42,
  lng: 42.42,
  locked: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  uom: "exampleUom",
  updatedAt: new Date(),
  visited: "true",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  contact: "exampleContact",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerContact: "exampleCustomerContact",
  deliveryNote: "exampleDeliveryNote",
  details: "exampleDetails",
  distance: 42.42,
  docstatus: 42,
  emailSentTo: "exampleEmailSentTo",
  estimatedArrival: new Date(),
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  lat: 42.42,
  lng: 42.42,
  locked: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  uom: "exampleUom",
  updatedAt: new Date(),
  visited: "true",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    contact: "exampleContact",
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    customerAddress: "exampleCustomerAddress",
    customerContact: "exampleCustomerContact",
    deliveryNote: "exampleDeliveryNote",
    details: "exampleDetails",
    distance: 42.42,
    docstatus: 42,
    emailSentTo: "exampleEmailSentTo",
    estimatedArrival: new Date(),
    grandTotal: 42.42,
    id: "exampleId",
    idx: 42,
    lat: 42.42,
    lng: 42.42,
    locked: "true",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    uom: "exampleUom",
    updatedAt: new Date(),
    visited: "true",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  contact: "exampleContact",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  customerAddress: "exampleCustomerAddress",
  customerContact: "exampleCustomerContact",
  deliveryNote: "exampleDeliveryNote",
  details: "exampleDetails",
  distance: 42.42,
  docstatus: 42,
  emailSentTo: "exampleEmailSentTo",
  estimatedArrival: new Date(),
  grandTotal: 42.42,
  id: "exampleId",
  idx: 42,
  lat: 42.42,
  lng: 42.42,
  locked: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  uom: "exampleUom",
  updatedAt: new Date(),
  visited: "true",
};

const service = {
  createDeliveryStop() {
    return CREATE_RESULT;
  },
  deliveryStops: () => FIND_MANY_RESULT,
  deliveryStop: ({ where }: { where: { id: string } }) => {
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

describe("DeliveryStop", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliveryStopService,
          useValue: service,
        },
      ],
      controllers: [DeliveryStopController],
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

  test("POST /deliveryStops", async () => {
    await request(app.getHttpServer())
      .post("/deliveryStops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        estimatedArrival: CREATE_RESULT.estimatedArrival.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /deliveryStops", async () => {
    await request(app.getHttpServer())
      .get("/deliveryStops")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          estimatedArrival: FIND_MANY_RESULT[0].estimatedArrival.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /deliveryStops/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryStops"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliveryStops/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryStops"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        estimatedArrival: FIND_ONE_RESULT.estimatedArrival.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /deliveryStops existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deliveryStops")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        estimatedArrival: CREATE_RESULT.estimatedArrival.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/deliveryStops")
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
