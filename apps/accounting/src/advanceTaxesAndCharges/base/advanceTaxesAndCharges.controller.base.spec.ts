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
import { AdvanceTaxesAndChargesController } from "../advanceTaxesAndCharges.controller";
import { AdvanceTaxesAndChargesService } from "../advanceTaxesAndCharges.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountHead: "exampleAccountHead",
  addDeductTax: "exampleAddDeductTax",
  allocatedAmount: 42.42,
  baseTaxAmount: 42.42,
  baseTotal: 42.42,
  chargeType: "exampleChargeType",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  currency: "exampleCurrency",
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includedInPaidAmount: 42,
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  rate: 42.42,
  rowId: "exampleRowId",
  taxAmount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accountHead: "exampleAccountHead",
  addDeductTax: "exampleAddDeductTax",
  allocatedAmount: 42.42,
  baseTaxAmount: 42.42,
  baseTotal: 42.42,
  chargeType: "exampleChargeType",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  currency: "exampleCurrency",
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includedInPaidAmount: 42,
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  rate: 42.42,
  rowId: "exampleRowId",
  taxAmount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accountHead: "exampleAccountHead",
    addDeductTax: "exampleAddDeductTax",
    allocatedAmount: 42.42,
    baseTaxAmount: 42.42,
    baseTotal: 42.42,
    chargeType: "exampleChargeType",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    currency: "exampleCurrency",
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    includedInPaidAmount: 42,
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    rate: 42.42,
    rowId: "exampleRowId",
    taxAmount: 42.42,
    total: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accountHead: "exampleAccountHead",
  addDeductTax: "exampleAddDeductTax",
  allocatedAmount: 42.42,
  baseTaxAmount: 42.42,
  baseTotal: 42.42,
  chargeType: "exampleChargeType",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  currency: "exampleCurrency",
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includedInPaidAmount: 42,
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  rate: 42.42,
  rowId: "exampleRowId",
  taxAmount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};

const service = {
  createAdvanceTaxesAndCharges() {
    return CREATE_RESULT;
  },
  advanceTaxesAndChargesItems: () => FIND_MANY_RESULT,
  advanceTaxesAndCharges: ({ where }: { where: { id: string } }) => {
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

describe("AdvanceTaxesAndCharges", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AdvanceTaxesAndChargesService,
          useValue: service,
        },
      ],
      controllers: [AdvanceTaxesAndChargesController],
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

  test("POST /advanceTaxesAndCharges", async () => {
    await request(app.getHttpServer())
      .post("/advanceTaxesAndCharges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /advanceTaxesAndCharges", async () => {
    await request(app.getHttpServer())
      .get("/advanceTaxesAndCharges")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /advanceTaxesAndCharges/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/advanceTaxesAndCharges"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /advanceTaxesAndCharges/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/advanceTaxesAndCharges"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /advanceTaxesAndCharges existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/advanceTaxesAndCharges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/advanceTaxesAndCharges")
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
