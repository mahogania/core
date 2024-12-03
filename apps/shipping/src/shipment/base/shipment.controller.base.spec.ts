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
import { ShipmentController } from "../shipment.controller";
import { ShipmentService } from "../shipment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  awbNumber: "exampleAwbNumber",
  carrier: "exampleCarrier",
  carrierService: "exampleCarrierService",
  createdAt: new Date(),
  creation: new Date(),
  deliveryAddress: "exampleDeliveryAddress",
  deliveryAddressName: "exampleDeliveryAddressName",
  deliveryCompany: "exampleDeliveryCompany",
  deliveryContact: "exampleDeliveryContact",
  deliveryContactEmail: "exampleDeliveryContactEmail",
  deliveryContactName: "exampleDeliveryContactName",
  deliveryCustomer: "exampleDeliveryCustomer",
  deliverySupplier: "exampleDeliverySupplier",
  deliveryTo: "exampleDeliveryTo",
  deliveryToType: "exampleDeliveryToType",
  descriptionOfContent: "exampleDescriptionOfContent",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  incoterm: "exampleIncoterm",
  likedBy: "exampleLikedBy",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  pallets: "examplePallets",
  parcelTemplate: "exampleParcelTemplate",
  pickup: "examplePickup",
  pickupAddress: "examplePickupAddress",
  pickupAddressName: "examplePickupAddressName",
  pickupCompany: "examplePickupCompany",
  pickupContact: "examplePickupContact",
  pickupContactEmail: "examplePickupContactEmail",
  pickupContactName: "examplePickupContactName",
  pickupContactPerson: "examplePickupContactPerson",
  pickupCustomer: "examplePickupCustomer",
  pickupDate: new Date(),
  pickupFrom: new Date(),
  pickupFromType: "examplePickupFromType",
  pickupSupplier: "examplePickupSupplier",
  pickupTo: new Date(),
  pickupType: "examplePickupType",
  serviceProvider: "exampleServiceProvider",
  shipmentAmount: 42.42,
  shipmentId: "exampleShipmentId",
  shipmentType: "exampleShipmentType",
  status: "exampleStatus",
  trackingStatus: "exampleTrackingStatus",
  trackingStatusInfo: "exampleTrackingStatusInfo",
  trackingUrl: "exampleTrackingUrl",
  updatedAt: new Date(),
  valueOfGoods: 42.42,
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  awbNumber: "exampleAwbNumber",
  carrier: "exampleCarrier",
  carrierService: "exampleCarrierService",
  createdAt: new Date(),
  creation: new Date(),
  deliveryAddress: "exampleDeliveryAddress",
  deliveryAddressName: "exampleDeliveryAddressName",
  deliveryCompany: "exampleDeliveryCompany",
  deliveryContact: "exampleDeliveryContact",
  deliveryContactEmail: "exampleDeliveryContactEmail",
  deliveryContactName: "exampleDeliveryContactName",
  deliveryCustomer: "exampleDeliveryCustomer",
  deliverySupplier: "exampleDeliverySupplier",
  deliveryTo: "exampleDeliveryTo",
  deliveryToType: "exampleDeliveryToType",
  descriptionOfContent: "exampleDescriptionOfContent",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  incoterm: "exampleIncoterm",
  likedBy: "exampleLikedBy",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  pallets: "examplePallets",
  parcelTemplate: "exampleParcelTemplate",
  pickup: "examplePickup",
  pickupAddress: "examplePickupAddress",
  pickupAddressName: "examplePickupAddressName",
  pickupCompany: "examplePickupCompany",
  pickupContact: "examplePickupContact",
  pickupContactEmail: "examplePickupContactEmail",
  pickupContactName: "examplePickupContactName",
  pickupContactPerson: "examplePickupContactPerson",
  pickupCustomer: "examplePickupCustomer",
  pickupDate: new Date(),
  pickupFrom: new Date(),
  pickupFromType: "examplePickupFromType",
  pickupSupplier: "examplePickupSupplier",
  pickupTo: new Date(),
  pickupType: "examplePickupType",
  serviceProvider: "exampleServiceProvider",
  shipmentAmount: 42.42,
  shipmentId: "exampleShipmentId",
  shipmentType: "exampleShipmentType",
  status: "exampleStatus",
  trackingStatus: "exampleTrackingStatus",
  trackingStatusInfo: "exampleTrackingStatusInfo",
  trackingUrl: "exampleTrackingUrl",
  updatedAt: new Date(),
  valueOfGoods: 42.42,
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    awbNumber: "exampleAwbNumber",
    carrier: "exampleCarrier",
    carrierService: "exampleCarrierService",
    createdAt: new Date(),
    creation: new Date(),
    deliveryAddress: "exampleDeliveryAddress",
    deliveryAddressName: "exampleDeliveryAddressName",
    deliveryCompany: "exampleDeliveryCompany",
    deliveryContact: "exampleDeliveryContact",
    deliveryContactEmail: "exampleDeliveryContactEmail",
    deliveryContactName: "exampleDeliveryContactName",
    deliveryCustomer: "exampleDeliveryCustomer",
    deliverySupplier: "exampleDeliverySupplier",
    deliveryTo: "exampleDeliveryTo",
    deliveryToType: "exampleDeliveryToType",
    descriptionOfContent: "exampleDescriptionOfContent",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    incoterm: "exampleIncoterm",
    likedBy: "exampleLikedBy",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    pallets: "examplePallets",
    parcelTemplate: "exampleParcelTemplate",
    pickup: "examplePickup",
    pickupAddress: "examplePickupAddress",
    pickupAddressName: "examplePickupAddressName",
    pickupCompany: "examplePickupCompany",
    pickupContact: "examplePickupContact",
    pickupContactEmail: "examplePickupContactEmail",
    pickupContactName: "examplePickupContactName",
    pickupContactPerson: "examplePickupContactPerson",
    pickupCustomer: "examplePickupCustomer",
    pickupDate: new Date(),
    pickupFrom: new Date(),
    pickupFromType: "examplePickupFromType",
    pickupSupplier: "examplePickupSupplier",
    pickupTo: new Date(),
    pickupType: "examplePickupType",
    serviceProvider: "exampleServiceProvider",
    shipmentAmount: 42.42,
    shipmentId: "exampleShipmentId",
    shipmentType: "exampleShipmentType",
    status: "exampleStatus",
    trackingStatus: "exampleTrackingStatus",
    trackingStatusInfo: "exampleTrackingStatusInfo",
    trackingUrl: "exampleTrackingUrl",
    updatedAt: new Date(),
    valueOfGoods: 42.42,
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  awbNumber: "exampleAwbNumber",
  carrier: "exampleCarrier",
  carrierService: "exampleCarrierService",
  createdAt: new Date(),
  creation: new Date(),
  deliveryAddress: "exampleDeliveryAddress",
  deliveryAddressName: "exampleDeliveryAddressName",
  deliveryCompany: "exampleDeliveryCompany",
  deliveryContact: "exampleDeliveryContact",
  deliveryContactEmail: "exampleDeliveryContactEmail",
  deliveryContactName: "exampleDeliveryContactName",
  deliveryCustomer: "exampleDeliveryCustomer",
  deliverySupplier: "exampleDeliverySupplier",
  deliveryTo: "exampleDeliveryTo",
  deliveryToType: "exampleDeliveryToType",
  descriptionOfContent: "exampleDescriptionOfContent",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  incoterm: "exampleIncoterm",
  likedBy: "exampleLikedBy",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  pallets: "examplePallets",
  parcelTemplate: "exampleParcelTemplate",
  pickup: "examplePickup",
  pickupAddress: "examplePickupAddress",
  pickupAddressName: "examplePickupAddressName",
  pickupCompany: "examplePickupCompany",
  pickupContact: "examplePickupContact",
  pickupContactEmail: "examplePickupContactEmail",
  pickupContactName: "examplePickupContactName",
  pickupContactPerson: "examplePickupContactPerson",
  pickupCustomer: "examplePickupCustomer",
  pickupDate: new Date(),
  pickupFrom: new Date(),
  pickupFromType: "examplePickupFromType",
  pickupSupplier: "examplePickupSupplier",
  pickupTo: new Date(),
  pickupType: "examplePickupType",
  serviceProvider: "exampleServiceProvider",
  shipmentAmount: 42.42,
  shipmentId: "exampleShipmentId",
  shipmentType: "exampleShipmentType",
  status: "exampleStatus",
  trackingStatus: "exampleTrackingStatus",
  trackingStatusInfo: "exampleTrackingStatusInfo",
  trackingUrl: "exampleTrackingUrl",
  updatedAt: new Date(),
  valueOfGoods: 42.42,
};

const service = {
  createShipment() {
    return CREATE_RESULT;
  },
  shipments: () => FIND_MANY_RESULT,
  shipment: ({ where }: { where: { id: string } }) => {
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

describe("Shipment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ShipmentService,
          useValue: service,
        },
      ],
      controllers: [ShipmentController],
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

  test("POST /shipments", async () => {
    await request(app.getHttpServer())
      .post("/shipments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        pickupDate: CREATE_RESULT.pickupDate.toISOString(),
        pickupFrom: CREATE_RESULT.pickupFrom.toISOString(),
        pickupTo: CREATE_RESULT.pickupTo.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /shipments", async () => {
    await request(app.getHttpServer())
      .get("/shipments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          pickupDate: FIND_MANY_RESULT[0].pickupDate.toISOString(),
          pickupFrom: FIND_MANY_RESULT[0].pickupFrom.toISOString(),
          pickupTo: FIND_MANY_RESULT[0].pickupTo.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /shipments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shipments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /shipments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shipments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        pickupDate: FIND_ONE_RESULT.pickupDate.toISOString(),
        pickupFrom: FIND_ONE_RESULT.pickupFrom.toISOString(),
        pickupTo: FIND_ONE_RESULT.pickupTo.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /shipments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/shipments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        pickupDate: CREATE_RESULT.pickupDate.toISOString(),
        pickupFrom: CREATE_RESULT.pickupFrom.toISOString(),
        pickupTo: CREATE_RESULT.pickupTo.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/shipments")
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
