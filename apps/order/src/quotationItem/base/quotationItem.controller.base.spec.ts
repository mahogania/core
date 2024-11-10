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
import { QuotationItemController } from "../quotationItem.controller";
import { QuotationItemService } from "../quotationItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  additionalNotes: "exampleAdditionalNotes",
  againstBlanketOrder: 42,
  amount: 42.42,
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  brand: "exampleBrand",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  grossProfit: 42.42,
  hasAlternativeItem: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isAlternative: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netAmount: 42.42,
  netRate: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  prevdocDocname: "examplePrevdocDocname",
  prevdocDoctype: "examplePrevdocDoctype",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  projectedQty: 42.42,
  qty: 42.42,
  rate: 42.42,
  rateWithMargin: 42.42,
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};
const CREATE_RESULT = {
  actualQty: 42.42,
  additionalNotes: "exampleAdditionalNotes",
  againstBlanketOrder: 42,
  amount: 42.42,
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  brand: "exampleBrand",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  grossProfit: 42.42,
  hasAlternativeItem: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isAlternative: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netAmount: 42.42,
  netRate: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  prevdocDocname: "examplePrevdocDocname",
  prevdocDoctype: "examplePrevdocDoctype",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  projectedQty: 42.42,
  qty: 42.42,
  rate: 42.42,
  rateWithMargin: 42.42,
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    additionalNotes: "exampleAdditionalNotes",
    againstBlanketOrder: 42,
    amount: 42.42,
    baseAmount: 42.42,
    baseNetAmount: 42.42,
    baseNetRate: 42.42,
    basePriceListRate: 42.42,
    baseRate: 42.42,
    baseRateWithMargin: 42.42,
    blanketOrder: "exampleBlanketOrder",
    blanketOrderRate: 42.42,
    brand: "exampleBrand",
    conversionFactor: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    customerItemCode: "exampleCustomerItemCode",
    description: "exampleDescription",
    discountAmount: 42.42,
    discountPercentage: 42.42,
    docstatus: 42,
    grossProfit: 42.42,
    hasAlternativeItem: 42,
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    isAlternative: 42,
    isFreeItem: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    itemTaxRate: "exampleItemTaxRate",
    itemTaxTemplate: "exampleItemTaxTemplate",
    marginRateOrAmount: 42.42,
    marginType: "exampleMarginType",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    netAmount: 42.42,
    netRate: 42.42,
    owner: "exampleOwner",
    pageBreak: 42,
    parent: "exampleParent",
    parentField: "exampleParentField",
    parentType: "exampleParentType",
    prevdocDocname: "examplePrevdocDocname",
    prevdocDoctype: "examplePrevdocDoctype",
    priceListRate: 42.42,
    pricingRules: "examplePricingRules",
    projectedQty: 42.42,
    qty: 42.42,
    rate: 42.42,
    rateWithMargin: 42.42,
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    stockUomRate: 42.42,
    totalWeight: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    valuationRate: 42.42,
    warehouse: "exampleWarehouse",
    weightPerUnit: 42.42,
    weightUom: "exampleWeightUom",
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  additionalNotes: "exampleAdditionalNotes",
  againstBlanketOrder: 42,
  amount: 42.42,
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  brand: "exampleBrand",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  grossProfit: 42.42,
  hasAlternativeItem: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isAlternative: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netAmount: 42.42,
  netRate: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  prevdocDocname: "examplePrevdocDocname",
  prevdocDoctype: "examplePrevdocDoctype",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  projectedQty: 42.42,
  qty: 42.42,
  rate: 42.42,
  rateWithMargin: 42.42,
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};

const service = {
  createQuotationItem() {
    return CREATE_RESULT;
  },
  quotationItems: () => FIND_MANY_RESULT,
  quotationItem: ({ where }: { where: { id: string } }) => {
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

describe("QuotationItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QuotationItemService,
          useValue: service,
        },
      ],
      controllers: [QuotationItemController],
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

  test("POST /quotationItems", async () => {
    await request(app.getHttpServer())
      .post("/quotationItems")
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

  test("GET /quotationItems", async () => {
    await request(app.getHttpServer())
      .get("/quotationItems")
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

  test("GET /quotationItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/quotationItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /quotationItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/quotationItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /quotationItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/quotationItems")
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
          .post("/quotationItems")
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
