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
import { PurchaseReceiptItemController } from "../purchaseReceiptItem.controller";
import { PurchaseReceiptItemService } from "../purchaseReceiptItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowZeroValuationRate: 42,
  amount: 42.42,
  applyTds: 42,
  assetCategory: "exampleAssetCategory",
  assetLocation: "exampleAssetLocation",
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  billedAmt: 42.42,
  bom: "exampleBom",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  deliveryNoteItem: "exampleDeliveryNoteItem",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  fromWarehouse: "exampleFromWarehouse",
  hasItemScanned: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeExplodedItems: 42,
  isFixedAsset: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxAmount: 42.42,
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  landedCostVoucherAmount: 42.42,
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
  project: "exampleProject",
  provisionalExpenseAccount: "exampleProvisionalExpenseAccount",
  purchaseInvoice: "examplePurchaseInvoice",
  purchaseInvoiceItem: "examplePurchaseInvoiceItem",
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  purchaseReceiptItem: "examplePurchaseReceiptItem",
  putawayRule: "examplePutawayRule",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateDifferenceWithPurchaseInvoice: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  receivedStockQty: 42.42,
  rejectedQty: 42.42,
  rejectedSerialAndBatchBundle: "exampleRejectedSerialAndBatchBundle",
  rejectedSerialNo: "exampleRejectedSerialNo",
  rejectedWarehouse: "exampleRejectedWarehouse",
  retainSample: 42,
  returnQtyFromRejectedWarehouse: 42,
  returnedQty: 42.42,
  rmSuppCost: 42.42,
  salesIncomingRate: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  sampleQuantity: 42,
  scheduleDate: new Date(),
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  subcontractingReceiptItem: "exampleSubcontractingReceiptItem",
  supplierPartNo: "exampleSupplierPartNo",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  wipCompositeAsset: "exampleWipCompositeAsset",
};
const CREATE_RESULT = {
  allowZeroValuationRate: 42,
  amount: 42.42,
  applyTds: 42,
  assetCategory: "exampleAssetCategory",
  assetLocation: "exampleAssetLocation",
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  billedAmt: 42.42,
  bom: "exampleBom",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  deliveryNoteItem: "exampleDeliveryNoteItem",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  fromWarehouse: "exampleFromWarehouse",
  hasItemScanned: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeExplodedItems: 42,
  isFixedAsset: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxAmount: 42.42,
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  landedCostVoucherAmount: 42.42,
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
  project: "exampleProject",
  provisionalExpenseAccount: "exampleProvisionalExpenseAccount",
  purchaseInvoice: "examplePurchaseInvoice",
  purchaseInvoiceItem: "examplePurchaseInvoiceItem",
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  purchaseReceiptItem: "examplePurchaseReceiptItem",
  putawayRule: "examplePutawayRule",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateDifferenceWithPurchaseInvoice: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  receivedStockQty: 42.42,
  rejectedQty: 42.42,
  rejectedSerialAndBatchBundle: "exampleRejectedSerialAndBatchBundle",
  rejectedSerialNo: "exampleRejectedSerialNo",
  rejectedWarehouse: "exampleRejectedWarehouse",
  retainSample: 42,
  returnQtyFromRejectedWarehouse: 42,
  returnedQty: 42.42,
  rmSuppCost: 42.42,
  salesIncomingRate: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  sampleQuantity: 42,
  scheduleDate: new Date(),
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  subcontractingReceiptItem: "exampleSubcontractingReceiptItem",
  supplierPartNo: "exampleSupplierPartNo",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  wipCompositeAsset: "exampleWipCompositeAsset",
};
const FIND_MANY_RESULT = [
  {
    allowZeroValuationRate: 42,
    amount: 42.42,
    applyTds: 42,
    assetCategory: "exampleAssetCategory",
    assetLocation: "exampleAssetLocation",
    barcode: "exampleBarcode",
    baseAmount: 42.42,
    baseNetAmount: 42.42,
    baseNetRate: 42.42,
    basePriceListRate: 42.42,
    baseRate: 42.42,
    baseRateWithMargin: 42.42,
    batchNo: "exampleBatchNo",
    billedAmt: 42.42,
    bom: "exampleBom",
    brand: "exampleBrand",
    conversionFactor: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    deliveryNoteItem: "exampleDeliveryNoteItem",
    description: "exampleDescription",
    discountAmount: 42.42,
    discountPercentage: 42.42,
    docstatus: 42,
    expenseAccount: "exampleExpenseAccount",
    fromWarehouse: "exampleFromWarehouse",
    hasItemScanned: 42,
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    includeExplodedItems: 42,
    isFixedAsset: 42,
    isFreeItem: 42,
    itemCode: "exampleItemCode",
    itemGroup: "exampleItemGroup",
    itemName: "exampleItemName",
    itemTaxAmount: 42.42,
    itemTaxRate: "exampleItemTaxRate",
    itemTaxTemplate: "exampleItemTaxTemplate",
    landedCostVoucherAmount: 42.42,
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
    project: "exampleProject",
    provisionalExpenseAccount: "exampleProvisionalExpenseAccount",
    purchaseInvoice: "examplePurchaseInvoice",
    purchaseInvoiceItem: "examplePurchaseInvoiceItem",
    purchaseOrder: "examplePurchaseOrder",
    purchaseOrderItem: "examplePurchaseOrderItem",
    purchaseReceiptItem: "examplePurchaseReceiptItem",
    putawayRule: "examplePutawayRule",
    qty: 42.42,
    qualityInspection: "exampleQualityInspection",
    rate: 42.42,
    rateDifferenceWithPurchaseInvoice: 42.42,
    rateWithMargin: 42.42,
    receivedQty: 42.42,
    receivedStockQty: 42.42,
    rejectedQty: 42.42,
    rejectedSerialAndBatchBundle: "exampleRejectedSerialAndBatchBundle",
    rejectedSerialNo: "exampleRejectedSerialNo",
    rejectedWarehouse: "exampleRejectedWarehouse",
    retainSample: 42,
    returnQtyFromRejectedWarehouse: 42,
    returnedQty: 42.42,
    rmSuppCost: 42.42,
    salesIncomingRate: 42.42,
    salesOrder: "exampleSalesOrder",
    salesOrderItem: "exampleSalesOrderItem",
    sampleQuantity: 42,
    scheduleDate: new Date(),
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    stockUomRate: 42.42,
    subcontractingReceiptItem: "exampleSubcontractingReceiptItem",
    supplierPartNo: "exampleSupplierPartNo",
    totalWeight: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    useSerialBatchFields: 42,
    valuationRate: 42.42,
    warehouse: "exampleWarehouse",
    weightPerUnit: 42.42,
    weightUom: "exampleWeightUom",
    wipCompositeAsset: "exampleWipCompositeAsset",
  },
];
const FIND_ONE_RESULT = {
  allowZeroValuationRate: 42,
  amount: 42.42,
  applyTds: 42,
  assetCategory: "exampleAssetCategory",
  assetLocation: "exampleAssetLocation",
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  billedAmt: 42.42,
  bom: "exampleBom",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  deliveryNoteItem: "exampleDeliveryNoteItem",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  fromWarehouse: "exampleFromWarehouse",
  hasItemScanned: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  includeExplodedItems: 42,
  isFixedAsset: 42,
  isFreeItem: 42,
  itemCode: "exampleItemCode",
  itemGroup: "exampleItemGroup",
  itemName: "exampleItemName",
  itemTaxAmount: 42.42,
  itemTaxRate: "exampleItemTaxRate",
  itemTaxTemplate: "exampleItemTaxTemplate",
  landedCostVoucherAmount: 42.42,
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
  project: "exampleProject",
  provisionalExpenseAccount: "exampleProvisionalExpenseAccount",
  purchaseInvoice: "examplePurchaseInvoice",
  purchaseInvoiceItem: "examplePurchaseInvoiceItem",
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  purchaseReceiptItem: "examplePurchaseReceiptItem",
  putawayRule: "examplePutawayRule",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateDifferenceWithPurchaseInvoice: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  receivedStockQty: 42.42,
  rejectedQty: 42.42,
  rejectedSerialAndBatchBundle: "exampleRejectedSerialAndBatchBundle",
  rejectedSerialNo: "exampleRejectedSerialNo",
  rejectedWarehouse: "exampleRejectedWarehouse",
  retainSample: 42,
  returnQtyFromRejectedWarehouse: 42,
  returnedQty: 42.42,
  rmSuppCost: 42.42,
  salesIncomingRate: 42.42,
  salesOrder: "exampleSalesOrder",
  salesOrderItem: "exampleSalesOrderItem",
  sampleQuantity: 42,
  scheduleDate: new Date(),
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  subcontractingReceiptItem: "exampleSubcontractingReceiptItem",
  supplierPartNo: "exampleSupplierPartNo",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  valuationRate: 42.42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
  wipCompositeAsset: "exampleWipCompositeAsset",
};

const service = {
  createPurchaseReceiptItem() {
    return CREATE_RESULT;
  },
  purchaseReceiptItems: () => FIND_MANY_RESULT,
  purchaseReceiptItem: ({ where }: { where: { id: string } }) => {
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

describe("PurchaseReceiptItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PurchaseReceiptItemService,
          useValue: service,
        },
      ],
      controllers: [PurchaseReceiptItemController],
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

  test("POST /purchaseReceiptItems", async () => {
    await request(app.getHttpServer())
      .post("/purchaseReceiptItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /purchaseReceiptItems", async () => {
    await request(app.getHttpServer())
      .get("/purchaseReceiptItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          scheduleDate: FIND_MANY_RESULT[0].scheduleDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /purchaseReceiptItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseReceiptItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /purchaseReceiptItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseReceiptItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        scheduleDate: FIND_ONE_RESULT.scheduleDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /purchaseReceiptItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/purchaseReceiptItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        scheduleDate: CREATE_RESULT.scheduleDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/purchaseReceiptItems")
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
