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
import { DeliveryNoteItemController } from "../deliveryNoteItem.controller";
import { DeliveryNoteItemService } from "../deliveryNoteItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualBatchQty: 42.42,
  actualQty: 42.42,
  againstSalesInvoice: "exampleAgainstSalesInvoice",
  againstSalesOrder: "exampleAgainstSalesOrder",
  allowZeroValuationRate: "true",
  amount: 42.42,
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  billedAmt: 42.42,
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  dnDetail: "exampleDnDetail",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  grantCommission: "true",
  hasItemScanned: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  incomingRate: 42.42,
  installedQty: 42.42,
  isFreeItem: "true",
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
  owner: "exampleOwner",
  packedQty: 42.42,
  pageBreak: "true",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pickListItem: "examplePickListItem",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  project: "exampleProject",
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  returnedQty: 42.42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  siDetail: "exampleSiDetail",
  soDetail: "exampleSoDetail",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};
const CREATE_RESULT = {
  actualBatchQty: 42.42,
  actualQty: 42.42,
  againstSalesInvoice: "exampleAgainstSalesInvoice",
  againstSalesOrder: "exampleAgainstSalesOrder",
  allowZeroValuationRate: "true",
  amount: 42.42,
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  billedAmt: 42.42,
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  dnDetail: "exampleDnDetail",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  grantCommission: "true",
  hasItemScanned: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  incomingRate: 42.42,
  installedQty: 42.42,
  isFreeItem: "true",
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
  owner: "exampleOwner",
  packedQty: 42.42,
  pageBreak: "true",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pickListItem: "examplePickListItem",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  project: "exampleProject",
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  returnedQty: 42.42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  siDetail: "exampleSiDetail",
  soDetail: "exampleSoDetail",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};
const FIND_MANY_RESULT = [
  {
    actualBatchQty: 42.42,
    actualQty: 42.42,
    againstSalesInvoice: "exampleAgainstSalesInvoice",
    againstSalesOrder: "exampleAgainstSalesOrder",
    allowZeroValuationRate: "true",
    amount: 42.42,
    barcode: "exampleBarcode",
    baseAmount: 42.42,
    baseNetAmount: 42.42,
    baseNetRate: 42.42,
    basePriceListRate: 42.42,
    baseRate: 42.42,
    baseRateWithMargin: 42.42,
    batchNo: "exampleBatchNo",
    billedAmt: 42.42,
    brand: "exampleBrand",
    conversionFactor: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    customerItemCode: "exampleCustomerItemCode",
    description: "exampleDescription",
    discountAmount: 42.42,
    discountPercentage: 42.42,
    dnDetail: "exampleDnDetail",
    docstatus: 42,
    expenseAccount: "exampleExpenseAccount",
    grantCommission: "true",
    hasItemScanned: "true",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    incomingRate: 42.42,
    installedQty: 42.42,
    isFreeItem: "true",
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
    owner: "exampleOwner",
    packedQty: 42.42,
    pageBreak: "true",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    pickListItem: "examplePickListItem",
    priceListRate: 42.42,
    pricingRules: "examplePricingRules",
    project: "exampleProject",
    purchaseOrder: "examplePurchaseOrder",
    purchaseOrderItem: "examplePurchaseOrderItem",
    qty: 42.42,
    qualityInspection: "exampleQualityInspection",
    rate: 42.42,
    rateWithMargin: 42.42,
    receivedQty: 42.42,
    returnedQty: 42.42,
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    siDetail: "exampleSiDetail",
    soDetail: "exampleSoDetail",
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    stockUomRate: 42.42,
    targetWarehouse: "exampleTargetWarehouse",
    totalWeight: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    useSerialBatchFields: "true",
    warehouse: "exampleWarehouse",
    weightPerUnit: 42.42,
    weightUom: "exampleWeightUom",
  },
];
const FIND_ONE_RESULT = {
  actualBatchQty: 42.42,
  actualQty: 42.42,
  againstSalesInvoice: "exampleAgainstSalesInvoice",
  againstSalesOrder: "exampleAgainstSalesOrder",
  allowZeroValuationRate: "true",
  amount: 42.42,
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  billedAmt: 42.42,
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  dnDetail: "exampleDnDetail",
  docstatus: 42,
  expenseAccount: "exampleExpenseAccount",
  grantCommission: "true",
  hasItemScanned: "true",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  incomingRate: 42.42,
  installedQty: 42.42,
  isFreeItem: "true",
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
  owner: "exampleOwner",
  packedQty: 42.42,
  pageBreak: "true",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  pickListItem: "examplePickListItem",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  project: "exampleProject",
  purchaseOrder: "examplePurchaseOrder",
  purchaseOrderItem: "examplePurchaseOrderItem",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateWithMargin: 42.42,
  receivedQty: 42.42,
  returnedQty: 42.42,
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  siDetail: "exampleSiDetail",
  soDetail: "exampleSoDetail",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  stockUomRate: 42.42,
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: "true",
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};

const service = {
  createDeliveryNoteItem() {
    return CREATE_RESULT;
  },
  deliveryNoteItems: () => FIND_MANY_RESULT,
  deliveryNoteItem: ({ where }: { where: { id: string } }) => {
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

describe("DeliveryNoteItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliveryNoteItemService,
          useValue: service,
        },
      ],
      controllers: [DeliveryNoteItemController],
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

  test("POST /deliveryNoteItems", async () => {
    await request(app.getHttpServer())
      .post("/deliveryNoteItems")
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

  test("GET /deliveryNoteItems", async () => {
    await request(app.getHttpServer())
      .get("/deliveryNoteItems")
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

  test("GET /deliveryNoteItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryNoteItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliveryNoteItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveryNoteItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /deliveryNoteItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deliveryNoteItems")
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
          .post("/deliveryNoteItems")
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
