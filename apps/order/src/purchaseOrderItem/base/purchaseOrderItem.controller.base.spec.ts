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
import { PurchaseOrderItemController } from "../purchaseOrderItem.controller";
import { PurchaseOrderItemService } from "../purchaseOrderItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualQty: 42.42,
  againstBlanketOrder: 42,
  amount: 42.42,
  applyTds: 42,
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  billedAmt: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  bom: "exampleBom",
  brand: "exampleBrand",
  companyTotalStock: 42.42,
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  deliveredBySupplier: 42,
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  expectedDeliveryDate: new Date(),
  expenseAccount: "exampleExpenseAccount",
  fgItem: "exampleFgItem",
  fgItemQty: 42.42,
  fromWarehouse: "exampleFromWarehouse",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeExplodedItems: 42,
  isFixedAsset: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  lastPurchaseRate: 42.42,
  manufacturer: "exampleManufacturer",
  manufacturerPartNo: "exampleManufacturerPartNo",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
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
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  productBundle: "exampleProductBundle",
  productionPlan: "exampleProductionPlan",
  productionPlanItem: "exampleProductionPlanItem",
  productionPlanSubAssemblyItem: "exampleProductionPlanSubAssemblyItem",
  project: "exampleProject",
  qty: 42.42,
  rate: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  returnedQty: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  salesOrderPackedItem: "exampleSalesOrderPackedItem",
  scheduleDate: new Date(),
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  supplierPartNo: "exampleSupplierPartNo",
  supplierQuotation: "exampleSupplierQuotation",
  supplierQuotationItem: "exampleSupplierQuotationItem",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  wipCompositeAsset: "exampleWipCompositeAsset",
};
const CREATE_RESULT = {
  actualQty: 42.42,
  againstBlanketOrder: 42,
  amount: 42.42,
  applyTds: 42,
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  billedAmt: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  bom: "exampleBom",
  brand: "exampleBrand",
  companyTotalStock: 42.42,
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  deliveredBySupplier: 42,
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  expectedDeliveryDate: new Date(),
  expenseAccount: "exampleExpenseAccount",
  fgItem: "exampleFgItem",
  fgItemQty: 42.42,
  fromWarehouse: "exampleFromWarehouse",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeExplodedItems: 42,
  isFixedAsset: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  lastPurchaseRate: 42.42,
  manufacturer: "exampleManufacturer",
  manufacturerPartNo: "exampleManufacturerPartNo",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
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
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  productBundle: "exampleProductBundle",
  productionPlan: "exampleProductionPlan",
  productionPlanItem: "exampleProductionPlanItem",
  productionPlanSubAssemblyItem: "exampleProductionPlanSubAssemblyItem",
  project: "exampleProject",
  qty: 42.42,
  rate: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  returnedQty: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  salesOrderPackedItem: "exampleSalesOrderPackedItem",
  scheduleDate: new Date(),
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  supplierPartNo: "exampleSupplierPartNo",
  supplierQuotation: "exampleSupplierQuotation",
  supplierQuotationItem: "exampleSupplierQuotationItem",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  wipCompositeAsset: "exampleWipCompositeAsset",
};
const FIND_MANY_RESULT = [
  {
    actualQty: 42.42,
    againstBlanketOrder: 42,
    amount: 42.42,
    applyTds: 42,
    baseAmount: 42.42,
    baseNetAmount: 42.42,
    baseNetRate: 42.42,
    basePriceListRate: 42.42,
    baseRate: 42.42,
    baseRateWithMargin: 42.42,
    billedAmt: 42.42,
    blanketOrder: "exampleBlanketOrder",
    blanketOrderRate: 42.42,
    bom: "exampleBom",
    brand: "exampleBrand",
    companyTotalStock: 42.42,
    conversionFactor: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    deliveredBySupplier: 42,
    description: "exampleDescription",
    discountAmount: 42.42,
    discountPercentage: 42.42,
    docstatus: 42,
    expectedDeliveryDate: new Date(),
    expenseAccount: "exampleExpenseAccount",
    fgItem: "exampleFgItem",
    fgItemQty: 42.42,
    fromWarehouse: "exampleFromWarehouse",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    includeExplodedItems: 42,
    isFixedAsset: 42,
    isFreeItem: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    itemTaxRate: "exampleItemTaxRate",
    itemTaxTemplate: "exampleItemTaxTemplate",
    lastPurchaseRate: 42.42,
    manufacturer: "exampleManufacturer",
    manufacturerPartNo: "exampleManufacturerPartNo",
    marginRateOrAmount: 42.42,
    marginType: "exampleMarginType",
    materialRequest: "exampleMaterialRequest",
    materialRequestItem: "exampleMaterialRequestItem",
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
    priceListRate: 42.42,
    pricingRules: "examplePricingRules",
    productBundle: "exampleProductBundle",
    productionPlan: "exampleProductionPlan",
    productionPlanItem: "exampleProductionPlanItem",
    productionPlanSubAssemblyItem: "exampleProductionPlanSubAssemblyItem",
    project: "exampleProject",
    qty: 42.42,
    rate: 42.42,
    rateWithMargin: 42.42,
    receivedQty: 42.42,
    returnedQty: 42.42,
    salesOrder: "exampleSalesOrder",
    salesOrderItem: "exampleSalesOrderItem",
    salesOrderPackedItem: "exampleSalesOrderPackedItem",
    scheduleDate: new Date(),
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    stockUomRate: 42.42,
    supplierPartNo: "exampleSupplierPartNo",
    supplierQuotation: "exampleSupplierQuotation",
    supplierQuotationItem: "exampleSupplierQuotationItem",
    totalWeight: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    warehouse: "exampleWarehouse",
    weightPerUnit: 42.42,
    weightUom: "exampleWeightUom",
    wipCompositeAsset: "exampleWipCompositeAsset",
  },
];
const FIND_ONE_RESULT = {
  actualQty: 42.42,
  againstBlanketOrder: 42,
  amount: 42.42,
  applyTds: 42,
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  billedAmt: 42.42,
  blanketOrder: "exampleBlanketOrder",
  blanketOrderRate: 42.42,
  bom: "exampleBom",
  brand: "exampleBrand",
  companyTotalStock: 42.42,
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  deliveredBySupplier: 42,
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  expectedDeliveryDate: new Date(),
  expenseAccount: "exampleExpenseAccount",
  fgItem: "exampleFgItem",
  fgItemQty: 42.42,
  fromWarehouse: "exampleFromWarehouse",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeExplodedItems: 42,
  isFixedAsset: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  lastPurchaseRate: 42.42,
  manufacturer: "exampleManufacturer",
  manufacturerPartNo: "exampleManufacturerPartNo",
  marginRateOrAmount: 42.42,
  marginType: "exampleMarginType",
  materialRequest: "exampleMaterialRequest",
  materialRequestItem: "exampleMaterialRequestItem",
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
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  productBundle: "exampleProductBundle",
  productionPlan: "exampleProductionPlan",
  productionPlanItem: "exampleProductionPlanItem",
  productionPlanSubAssemblyItem: "exampleProductionPlanSubAssemblyItem",
  project: "exampleProject",
  qty: 42.42,
  rate: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  returnedQty: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  salesOrderPackedItem: "exampleSalesOrderPackedItem",
  scheduleDate: new Date(),
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  supplierPartNo: "exampleSupplierPartNo",
  supplierQuotation: "exampleSupplierQuotation",
  supplierQuotationItem: "exampleSupplierQuotationItem",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  wipCompositeAsset: "exampleWipCompositeAsset",
};

const service = {
  createPurchaseOrderItem() {
    return CREATE_RESULT;
  },
  purchaseOrderItems: () => FIND_MANY_RESULT,
  purchaseOrderItem: ({ where }: { where: { id: string } }) => {
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

describe("PurchaseOrderItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PurchaseOrderItemService,
          useValue: service,
        },
      ],
      controllers: [PurchaseOrderItemController],
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

  test("POST /purchaseOrderItems", async () => {
    await request(app.getHttpServer())
      .post("/purchaseOrderItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        expectedDeliveryDate: CREATE_RESULT.expectedDeliveryDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /purchaseOrderItems", async () => {
    await request(app.getHttpServer())
      .get("/purchaseOrderItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          expectedDeliveryDate:
            FIND_MANY_RESULT[0].expectedDeliveryDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          scheduleDate: FIND_MANY_RESULT[0].scheduleDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /purchaseOrderItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseOrderItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /purchaseOrderItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseOrderItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        expectedDeliveryDate:
          FIND_ONE_RESULT.expectedDeliveryDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        scheduleDate: FIND_ONE_RESULT.scheduleDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /purchaseOrderItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/purchaseOrderItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        expectedDeliveryDate: CREATE_RESULT.expectedDeliveryDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/purchaseOrderItems")
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
