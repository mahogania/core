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
import { PosInvoiceItemController } from "../posInvoiceItem.controller";
import { PosInvoiceItemService } from "../posInvoiceItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualBatchQty: 42.42,
  actualQty: 42.42,
  allowZeroValuationRate: 42,
  amount: 42.42,
  asset: "exampleAsset",
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  deferredRevenueAccount: "exampleDeferredRevenueAccount",
  deliveredBySupplier: 42,
  deliveredQty: 42.42,
  deliveryNote: "exampleDeliveryNote",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  dnDetail: "exampleDnDetail",
  docStatus: 42,
  enableDeferredRevenue: 42,
  expenseAccount: "exampleExpenseAccount",
  financeBook: "exampleFinanceBook",
  grantCommission: 42,
  hasItemScanned: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  incomeAccount: "exampleIncomeAccount",
  isFixedAsset: 42,
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
  posInvoiceItem: "examplePosInvoiceItem",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  project: "exampleProject",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateWithMargin: 42.42,
  salesOrder: "exampleSalesOrder",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  serviceEndDate: new Date(),
  serviceStartDate: new Date(),
  serviceStopDate: new Date(),
  soDetail: "exampleSoDetail",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};
const CREATE_RESULT = {
  actualBatchQty: 42.42,
  actualQty: 42.42,
  allowZeroValuationRate: 42,
  amount: 42.42,
  asset: "exampleAsset",
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  deferredRevenueAccount: "exampleDeferredRevenueAccount",
  deliveredBySupplier: 42,
  deliveredQty: 42.42,
  deliveryNote: "exampleDeliveryNote",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  dnDetail: "exampleDnDetail",
  docStatus: 42,
  enableDeferredRevenue: 42,
  expenseAccount: "exampleExpenseAccount",
  financeBook: "exampleFinanceBook",
  grantCommission: 42,
  hasItemScanned: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  incomeAccount: "exampleIncomeAccount",
  isFixedAsset: 42,
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
  posInvoiceItem: "examplePosInvoiceItem",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  project: "exampleProject",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateWithMargin: 42.42,
  salesOrder: "exampleSalesOrder",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  serviceEndDate: new Date(),
  serviceStartDate: new Date(),
  serviceStopDate: new Date(),
  soDetail: "exampleSoDetail",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};
const FIND_MANY_RESULT = [
  {
    actualBatchQty: 42.42,
    actualQty: 42.42,
    allowZeroValuationRate: 42,
    amount: 42.42,
    asset: "exampleAsset",
    barcode: "exampleBarcode",
    baseAmount: 42.42,
    baseNetAmount: 42.42,
    baseNetRate: 42.42,
    basePriceListRate: 42.42,
    baseRate: 42.42,
    baseRateWithMargin: 42.42,
    batchNo: "exampleBatchNo",
    brand: "exampleBrand",
    conversionFactor: 42.42,
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    customerItemCode: "exampleCustomerItemCode",
    deferredRevenueAccount: "exampleDeferredRevenueAccount",
    deliveredBySupplier: 42,
    deliveredQty: 42.42,
    deliveryNote: "exampleDeliveryNote",
    description: "exampleDescription",
    discountAmount: 42.42,
    discountPercentage: 42.42,
    dnDetail: "exampleDnDetail",
    docStatus: 42,
    enableDeferredRevenue: 42,
    expenseAccount: "exampleExpenseAccount",
    financeBook: "exampleFinanceBook",
    grantCommission: 42,
    hasItemScanned: 42,
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    incomeAccount: "exampleIncomeAccount",
    isFixedAsset: 42,
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
    posInvoiceItem: "examplePosInvoiceItem",
    priceListRate: 42.42,
    pricingRules: "examplePricingRules",
    project: "exampleProject",
    qty: 42.42,
    qualityInspection: "exampleQualityInspection",
    rate: 42.42,
    rateWithMargin: 42.42,
    salesOrder: "exampleSalesOrder",
    serialAndBatchBundle: "exampleSerialAndBatchBundle",
    serialNo: "exampleSerialNo",
    serviceEndDate: new Date(),
    serviceStartDate: new Date(),
    serviceStopDate: new Date(),
    soDetail: "exampleSoDetail",
    stockQty: 42.42,
    stockUom: "exampleStockUom",
    targetWarehouse: "exampleTargetWarehouse",
    totalWeight: 42.42,
    uom: "exampleUom",
    updatedAt: new Date(),
    useSerialBatchFields: 42,
    warehouse: "exampleWarehouse",
    weightPerUnit: 42.42,
    weightUom: "exampleWeightUom",
  },
];
const FIND_ONE_RESULT = {
  actualBatchQty: 42.42,
  actualQty: 42.42,
  allowZeroValuationRate: 42,
  amount: 42.42,
  asset: "exampleAsset",
  barcode: "exampleBarcode",
  baseAmount: 42.42,
  baseNetAmount: 42.42,
  baseNetRate: 42.42,
  basePriceListRate: 42.42,
  baseRate: 42.42,
  baseRateWithMargin: 42.42,
  batchNo: "exampleBatchNo",
  brand: "exampleBrand",
  conversionFactor: 42.42,
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  customerItemCode: "exampleCustomerItemCode",
  deferredRevenueAccount: "exampleDeferredRevenueAccount",
  deliveredBySupplier: 42,
  deliveredQty: 42.42,
  deliveryNote: "exampleDeliveryNote",
  description: "exampleDescription",
  discountAmount: 42.42,
  discountPercentage: 42.42,
  dnDetail: "exampleDnDetail",
  docStatus: 42,
  enableDeferredRevenue: 42,
  expenseAccount: "exampleExpenseAccount",
  financeBook: "exampleFinanceBook",
  grantCommission: 42,
  hasItemScanned: 42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  incomeAccount: "exampleIncomeAccount",
  isFixedAsset: 42,
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
  posInvoiceItem: "examplePosInvoiceItem",
  priceListRate: 42.42,
  pricingRules: "examplePricingRules",
  project: "exampleProject",
  qty: 42.42,
  qualityInspection: "exampleQualityInspection",
  rate: 42.42,
  rateWithMargin: 42.42,
  salesOrder: "exampleSalesOrder",
  serialAndBatchBundle: "exampleSerialAndBatchBundle",
  serialNo: "exampleSerialNo",
  serviceEndDate: new Date(),
  serviceStartDate: new Date(),
  serviceStopDate: new Date(),
  soDetail: "exampleSoDetail",
  stockQty: 42.42,
  stockUom: "exampleStockUom",
  targetWarehouse: "exampleTargetWarehouse",
  totalWeight: 42.42,
  uom: "exampleUom",
  updatedAt: new Date(),
  useSerialBatchFields: 42,
  warehouse: "exampleWarehouse",
  weightPerUnit: 42.42,
  weightUom: "exampleWeightUom",
};

const service = {
  createPosInvoiceItem() {
    return CREATE_RESULT;
  },
  posInvoiceItems: () => FIND_MANY_RESULT,
  posInvoiceItem: ({ where }: { where: { id: string } }) => {
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

describe("PosInvoiceItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PosInvoiceItemService,
          useValue: service,
        },
      ],
      controllers: [PosInvoiceItemController],
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

  test("POST /posInvoiceItems", async () => {
    await request(app.getHttpServer())
      .post("/posInvoiceItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        serviceEndDate: CREATE_RESULT.serviceEndDate.toISOString(),
        serviceStartDate: CREATE_RESULT.serviceStartDate.toISOString(),
        serviceStopDate: CREATE_RESULT.serviceStopDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /posInvoiceItems", async () => {
    await request(app.getHttpServer())
      .get("/posInvoiceItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          serviceEndDate: FIND_MANY_RESULT[0].serviceEndDate.toISOString(),
          serviceStartDate: FIND_MANY_RESULT[0].serviceStartDate.toISOString(),
          serviceStopDate: FIND_MANY_RESULT[0].serviceStopDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /posInvoiceItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posInvoiceItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /posInvoiceItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/posInvoiceItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        serviceEndDate: FIND_ONE_RESULT.serviceEndDate.toISOString(),
        serviceStartDate: FIND_ONE_RESULT.serviceStartDate.toISOString(),
        serviceStopDate: FIND_ONE_RESULT.serviceStopDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /posInvoiceItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/posInvoiceItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        serviceEndDate: CREATE_RESULT.serviceEndDate.toISOString(),
        serviceStartDate: CREATE_RESULT.serviceStartDate.toISOString(),
        serviceStopDate: CREATE_RESULT.serviceStopDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/posInvoiceItems")
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
