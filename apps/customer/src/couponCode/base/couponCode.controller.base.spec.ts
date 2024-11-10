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
import { CouponCodeController } from "../couponCode.controller";
import { CouponCodeService } from "../couponCode.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  couponCode: "exampleCouponCode",
  couponName: "exampleCouponName",
  couponType: "exampleCouponType",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  maximumUse: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  pricingRule: "examplePricingRule",
  updatedAt: new Date(),
  used: 42,
  validFrom: new Date(),
  validUpto: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  couponCode: "exampleCouponCode",
  couponName: "exampleCouponName",
  couponType: "exampleCouponType",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  maximumUse: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  pricingRule: "examplePricingRule",
  updatedAt: new Date(),
  used: 42,
  validFrom: new Date(),
  validUpto: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    couponCode: "exampleCouponCode",
    couponName: "exampleCouponName",
    couponType: "exampleCouponType",
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    maximumUse: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    pricingRule: "examplePricingRule",
    updatedAt: new Date(),
    used: 42,
    validFrom: new Date(),
    validUpto: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  couponCode: "exampleCouponCode",
  couponName: "exampleCouponName",
  couponType: "exampleCouponType",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  maximumUse: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  pricingRule: "examplePricingRule",
  updatedAt: new Date(),
  used: 42,
  validFrom: new Date(),
  validUpto: new Date(),
};

const service = {
  createCouponCode() {
    return CREATE_RESULT;
  },
  couponCodes: () => FIND_MANY_RESULT,
  couponCode: ({ where }: { where: { id: string } }) => {
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

describe("CouponCode", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CouponCodeService,
          useValue: service,
        },
      ],
      controllers: [CouponCodeController],
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

  test("POST /couponCodes", async () => {
    await request(app.getHttpServer())
      .post("/couponCodes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validFrom: CREATE_RESULT.validFrom.toISOString(),
        validUpto: CREATE_RESULT.validUpto.toISOString(),
      });
  });

  test("GET /couponCodes", async () => {
    await request(app.getHttpServer())
      .get("/couponCodes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          validFrom: FIND_MANY_RESULT[0].validFrom.toISOString(),
          validUpto: FIND_MANY_RESULT[0].validUpto.toISOString(),
        },
      ]);
  });

  test("GET /couponCodes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/couponCodes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /couponCodes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/couponCodes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        validFrom: FIND_ONE_RESULT.validFrom.toISOString(),
        validUpto: FIND_ONE_RESULT.validUpto.toISOString(),
      });
  });

  test("POST /couponCodes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/couponCodes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validFrom: CREATE_RESULT.validFrom.toISOString(),
        validUpto: CREATE_RESULT.validUpto.toISOString(),
      })
      .then(function () {
        agent
          .post("/couponCodes")
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
