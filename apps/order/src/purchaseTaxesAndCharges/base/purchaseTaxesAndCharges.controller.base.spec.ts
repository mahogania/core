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
import { PurchaseTaxesAndChargesController } from "../purchaseTaxesAndCharges.controller";
import { PurchaseTaxesAndChargesService } from "../purchaseTaxesAndCharges.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accountCurrency: "exampleAccountCurrency",
  accountHead: "exampleAccountHead",
  addDeductTax: "exampleAddDeductTax",
  baseTaxAmount: 42.42,
  baseTaxAmountAfterDiscountAmount: 42.42,
  baseTotal: 42.42,
  category: "exampleCategory",
  chargeType: "exampleChargeType",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includedInPaidAmount: 42,
  includedInPrintRate: 42,
  isTaxWithholdingAccount: 42,
  itemWiseTaxDetail: "exampleItemWiseTaxDetail",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  rate: 42.42,
  rowId: "exampleRowId",
  taxAmount: 42.42,
  taxAmountAfterDiscountAmount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accountCurrency: "exampleAccountCurrency",
  accountHead: "exampleAccountHead",
  addDeductTax: "exampleAddDeductTax",
  baseTaxAmount: 42.42,
  baseTaxAmountAfterDiscountAmount: 42.42,
  baseTotal: 42.42,
  category: "exampleCategory",
  chargeType: "exampleChargeType",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includedInPaidAmount: 42,
  includedInPrintRate: 42,
  isTaxWithholdingAccount: 42,
  itemWiseTaxDetail: "exampleItemWiseTaxDetail",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  rate: 42.42,
  rowId: "exampleRowId",
  taxAmount: 42.42,
  taxAmountAfterDiscountAmount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accountCurrency: "exampleAccountCurrency",
    accountHead: "exampleAccountHead",
    addDeductTax: "exampleAddDeductTax",
    baseTaxAmount: 42.42,
    baseTaxAmountAfterDiscountAmount: 42.42,
    baseTotal: 42.42,
    category: "exampleCategory",
    chargeType: "exampleChargeType",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    description: "exampleDescription",
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    includedInPaidAmount: 42,
    includedInPrintRate: 42,
    isTaxWithholdingAccount: 42,
    itemWiseTaxDetail: "exampleItemWiseTaxDetail",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentField: "exampleParentField",
    parentType: "exampleParentType",
    rate: 42.42,
    rowId: "exampleRowId",
    taxAmount: 42.42,
    taxAmountAfterDiscountAmount: 42.42,
    total: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accountCurrency: "exampleAccountCurrency",
  accountHead: "exampleAccountHead",
  addDeductTax: "exampleAddDeductTax",
  baseTaxAmount: 42.42,
  baseTaxAmountAfterDiscountAmount: 42.42,
  baseTotal: 42.42,
  category: "exampleCategory",
  chargeType: "exampleChargeType",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  description: "exampleDescription",
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  includedInPaidAmount: 42,
  includedInPrintRate: 42,
  isTaxWithholdingAccount: 42,
  itemWiseTaxDetail: "exampleItemWiseTaxDetail",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  rate: 42.42,
  rowId: "exampleRowId",
  taxAmount: 42.42,
  taxAmountAfterDiscountAmount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};

const service = {
  createPurchaseTaxesAndCharges() {
    return CREATE_RESULT;
  },
  purchaseTaxesAndChargesItems: () => FIND_MANY_RESULT,
  purchaseTaxesAndCharges: ({ where }: { where: { id: string } }) => {
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

describe("PurchaseTaxesAndCharges", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PurchaseTaxesAndChargesService,
          useValue: service,
        },
      ],
      controllers: [PurchaseTaxesAndChargesController],
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

  test("POST /purchaseTaxesAndCharges", async () => {
    await request(app.getHttpServer())
      .post("/purchaseTaxesAndCharges")
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

  test("GET /purchaseTaxesAndCharges", async () => {
    await request(app.getHttpServer())
      .get("/purchaseTaxesAndCharges")
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

  test("GET /purchaseTaxesAndCharges/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseTaxesAndCharges"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /purchaseTaxesAndCharges/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseTaxesAndCharges"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /purchaseTaxesAndCharges existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/purchaseTaxesAndCharges")
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
          .post("/purchaseTaxesAndCharges")
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
