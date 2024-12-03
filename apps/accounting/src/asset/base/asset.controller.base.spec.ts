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
import { AssetController } from "../asset.controller";
import { AssetService } from "../asset.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalAssetCost: 42.42,
  amendedFrom: "exampleAmendedFrom",
  assetCategory: "exampleAssetCategory",
  assetName: "exampleAssetName",
  assetOwner: "exampleAssetOwner",
  assetOwnerCompany: "exampleAssetOwnerCompany",
  assetQuantity: 42,
  availableForUseDate: new Date(),
  bookedFixedAsset: 42,
  calculateDepreciation: 42,
  company: "exampleCompany",
  comprehensiveInsurance: "exampleComprehensiveInsurance",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  custodian: "exampleCustodian",
  customer: "exampleCustomer",
  defaultFinanceBook: "exampleDefaultFinanceBook",
  department: "exampleDepartment",
  deprEntryPostingStatus: "exampleDeprEntryPostingStatus",
  depreciationMethod: "exampleDepreciationMethod",
  disposalDate: new Date(),
  docstatus: 42,
  frequencyOfDepreciation: 42,
  grossPurchaseAmount: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  insuranceEndDate: new Date(),
  insuranceStartDate: new Date(),
  insuredValue: "exampleInsuredValue",
  insurer: "exampleInsurer",
  isCompositeAsset: 42,
  isExistingAsset: 42,
  isFullyDepreciated: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  journalEntryForScrap: "exampleJournalEntryForScrap",
  location: "exampleLocation",
  maintenanceRequired: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  nextDepreciationDate: new Date(),
  openingAccumulatedDepreciation: 42.42,
  openingNumberOfBookedDepreciations: 42,
  owner: "exampleOwner",
  policyNumber: "examplePolicyNumber",
  purchaseAmount: 42.42,
  purchaseDate: new Date(),
  purchaseInvoice: "examplePurchaseInvoice",
  purchaseInvoiceItem: "examplePurchaseInvoiceItem",
  purchaseReceipt: "examplePurchaseReceipt",
  purchaseReceiptItem: "examplePurchaseReceiptItem",
  splitFrom: "exampleSplitFrom",
  status: "exampleStatus",
  supplier: "exampleSupplier",
  totalAssetCost: 42.42,
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
  valueAfterDepreciation: 42.42,
};
const CREATE_RESULT = {
  additionalAssetCost: 42.42,
  amendedFrom: "exampleAmendedFrom",
  assetCategory: "exampleAssetCategory",
  assetName: "exampleAssetName",
  assetOwner: "exampleAssetOwner",
  assetOwnerCompany: "exampleAssetOwnerCompany",
  assetQuantity: 42,
  availableForUseDate: new Date(),
  bookedFixedAsset: 42,
  calculateDepreciation: 42,
  company: "exampleCompany",
  comprehensiveInsurance: "exampleComprehensiveInsurance",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  custodian: "exampleCustodian",
  customer: "exampleCustomer",
  defaultFinanceBook: "exampleDefaultFinanceBook",
  department: "exampleDepartment",
  deprEntryPostingStatus: "exampleDeprEntryPostingStatus",
  depreciationMethod: "exampleDepreciationMethod",
  disposalDate: new Date(),
  docstatus: 42,
  frequencyOfDepreciation: 42,
  grossPurchaseAmount: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  insuranceEndDate: new Date(),
  insuranceStartDate: new Date(),
  insuredValue: "exampleInsuredValue",
  insurer: "exampleInsurer",
  isCompositeAsset: 42,
  isExistingAsset: 42,
  isFullyDepreciated: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  journalEntryForScrap: "exampleJournalEntryForScrap",
  location: "exampleLocation",
  maintenanceRequired: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  nextDepreciationDate: new Date(),
  openingAccumulatedDepreciation: 42.42,
  openingNumberOfBookedDepreciations: 42,
  owner: "exampleOwner",
  policyNumber: "examplePolicyNumber",
  purchaseAmount: 42.42,
  purchaseDate: new Date(),
  purchaseInvoice: "examplePurchaseInvoice",
  purchaseInvoiceItem: "examplePurchaseInvoiceItem",
  purchaseReceipt: "examplePurchaseReceipt",
  purchaseReceiptItem: "examplePurchaseReceiptItem",
  splitFrom: "exampleSplitFrom",
  status: "exampleStatus",
  supplier: "exampleSupplier",
  totalAssetCost: 42.42,
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
  valueAfterDepreciation: 42.42,
};
const FIND_MANY_RESULT = [
  {
    additionalAssetCost: 42.42,
    amendedFrom: "exampleAmendedFrom",
    assetCategory: "exampleAssetCategory",
    assetName: "exampleAssetName",
    assetOwner: "exampleAssetOwner",
    assetOwnerCompany: "exampleAssetOwnerCompany",
    assetQuantity: 42,
    availableForUseDate: new Date(),
    bookedFixedAsset: 42,
    calculateDepreciation: 42,
    company: "exampleCompany",
    comprehensiveInsurance: "exampleComprehensiveInsurance",
    costCenter: "exampleCostCenter",
    createdAt: new Date(),
    creation: new Date(),
    custodian: "exampleCustodian",
    customer: "exampleCustomer",
    defaultFinanceBook: "exampleDefaultFinanceBook",
    department: "exampleDepartment",
    deprEntryPostingStatus: "exampleDeprEntryPostingStatus",
    depreciationMethod: "exampleDepreciationMethod",
    disposalDate: new Date(),
    docstatus: 42,
    frequencyOfDepreciation: 42,
    grossPurchaseAmount: 42.42,
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    insuranceEndDate: new Date(),
    insuranceStartDate: new Date(),
    insuredValue: "exampleInsuredValue",
    insurer: "exampleInsurer",
    isCompositeAsset: 42,
    isExistingAsset: 42,
    isFullyDepreciated: 42,
    itemCode: "exampleItemCode",
    itemName: "exampleItemName",
    journalEntryForScrap: "exampleJournalEntryForScrap",
    location: "exampleLocation",
    maintenanceRequired: 42,
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    nextDepreciationDate: new Date(),
    openingAccumulatedDepreciation: 42.42,
    openingNumberOfBookedDepreciations: 42,
    owner: "exampleOwner",
    policyNumber: "examplePolicyNumber",
    purchaseAmount: 42.42,
    purchaseDate: new Date(),
    purchaseInvoice: "examplePurchaseInvoice",
    purchaseInvoiceItem: "examplePurchaseInvoiceItem",
    purchaseReceipt: "examplePurchaseReceipt",
    purchaseReceiptItem: "examplePurchaseReceiptItem",
    splitFrom: "exampleSplitFrom",
    status: "exampleStatus",
    supplier: "exampleSupplier",
    totalAssetCost: 42.42,
    totalNumberOfDepreciations: 42,
    updatedAt: new Date(),
    valueAfterDepreciation: 42.42,
  },
];
const FIND_ONE_RESULT = {
  additionalAssetCost: 42.42,
  amendedFrom: "exampleAmendedFrom",
  assetCategory: "exampleAssetCategory",
  assetName: "exampleAssetName",
  assetOwner: "exampleAssetOwner",
  assetOwnerCompany: "exampleAssetOwnerCompany",
  assetQuantity: 42,
  availableForUseDate: new Date(),
  bookedFixedAsset: 42,
  calculateDepreciation: 42,
  company: "exampleCompany",
  comprehensiveInsurance: "exampleComprehensiveInsurance",
  costCenter: "exampleCostCenter",
  createdAt: new Date(),
  creation: new Date(),
  custodian: "exampleCustodian",
  customer: "exampleCustomer",
  defaultFinanceBook: "exampleDefaultFinanceBook",
  department: "exampleDepartment",
  deprEntryPostingStatus: "exampleDeprEntryPostingStatus",
  depreciationMethod: "exampleDepreciationMethod",
  disposalDate: new Date(),
  docstatus: 42,
  frequencyOfDepreciation: 42,
  grossPurchaseAmount: 42.42,
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  insuranceEndDate: new Date(),
  insuranceStartDate: new Date(),
  insuredValue: "exampleInsuredValue",
  insurer: "exampleInsurer",
  isCompositeAsset: 42,
  isExistingAsset: 42,
  isFullyDepreciated: 42,
  itemCode: "exampleItemCode",
  itemName: "exampleItemName",
  journalEntryForScrap: "exampleJournalEntryForScrap",
  location: "exampleLocation",
  maintenanceRequired: 42,
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  nextDepreciationDate: new Date(),
  openingAccumulatedDepreciation: 42.42,
  openingNumberOfBookedDepreciations: 42,
  owner: "exampleOwner",
  policyNumber: "examplePolicyNumber",
  purchaseAmount: 42.42,
  purchaseDate: new Date(),
  purchaseInvoice: "examplePurchaseInvoice",
  purchaseInvoiceItem: "examplePurchaseInvoiceItem",
  purchaseReceipt: "examplePurchaseReceipt",
  purchaseReceiptItem: "examplePurchaseReceiptItem",
  splitFrom: "exampleSplitFrom",
  status: "exampleStatus",
  supplier: "exampleSupplier",
  totalAssetCost: 42.42,
  totalNumberOfDepreciations: 42,
  updatedAt: new Date(),
  valueAfterDepreciation: 42.42,
};

const service = {
  createAsset() {
    return CREATE_RESULT;
  },
  assets: () => FIND_MANY_RESULT,
  asset: ({ where }: { where: { id: string } }) => {
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

describe("Asset", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetService,
          useValue: service,
        },
      ],
      controllers: [AssetController],
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

  test("POST /assets", async () => {
    await request(app.getHttpServer())
      .post("/assets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        availableForUseDate: CREATE_RESULT.availableForUseDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        disposalDate: CREATE_RESULT.disposalDate.toISOString(),
        insuranceEndDate: CREATE_RESULT.insuranceEndDate.toISOString(),
        insuranceStartDate: CREATE_RESULT.insuranceStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        nextDepreciationDate: CREATE_RESULT.nextDepreciationDate.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /assets", async () => {
    await request(app.getHttpServer())
      .get("/assets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          availableForUseDate:
            FIND_MANY_RESULT[0].availableForUseDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          disposalDate: FIND_MANY_RESULT[0].disposalDate.toISOString(),
          insuranceEndDate: FIND_MANY_RESULT[0].insuranceEndDate.toISOString(),
          insuranceStartDate:
            FIND_MANY_RESULT[0].insuranceStartDate.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          nextDepreciationDate:
            FIND_MANY_RESULT[0].nextDepreciationDate.toISOString(),
          purchaseDate: FIND_MANY_RESULT[0].purchaseDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /assets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        availableForUseDate: FIND_ONE_RESULT.availableForUseDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        disposalDate: FIND_ONE_RESULT.disposalDate.toISOString(),
        insuranceEndDate: FIND_ONE_RESULT.insuranceEndDate.toISOString(),
        insuranceStartDate: FIND_ONE_RESULT.insuranceStartDate.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        nextDepreciationDate:
          FIND_ONE_RESULT.nextDepreciationDate.toISOString(),
        purchaseDate: FIND_ONE_RESULT.purchaseDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /assets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        availableForUseDate: CREATE_RESULT.availableForUseDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        disposalDate: CREATE_RESULT.disposalDate.toISOString(),
        insuranceEndDate: CREATE_RESULT.insuranceEndDate.toISOString(),
        insuranceStartDate: CREATE_RESULT.insuranceStartDate.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        nextDepreciationDate: CREATE_RESULT.nextDepreciationDate.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/assets")
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
