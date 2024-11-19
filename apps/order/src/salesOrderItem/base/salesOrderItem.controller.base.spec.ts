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
import { SalesOrderItemController } from "../salesOrderItem.controller";
import { SalesOrderItemService } from "../salesOrderItem.service";

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
  billedAmt: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  bomNo: "exampleBomNo",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  deliveredBySupplier: 42,
  deliveredQty: 42.42,
  deliveryDate: new Date(),
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  ensureDeliveryBasedOnProducedSerialNo: 42,
  grantCommission: 42,
  grossProfit: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isFreeItem: 42,
  isStockItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netAmount: 42.42,
  netRate: 42.42,
  orderedQty: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  pickedQty: 42.42,
  plannedQty: 42.42,
  prevdocDocname: "examplePrevdocDocname",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  producedQty: 42.42,
  productionPlanQty: 42.42,
  projectedQty: 42.42,
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  qty: 42.42,
  quotationItem: "exampleQuotationItem",
  rate: 42.42,
  rateWithMargin: 42.42,
  reserveStock: 42,
  returnedQty: 42.42,
  stockQty: 42.42,
  stockReservedQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  supplier: "exampleSupplier",
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  transactionDate: new Date(),
  uom: "exampleUom",
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  workOrderQty: 42.42,
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
  billedAmt: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  bomNo: "exampleBomNo",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  deliveredBySupplier: 42,
  deliveredQty: 42.42,
  deliveryDate: new Date(),
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  ensureDeliveryBasedOnProducedSerialNo: 42,
  grantCommission: 42,
  grossProfit: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isFreeItem: 42,
  isStockItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netAmount: 42.42,
  netRate: 42.42,
  orderedQty: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  pickedQty: 42.42,
  plannedQty: 42.42,
  prevdocDocname: "examplePrevdocDocname",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  producedQty: 42.42,
  productionPlanQty: 42.42,
  projectedQty: 42.42,
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  qty: 42.42,
  quotationItem: "exampleQuotationItem",
  rate: 42.42,
  rateWithMargin: 42.42,
  reserveStock: 42,
  returnedQty: 42.42,
  stockQty: 42.42,
  stockReservedQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  supplier: "exampleSupplier",
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  transactionDate: new Date(),
  uom: "exampleUom",
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  workOrderQty: 42.42,
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
    billedAmt: 42.42,
    blanketOrder: "exampleBlanketOrder",
    blanketOrderRate: 42.42,
    bomNo: "exampleBomNo",
    brand: "exampleBrand",
    conversionFactor: 42.42,
    createdAt: new Date(),
    creation: new Date(),
    customerItemCode: "exampleCustomerItemCode",
    deliveredBySupplier: 42,
    deliveredQty: 42.42,
    deliveryDate: new Date(),
    description: "exampleDescription",
    discountAmount: 42.42,
    discountPercentage: 42.42,
    docstatus: 42,
    ensureDeliveryBasedOnProducedSerialNo: 42,
    grantCommission: 42,
    grossProfit: 42.42,
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    isFreeItem: 42,
    isStockItem: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    itemTaxRate: "exampleItemTaxRate",
    itemTaxTemplate: "exampleItemTaxTemplate",
    marginRateOrAmount: 42.42,
    marginType: "exampleMarginType",
    materialRequest: "exampleMaterialRequest",
    materialRequestItem: "exampleMaterialRequestItem",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    netAmount: 42.42,
    netRate: 42.42,
    orderedQty: 42.42,
    owner: "exampleOwner",
    pageBreak: 42,
    parent: "exampleParent",
    parentField: "exampleParentField",
    parentType: "exampleParentType",
    pickedQty: 42.42,
    plannedQty: 42.42,
    prevdocDocname: "examplePrevdocDocname",
    priceListRate: 42.42,
    pricingRules: "examplePricingRules",
    producedQty: 42.42,
    productionPlanQty: 42.42,
    projectedQty: 42.42,
    purchaseOrder: "examplePurchaseOrder",
    purchaseOrderItem: "examplePurchaseOrderItem",
    qty: 42.42,
    quotationItem: "exampleQuotationItem",
    rate: 42.42,
    rateWithMargin: 42.42,
    reserveStock: 42,
    returnedQty: 42.42,
    stockQty: 42.42,
    stockReservedQty: 42.42,
    stockUom: "exampleStockUom",
    stockUomRate: 42.42,
    supplier: "exampleSupplier",
    targetWarehouse: "exampleTargetWarehouse",
    totalWeight: 42.42,
    transactionDate: new Date(),
    uom: "exampleUom",
    updatedAt: new Date(),
    valuationRate: 42.42,
    warehouse: "exampleWarehouse",
    weightPerUnit: 42.42,
    weightUom: "exampleWeightUom",
    workOrderQty: 42.42,
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
  billedAmt: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  bomNo: "exampleBomNo",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  deliveredBySupplier: 42,
  deliveredQty: 42.42,
  deliveryDate: new Date(),
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  ensureDeliveryBasedOnProducedSerialNo: 42,
  grantCommission: 42,
  grossProfit: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  isFreeItem: 42,
  isStockItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  netAmount: 42.42,
  netRate: 42.42,
  orderedQty: 42.42,
  owner: "exampleOwner",
  pageBreak: 42,
  parent: "exampleParent",
  parentField: "exampleParentField",
  parentType: "exampleParentType",
  pickedQty: 42.42,
  plannedQty: 42.42,
  prevdocDocname: "examplePrevdocDocname",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  producedQty: 42.42,
  productionPlanQty: 42.42,
  projectedQty: 42.42,
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  qty: 42.42,
  quotationItem: "exampleQuotationItem",
  rate: 42.42,
  rateWithMargin: 42.42,
  reserveStock: 42,
  returnedQty: 42.42,
  stockQty: 42.42,
  stockReservedQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  supplier: "exampleSupplier",
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  transactionDate: new Date(),
  uom: "exampleUom",
  updatedAt: new Date(),
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  workOrderQty: 42.42,
};

const service = {
  createSalesOrderItem() {
    return CREATE_RESULT;
  },
  salesOrderItems: () => FIND_MANY_RESULT,
  salesOrderItem: ({ where }: { where: { id: string } }) => {
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

describe("SalesOrderItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SalesOrderItemService,
          useValue: service,
        },
      ],
      controllers: [SalesOrderItemController],
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

  test("POST /salesOrderItems", async () => {
    await request(app.getHttpServer())
      .post("/salesOrderItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        deliveryDate: CREATE_RESULT.deliveryDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /salesOrderItems", async () => {
    await request(app.getHttpServer())
      .get("/salesOrderItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          deliveryDate: FIND_MANY_RESULT[0].deliveryDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /salesOrderItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salesOrderItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /salesOrderItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salesOrderItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        deliveryDate: FIND_ONE_RESULT.deliveryDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /salesOrderItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/salesOrderItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        deliveryDate: CREATE_RESULT.deliveryDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/salesOrderItems")
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
